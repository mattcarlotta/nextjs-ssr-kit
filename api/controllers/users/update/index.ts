import { Request, Response } from "express";
import User from "~models/user";

const updateUser = async (req: Request, res: Response): Promise<any> => {
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

    await User.updateOne({ _id }, req.body);

    res.status(201).json({ message: `Successfully updated ${userName}.` });
  } catch (err) {
    res.status(400).json({ err: err.toString() });
  }
};

export default updateUser;
