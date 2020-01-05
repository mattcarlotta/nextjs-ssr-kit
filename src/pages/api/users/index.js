import { model } from "mongoose";

const User = model("user");

export default async (_, res) => {
	const users = await User.find({});

	res.status(200).send({ users });
};
