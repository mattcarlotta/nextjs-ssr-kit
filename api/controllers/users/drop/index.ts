import type { Request, Response } from "express";
import User from "~models/user";

const dropDB = async (_: Request, res: Response): Promise<void> => {
  await User.deleteMany({});
  return res.status(201).end();
};

export default dropDB;
