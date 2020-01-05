import { model } from "mongoose";

const User = model("user");

export default async (req, res) => {
	try {
		const { id: _id } = req.query;
		const { userName } = req.body;
		if (!_id || !userName) throw Error("Missing user update parameters.");

		const existingUser = await User.findOne({ _id });
		if (!existingUser) throw Error("Unable to locate that user to update.");

		/* istanbul ignore next */
		if (existingUser.userName !== userName) {
			const userNameTaken = await User.findOne({ userName });
			if (userNameTaken) throw Error("Error: That username is already in use!");
		}

		await User.updateOne({ _id }, req.body);

		res.status(201).json({ message: `Successfully updated ${userName}.` });
	} catch (err) {
		res.status(400).json({ err: err.toString() });
	}
};
