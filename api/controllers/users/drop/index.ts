import { Request, Response } from "express";
import User from "~models/user";

const dropDB = async (_: Request, res: Response): Promise<any> => {
  try {
    await User.deleteMany({});
    res.status(201).end();
  } catch (err) {
    res.status(400).json({ err: err.toString() });
  }
};

export default dropDB;
