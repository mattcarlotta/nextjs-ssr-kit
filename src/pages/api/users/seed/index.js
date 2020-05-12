import withMiddleware from "~middlewares";
import { User } from "~models";
import seeds from "~database/seedDB/seeds";

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
