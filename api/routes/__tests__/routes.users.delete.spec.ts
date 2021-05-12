import mongoose from "mongoose";
import { connectToDB } from "~database";
import User, { TUserDocument } from "~models/user";
import app from "~testServer";

const data = {
  email: "deleteexample@test.com",
  firstName: "Delete",
  lastName: "Example",
  userName: "Delete Example",
  backgroundInfo: "Cool.",
  address: {
    street: "123 Galena St.",
    state: "GA",
    suite: "",
    city: "Atlanta",
    zipCode: "55555"
  }
};

describe("Delete User Route", () => {
  let user: TUserDocument;
  beforeAll(async () => {
    await connectToDB();
    user = await User.create(data);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("rejects requests where the id doesn't exist", async done => {
    const invalidId = new mongoose.Types.ObjectId();
    await app()
      .delete(`/api/users/delete/${invalidId}`)
      .expect("Content-Type", /json/)
      .expect(400)
      .then(res => {
        expect(res.body.err).toEqual(
          "Unable to locate that user for deletion."
        );
        done();
      });
  });

  it("accepts requests to delete users", async done => {
    await app()
      .delete(`/api/users/delete/${user._id}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then(res => {
        expect(res.body.message).toEqual(
          `Successfully deleted ${user.userName}.`
        );
        done();
      });
  });
});
