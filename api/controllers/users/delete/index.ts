import { Request, Response } from "express";
import User from "~models/user";

const deleteUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id: _id } = req.params;

    const existingUser = await User.findOne({ _id });
    if (!existingUser) throw String("Unable to locate that user for deletion.");

    await existingUser.deleteOne();

    res
      .status(200)
      .json({ message: `Successfully deleted ${existingUser.userName}.` });
  } catch (err) {
    res.status(400).json({ err: err.toString() });
  }
};

export default deleteUser;
