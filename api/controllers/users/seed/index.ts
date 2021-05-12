import type { Request, Response } from "express";
import User from "~models/user";
import seeds from "~database/seedDB/seeds";

const seedDB = async (_: Request, res: Response): Promise<Response> => {
  await User.deleteMany({});
  await User.insertMany(seeds);

  const users = await User.find({});

  return res.status(201).send(users);
};

export default seedDB;
