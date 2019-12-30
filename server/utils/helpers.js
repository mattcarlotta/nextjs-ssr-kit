const sendError = (err, res) => res.status(400).json({ err: err.toString() });

export { sendError };
