import isEmpty from "lodash/isEmpty";
import { model } from "mongoose";

const User = model("user");

export default async (req, res) => {
	try {
		const {
			email,
			firstName,
			lastName,
			userName,
			backgroundInfo,
			address,
		} = req.body;

		if (
			!email ||
			!firstName ||
			!lastName ||
			!userName ||
			!backgroundInfo ||
			isEmpty(address)
		)
			throw Error("Missing user card creation parameters.");

		const userNameTaken = await User.findOne({ userName });
		if (userNameTaken) throw Error("Error: That username is already in use!");

		await User.create(req.body);
		res.status(201).json({ message: `Successfully created ${userName}.` });
	} catch (err) {
		res.status(400).json({ err: err.toString() });
	}
};
