import { User } from "~models";
import { NextApiRequest, NextApiResponse } from "~types";

const getUsers = async (_: NextApiRequest, res: NextApiResponse) => {
  const users = await User.find({});

  res.status(200).send({ users });
};

export default getUsers;
