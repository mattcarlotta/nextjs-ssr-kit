import { Request, Response } from "express";
import User from "~models/user";

const getUsers = async (_: Request, res: Response): Promise<any> => {
  const users = await User.find({}).lean();

  res.status(200).send({ users });
};

export default getUsers;
