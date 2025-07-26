export default async function handler(req, res) {
  if (req.method === 'POST') {
    const MAKE_WEBHOOK_URL = 'https://hook.eu2.make.com/ozr4gq4sfmaftgsl9k2noexuuvjt7ycg';

    try {
      await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      });

      res.status(200).send('Forwarded to Make');
    } catch (err) {
      console.error('Forward failed:', err);
      res.status(500).send('Error forwarding');
    }
  } else {
    res.status(200).send('Zalo Webhook is running');
  }
}
