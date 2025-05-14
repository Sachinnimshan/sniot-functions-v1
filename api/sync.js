export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({
      requestId: req.body.requestId,
      payload: {
        agentUserId: "123",
        devices: [
          {
            id: "pond_light",
            type: "action.devices.types.LIGHT",
            traits: ["action.devices.traits.OnOff"],
            name: {
              name: "Pond Light"
            },
            willReportState: false
          }
        ]
      }
    });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
