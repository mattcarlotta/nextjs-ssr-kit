import type { Request, Response } from "express";
import User from "~models/user";

const updateUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id: _id } = req.params;
    const { userName } = req.body;
    if (!_id || !userName) throw String("Missing user update parameters.");

    const existingUser = await User.findOne({ _id });
    if (!existingUser) throw String("Unable to locate that user to update.");

    /* istanbul ignore next */
    if (existingUser.userName !== userName) {
      const userNameTaken = await User.findOne({ userName });
      if (userNameTaken) throw String("That username is already in use!");
    }

    await existingUser.updateOne(req.body);

    return res
      .status(201)
      .json({ message: `Successfully updated ${userName}.` });
  } catch (err) {
    return res.status(400).json({ err: err.toString() });
  }
};

export default updateUser;
