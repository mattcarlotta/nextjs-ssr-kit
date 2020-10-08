import { Request, Response } from "express";
import User from "~models/user";

const deleteUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id: _id } = req.params;
    if (!_id) throw String("Missing user delete id parameter.");

    const existingUser = await User.findOne({ _id });
    if (!existingUser) throw String("Unable to locate that user for deletion.");

    await existingUser.deleteOne();

    res
      .status(201)
      .json({ message: `Successfully deleted ${existingUser.userName}.` });
  } catch (err) {
    res.status(400).json({ err: err.toString() });
  }
};

export default deleteUser;
