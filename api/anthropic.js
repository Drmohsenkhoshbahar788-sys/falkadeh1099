// Vercel serverless function to proxy requests to Anthropic securely.
// Includes basic IP-based rate limiting and input validation.
// Deploy this file at /api/anthropic.js on Vercel (or adapt for Netlify/AWS Lambda).

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 60; // per IP
const MAX_BODY_LENGTH = 64 * 1024; // 64KB
const MAX_MESSAGE_LENGTH = 8 * 1024; // 8KB per message content

// Use a global map to persist across warm lambda instances (best-effort).
if (!global.__rateLimitMap) global.__rateLimitMap = new Map();

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  try {
    // Basic body size guard
    const rawBody = JSON.stringify(req.body || {});
    if (rawBody.length > MAX_BODY_LENGTH) {
      return res.status(413).json({ error: 'Request payload too large' });
    }

    // Input validation: ensure messages is an array and content sizes are reasonable
    const { messages } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Invalid request: messages must be a non-empty array' });
    }
    for (const m of messages) {
      if (!m || typeof m.content !== 'string') return res.status(400).json({ error: 'Each message must have a string content' });
      if (m.content.length > MAX_MESSAGE_LENGTH) return res.status(400).json({ error: 'Message content too long' });
    }

    // Rate limiting (IP-based, best-effort)
    const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown').split(',')[0].trim();
    const now = Date.now();
    const map = global.__rateLimitMap;
    let entry = map.get(ip);
    if (!entry) {
      entry = { count: 1, start: now };
      map.set(ip, entry);
    } else {
      if (now - entry.start > RATE_LIMIT_WINDOW) {
        entry.count = 1; entry.start = now;
      } else {
        entry.count += 1;
      }
    }
    if (entry.count > MAX_REQUESTS_PER_WINDOW) {
      return res.status(429).json({ error: 'Rate limit exceeded' });
    }

    const API_KEY = process.env.ANTHROPIC_API_KEY;
    if (!API_KEY) return res.status(500).json({ error: 'Server misconfigured: missing ANTHROPIC_API_KEY' });

    // Forward the incoming JSON body to Anthropic. Do NOT log the API key.
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
      },
      body: JSON.stringify(req.body)
    });

    // If the upstream returns a streaming/chunked body we stream it back to the client.
    const contentType = resp.headers.get('content-type') || '';
    if (resp.body && contentType.includes('text/event-stream')) {
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(decoder.decode(value));
      }
      res.end();
      return;
    }

    // Otherwise proxy JSON response
    const data = await resp.json();
    res.status(resp.status).json(data);
  } catch (err) {
    console.error('Anthropic proxy error:', err && err.message ? err.message : err);
    // Generic error message to client
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
