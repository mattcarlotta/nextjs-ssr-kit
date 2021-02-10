import mongoose from "mongoose";
import User from "~models/user";
import { connectToDB } from "~database";
import app from "~test/utils/testServer";

const data = {
  email: "viewexample@test.com",
  firstName: "View",
  lastName: "Example",
  userName: "View Example",
  backgroundInfo: "Cool.",
  address: {
    street: "123 Galena St.",
    state: "GA",
    suite: "",
    city: "Atlanta",
    zipCode: "55555"
  }
};

describe("View User Route", () => {
  let user: any;
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
      .get(`/api/users/view/${invalidId}`)
      .expect("Content-Type", /json/)
      .expect(400)
      .then(res => {
        expect(res.body.err).toEqual("Unable to locate that user.");
        done();
      });
  });

  it("accepts requests to view the user's details", async done => {
    await app()
      .get(`/api/users/view/${user._id}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then(res => {
        expect(res.body).toEqual({
          user: expect.objectContaining({
            __v: expect.any(Number),
            _id: expect.anything(),
            address: expect.objectContaining({
              street: expect.any(String),
              suite: expect.any(String),
              city: expect.any(String),
              state: expect.any(String),
              zipCode: expect.any(String)
            }),
            email: expect.any(String),
            firstName: expect.any(String),
            lastName: expect.any(String),
            userName: expect.any(String),
            backgroundInfo: expect.any(String)
          })
        });
        done();
      });
  });
});
