import { model } from "mongoose";

const User = model("user");

export default async (req, res) => {
	try {
		const { id: _id } = req.query;
		if (!_id) throw Error("Missing user delete id parameter.");

		const existingUser = await User.findOne({ _id });
		if (!existingUser) throw Error("Unable to locate that user for deletion.");

		await existingUser.deleteOne();

		res
			.status(201)
			.json({ message: `Successfully deleted ${existingUser.userName}.` });
	} catch (err) {
		res.status(400).json({ err: err.toString() });
	}
};
