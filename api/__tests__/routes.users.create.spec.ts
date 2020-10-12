import mongoose from "mongoose";
import { createConnectionToDatabase } from "~database";
import app from "~test/utils/testServer";

const data = {
  email: "bobdole@test.com",
  firstName: "Bob",
  lastName: "Dole",
  userName: "Bob Dole",
  backgroundInfo: "Cool.",
  address: {
    street: "123 Galena St.",
    state: "GA",
    suite: "",
    city: "Atlanta",
    zipCode: "55555",
  },
};

describe("Get All Users Route", () => {
  let db: mongoose.Connection;
  beforeAll(async () => {
    db = await createConnectionToDatabase();
  });

  afterAll(async () => {
    await db.close();
  });

  it("rejects invalid requests to the createUsers controller", async done => {
    await app()
      .post("/api/users/create")
      .expect("Content-Type", /json/)
      .expect(400)
      .then(res => {
        expect(res.body.err).toEqual("Missing user card creation parameters.");
        done();
      });
  });

  it("rejects requests where the username already exists", async done => {
    const invalidData = { ...data, userName: "bobbin4apples" };
    await app()
      .post("/api/users/create")
      .send(invalidData)
      .expect("Content-Type", /json/)
      .expect(400)
      .then(res => {
        expect(res.body.err).toEqual("That username is already in use!");
        done();
      });
  });

  it("accepts requests to create unique users", async done => {
    await app()
      .post("/api/users/create")
      .send(data)
      .expect("Content-Type", /json/)
      .expect(201)
      .then(res => {
        expect(res.body.message).toEqual(
          `Successfully created ${data.userName}.`,
        );
        done();
      });
  });
});
