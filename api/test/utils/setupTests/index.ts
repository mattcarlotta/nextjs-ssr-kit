import mongoose from "mongoose";
import { connectToDB } from "~database";

beforeAll(async () => {
  await connectToDB();
});

afterAll(() => {
  mongoose.connection.close();
});
