import mongoose from "mongoose";
import { connectToDB } from "~database";
import app from "~testServer";

describe("Get All Users Route", () => {
  beforeAll(async () => {
    await connectToDB();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("routes requests to the getUsers controller", async done => {
    await app()
      .get("/api/users")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(res => {
        expect(res.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
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
          ])
        );
        done();
      });
  });
});
