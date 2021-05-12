import type { Request, Response } from "express";
import isEmpty from "lodash.isempty";
import User from "~models/user";

const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, firstName, lastName, userName, backgroundInfo, address } =
      req.body;

    if (
      !email ||
      !firstName ||
      !lastName ||
      !userName ||
      !backgroundInfo ||
      isEmpty(address)
    )
      throw String("Missing user card creation parameters.");

    const userNameTaken = await User.findOne({ userName });
    if (userNameTaken) throw String("That username is already in use!");

    await User.create({
      email,
      firstName,
      lastName,
      userName,
      backgroundInfo,
      address
    });

    return res
      .status(201)
      .json({ message: `Successfully created ${userName}.` });
  } catch (err) {
    return res.status(400).json({ err: err.toString() });
  }
};

export default createUser;
