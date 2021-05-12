import mongoose from "mongoose";
import { connectToDB } from "~database";
import User, { TUserDocument } from "~models/user";
import app from "~testServer";

const data = {
  email: "updateexample@test.com",
  firstName: "Update",
  lastName: "Example",
  userName: "Update Example",
  backgroundInfo: "Cool.",
  address: {
    street: "123 Galena St.",
    state: "GA",
    suite: "",
    city: "Atlanta",
    zipCode: "55555"
  }
};

const invalidId = new mongoose.Types.ObjectId();

describe("Update User Route", () => {
  let user: TUserDocument;
  beforeAll(async () => {
    await connectToDB();
    user = await User.create(data);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("rejects invalid requests where the username doesn't exist in req.body", async done => {
    await app()
      .put(`/api/users/update/${invalidId}`)
      .expect("Content-Type", /json/)
      .expect(400)
      .then(res => {
        expect(res.body.err).toEqual("Missing user update parameters.");
        done();
      });
  });

  it("rejects invalid requests where the id is invalid", async done => {
    await app()
      .put(`/api/users/update/${invalidId}`)
      .send({ userName: user.userName })
      .expect("Content-Type", /json/)
      .expect(400)
      .then(res => {
        expect(res.body.err).toEqual("Unable to locate that user to update.");
        done();
      });
  });

  it("rejects invalid requests where the username is already in use", async done => {
    await app()
      .put(`/api/users/update/${user._id}`)
      .send({ userName: "bobbin4apples" })
      .expect("Content-Type", /json/)
      .expect(400)
      .then(res => {
        expect(res.body.err).toEqual("That username is already in use!");
        done();
      });
  });

  it("accepts requests to update the user", async done => {
    await app()
      .put(`/api/users/update/${user._id}`)
      .send({ userName: "Updated User" })
      .expect("Content-Type", /json/)
      .expect(201)
      .then(res => {
        expect(res.body.message).toEqual("Successfully updated Updated User.");
        done();
      });
  });
});
