import withMiddleware from "~middlewares/index";
import { User } from "~models/index";

const getUsers = async (_, res) => {
	const users = await User.find({});

	res.status(200).send({ users });
};

export default withMiddleware(getUsers);
