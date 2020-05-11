import { model } from "mongoose";
import withMiddleware from "~middlewares/index";
import seeds from "./seeds";

const User = model("user");

const seedDB = async (_, res) => {
	try {
		await User.deleteMany({});
		await User.insertMany(seeds);
		const users = await User.find({});

		res.status(201).send({ users });
	} catch (err) {
		res.status(400).json({ err: err.toString() });
	}
};

export default withMiddleware(seedDB);
