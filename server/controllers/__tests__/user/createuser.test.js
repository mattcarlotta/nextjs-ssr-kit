import User from "~models/user";
import { createUser } from "~controllers/user";
import { newUser } from "../../__mocks__/helpers";

const addUser = {
  ...newUser,
  userName: "exampleuser4",
};

const addUser2 = {
  ...newUser,
  userName: "duplicateuser",
};

const emptybody = {
  email: "",
  firstName: "",
  lastName: "",
  userName: "",
  backgroundInfo: "",
  address: {},
};

describe("Create User Controller", () => {
  let res;
  beforeEach(() => {
    res = mockResponse();
  });

  let db;
  beforeAll(async () => {
    db = connectDatabase();
    await User.create(addUser2);
  });

  afterAll(async () => {
    await db.close();
  });

  it("handles empty body requests", async () => {
    const req = mockRequest(null, null, emptybody);

    await createUser(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      err: "Missing user card creation parameters.",
    });
  });

  it("handles valid requests to create a user", async () => {
    const req = mockRequest(null, null, addUser);

    await createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: `Successfully created ${req.body.userName}.`,
    });
  });

  it("handles invalid requests to create a duplicate user", async () => {
    const req = mockRequest(null, null, addUser2);

    await createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      err: "Error: That username is already in use!",
    });
  });
});
