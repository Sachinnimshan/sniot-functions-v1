export default function handler(req, res) {
  if (req.method === 'POST') {
    const commands = [];

    for (const input of req.body.inputs) {
      for (const command of input.payload.commands) {
        for (const device of command.devices) {
          for (const exec of command.execution) {
            // Normally you'd update Firebase or DB here
            commands.push({
              ids: [device.id],
              status: "SUCCESS",
              states: {
                on: exec.params.on,
                online: true
              }
            });
          }
        }
      }
    }

    res.status(200).json({
      requestId: req.body.requestId,
      payload: {
        commands
      }
    });
  } else {
    res.status(405).end();
  }
}
