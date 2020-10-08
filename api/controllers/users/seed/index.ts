import { Request, Response } from "express";
import User from "~models/user";
import seeds from "~database/seedDB/seeds";

const seedDB = async (_: Request, res: Response): Promise<any> => {
  try {
    await User.deleteMany({});
    await User.insertMany(seeds);

    const users = await User.find({});

    res.status(201).send({ users });
  } catch (err) {
    res.status(400).json({ err: err.toString() });
  }
};

export default seedDB;
