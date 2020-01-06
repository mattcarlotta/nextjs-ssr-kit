import { model } from "mongoose";
import withMiddleware from "~middlewares";

const User = model("user");

const getUsers = async (_, res) => {
	const users = await User.find({});

	res.status(200).send({ users });
};

export default withMiddleware(getUsers);
