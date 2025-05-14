export default function handler(req, res) {
  if (req.method === 'POST') {
    const devices = {};
    for (const device of req.body.inputs[0].payload.devices) {
      devices[device.id] = {
        online: true,
        on: true // or fetch real-time state from Firebase or DB
      };
    }
    res.status(200).json({
      requestId: req.body.requestId,
      payload: {
        devices
      }
    });
  } else {
    res.status(405).end();
  }
}
