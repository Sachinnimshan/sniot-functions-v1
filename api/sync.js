export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle POST request
    res.status(200).json({ message: 'POST request received successfully!' });
  } else if (req.method === 'GET') {
    // Optionally handle GET request
    res.status(200).json({ message: 'GET request received successfully!' });
  } else {
    // Method Not Allowed
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
