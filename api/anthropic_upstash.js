// Serverless proxy to Anthropic with optional Upstash-backed rate limiting.
// File: api/anthropic_upstash.js
// Behavior:
// - If UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN are present, use Upstash REST API to store rate-limit counters.
// - Otherwise fall back to in-memory (best-effort) rate limit.

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 60; // per IP
const MAX_BODY_LENGTH = 64 * 1024; // 64KB
const MAX_MESSAGE_LENGTH = 8 * 1024; // 8KB per message content

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL || '';
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || '';
const USE_UPSTASH = !!(UPSTASH_URL && UPSTASH_TOKEN);

if (!global.__inMemoryRateLimit) global.__inMemoryRateLimit = new Map();

async function upstashIncrWithExpire(key) {
  // INCR
  const incrUrl = `${UPSTASH_URL}/incr/${encodeURIComponent(key)}`;
  const resp = await fetch(incrUrl, { method: 'POST', headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` } });
  if (!resp.ok) throw new Error('Upstash INCR failed');
  const j = await resp.json();
  const val = Number(j.result ?? j);
  // If newly created (val === 1) set expire
  if (val === 1) {
    const ttl = Math.ceil(RATE_LIMIT_WINDOW / 1000);
    const expUrl = `${UPSTASH_URL}/expire/${encodeURIComponent(key)}/${ttl}`;
    await fetch(expUrl, { method: 'POST', headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` } });
  }
  return val;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  try {
    // Basic body size guard
    const rawBody = JSON.stringify(req.body || {});
    if (rawBody.length > MAX_BODY_LENGTH) {
      return res.status(413).json({ error: 'Request payload too large' });
    }

    // Input validation
    const { messages } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Invalid request: messages must be a non-empty array' });
    }
    for (const m of messages) {
      if (!m || typeof m.content !== 'string') return res.status(400).json({ error: 'Each message must have a string content' });
      if (m.content.length > MAX_MESSAGE_LENGTH) return res.status(400).json({ error: 'Message content too long' });
    }

    // Rate limiting (use Upstash if available, else in-memory best-effort)
    const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown').split(',')[0].trim();
    const key = `ratelimit:${ip}`;

    let count;
    if (USE_UPSTASH) {
      try {
        count = await upstashIncrWithExpire(key);
      } catch (e) {
        console.error('Upstash error, falling back to in-memory rate limit:', e.message || e);
        // fallthrough to in-memory
      }
    }

    if (!count) {
      // In-memory fallback
      const now = Date.now();
      const map = global.__inMemoryRateLimit;
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
      count = entry.count;
    }

    if (count > MAX_REQUESTS_PER_WINDOW) {
      return res.status(429).json({ error: 'Rate limit exceeded' });
    }

    const API_KEY = process.env.ANTHROPIC_API_KEY;
    if (!API_KEY) return res.status(500).json({ error: 'Server misconfigured: missing ANTHROPIC_API_KEY' });

    // Forward request to Anthropic
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
      },
      body: JSON.stringify(req.body)
    });

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

    const data = await resp.json();
    res.status(resp.status).json(data);
  } catch (err) {
    console.error('Anthropic proxy error:', err && err.message ? err.message : err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
