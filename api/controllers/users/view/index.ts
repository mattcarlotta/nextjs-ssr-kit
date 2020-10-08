import { Request, Response } from "express";
import User from "~models/user";

const viewUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id: _id } = req.params;
    if (!_id) throw String("Missing user id parameter.");

    const user = await User.findOne({ _id });
    if (!user) throw String("Unable to locate that user.");

    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ err: err.toString() });
  }
};

export default viewUser;
