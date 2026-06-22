// Vercel serverless function to proxy requests to Anthropic securely.
// Deploy this file at /api/anthropic.js on Vercel (or adapt for Netlify/AWS Lambda).

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const API_KEY = process.env.ANTHROPIC_API_KEY;
  if (!API_KEY) return res.status(500).json({ error: 'Server misconfigured: missing ANTHROPIC_API_KEY' });

  try {
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
    if (resp.body && resp.headers.get('content-type') && resp.headers.get('content-type').includes('text/event-stream')) {
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
    console.error('Anthropic proxy error:', err);
    res.status(500).json({ error: err.message || 'Internal Server Error' });
  }
}
