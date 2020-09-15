import { User } from "~models";
import seeds from "~database/seedDB/seeds";
import { NextApiRequest, NextApiResponse } from "~types";

const seedDB = async (
  _: NextApiRequest,
  res: NextApiResponse,
): Promise<any> => {
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
