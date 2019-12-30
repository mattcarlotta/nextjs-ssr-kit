// import isEmpty from "lodash/isEmpty";
import User from "@models/user";
// import { sendError } from "@helpers";
// import seeds from "@seeds/data";

// const createUser = async (req, res) => {
// 	try {
// 		const {
// 			email,
// 			firstName,
// 			lastName,
// 			userName,
// 			backgroundInfo,
// 			address,
// 		} = req.body;

// 		if (
// 			!email ||
// 			!firstName ||
// 			!lastName ||
// 			!userName ||
// 			!backgroundInfo ||
// 			isEmpty(address)
// 		)
// 			throw "Missing user card creation parameters.";

// 		const userNameTaken = await User.findOne({ userName });
// 		if (userNameTaken) throw "Error: That username is already in use!";

// 		await User.create(req.body);
// 		res.status(201).json({ message: `Successfully created ${userName}.` });
// 	} catch (err) {
// 		return sendError(err, res);
// 	}
// };

// const deleteUser = async (req, res) => {
// 	try {
// 		const { id: _id } = req.params;
// 		if (!_id) throw "Missing user delete id parameter.";

// 		const existingUser = await User.findOne({ _id });
// 		if (!existingUser) throw "Unable to locate that user for deletion.";

// 		await existingUser.deleteOne();

// 		res
// 			.status(201)
// 			.json({ message: `Successfully deleted ${existingUser.userName}.` });
// 	} catch (err) {
// 		return sendError(err, res);
// 	}
// };

const getUsers = async (_, res) => {
	const users = await User.find({});

	res.status(200).send({ users });
	// return render(req, res, "/users", { users });
};

/* istanbul ignore next */
// const seedDatabase = async (_, res) => {
// 	try {
// 		await User.deleteMany({});
// 		await User.insertMany(seeds);
// 		const users = await User.find({});

// 		res.status(201).send({ users });
// 	} catch (err) {
// 		return sendError(err, res);
// 	}
// };

// const updateUser = async (req, res) => {
// 	try {
// 		const { id: _id } = req.params;
// 		const { userName } = req.body;
// 		if (!_id || !userName) throw "Missing user update parameters.";

// 		const existingUser = await User.findOne({ _id });
// 		if (!existingUser) throw "Unable to locate that user to update.";

// 		/* istanbul ignore next */
// 		if (existingUser.userName !== userName) {
// 			const userNameTaken = await User.findOne({ userName });
// 			if (userNameTaken) throw "Error: That username is already in use!";
// 		}

// 		await User.updateOne({ _id }, req.body);

// 		res.status(201).json({ message: `Successfully updated ${userName}.` });
// 	} catch (err) {
// 		return sendError(err, res);
// 	}
// };

// export { createUser, deleteUser, getUsers, seedDatabase, updateUser };
export { getUsers };
