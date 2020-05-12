import withMiddleware from "~middlewares";
import { User } from "~models";

const getUsers = async (_, res) => {
	const users = await User.find({});

	res.status(200).send({ users });
};

export default withMiddleware(getUsers);
