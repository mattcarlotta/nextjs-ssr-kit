import { model } from "mongoose";
import withMiddleware from "~middlewares";

const User = model("user");

const deleteUser = async (req, res, err) => {
	try {
		if (err) throw err;

		const { id: _id } = req.query;
		if (!_id) throw String("Missing user delete id parameter.");

		const existingUser = await User.findOne({ _id });
		if (!existingUser) throw String("Unable to locate that user for deletion.");

		await existingUser.deleteOne();

		res
			.status(201)
			.json({ message: `Successfully deleted ${existingUser.userName}.` });
	} catch (err) {
		res.status(400).json({ err: err.toString() });
	}
};

export default (req, res) => withMiddleware(req, res, deleteUser);
