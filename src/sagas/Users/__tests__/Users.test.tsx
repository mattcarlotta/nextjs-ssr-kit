import { expectSaga, testSaga } from "redux-saga-test-plan";
import app from "~utils/axiosConfig";
import * as actions from "~actions/Users";
import * as sagas from "~sagas/Users";
import userReducer from "~reducers/Users";
import { resetMessage, setMessage } from "~actions/Server";
import serverReducer from "~reducers/Server";
import { parseData, parseMessage } from "~utils/parseResponse";
import toast from "~components/App/Toast";
import mockApp from "~utils/mockAxios";
import { UserData } from "~types";

const id = "123456789";

const user = {
  address: {
    street: "123 St.",
    state: "CA",
    suite: "1404",
    city: "SJ",
    zipCode: "55555"
  },
  backgroundInfo: "Hi.",
  email: "test~test.com",
  firstName: "Bob",
  lastName: "Dole",
  userName: "bobdole",
  _id: id
};

const data = [user];

describe("User Sagas", () => {
  afterEach(() => {
    mockApp.reset();
  });

  afterAll(() => {
    mockApp.restore();
  });

  describe("Fetch Users", () => {
    it("logical flow matches pattern for fetching users", () => {
      const res = { data };

      testSaga(sagas.fetchUsers)
        .next()
        .put(resetMessage())
        .next()
        .call(app.get, "users")
        .next(res)
        .call(parseData, res)
        .next(res.data)
        .put(actions.setUsers(res.data))
        .next()
        .isDone();
    });

    it("sets the users into redux state", async () => {
      mockApp.onGet("users").reply(200, data);

      return expectSaga(sagas.fetchUsers)
        .withReducer(userReducer)
        .hasFinalState({
          data: [user],
          isLoading: false
        })
        .run();
    });

    it("if API call fails, it displays a message", async () => {
      const err = "Unable to fetch users.";
      mockApp.onGet("users").reply(404, { err });

      return expectSaga(sagas.fetchUsers)
        .withReducer(serverReducer)
        .hasFinalState({
          error: err,
          message: ""
        })
        .run();
    });
  });

  describe("Create New User", () => {
    let payload: UserData;
    let message: string;
    beforeAll(() => {
      message = "Successfully created a new user.";
      payload = user;
    });

    it("logical flow matches pattern for a creating a new user", () => {
      const res = { data: { message } };

      testSaga(sagas.createUser, actions.createUser(payload))
        .next()
        .put(resetMessage())
        .next()
        .call(app.post, "users/create", payload)
        .next(res)
        .call(parseMessage, res)
        .next(res.data.message)
        .call(toast, { type: "success", message: res.data.message })
        .next()
        .put(setMessage(res.data.message))
        .next()
        .call(sagas.fetchUsers)
        .next()
        .isDone();
    });

    it("successfully creates a new user", async () => {
      mockApp.onPost("users/create").reply(200, { message });
      mockApp.onGet("users").reply(200, data);

      return expectSaga(sagas.createUser, actions.createUser(payload))
        .withReducer(userReducer)
        .hasFinalState({
          data: [user],
          isLoading: false
        })
        .run();
    });

    it("if API call fails, it displays a message", async () => {
      const err = "Unable to create a new user.";
      mockApp.onPost("users/create").reply(404, { err });

      return expectSaga(sagas.createUser, actions.createUser(payload))
        .withReducer(serverReducer)
        .hasFinalState({
          error: err,
          message: ""
        })
        .run();
    });
  });

  describe("Delete User", () => {
    let message: string;
    beforeAll(() => {
      message = "Successfully deleted a user.";
    });

    it("logical flow matches pattern for a deleting a user", () => {
      const res = { data: { message } };

      testSaga(sagas.deleteUser, actions.deleteUser(id))
        .next()
        .put(resetMessage())
        .next()
        .call(app.delete, `users/delete/${id}`)
        .next(res)
        .call(parseMessage, res)
        .next(res.data.message)
        .call(toast, { type: "success", message: res.data.message })
        .next()
        .put(setMessage(res.data.message))
        .next()
        .call(sagas.fetchUsers)
        .next()
        .isDone();
    });

    it("successfully deletes a user", async () => {
      mockApp.onDelete(`users/delete/${id}`).reply(200, { message });
      mockApp.onGet("users").reply(200, data);

      return expectSaga(sagas.deleteUser, actions.deleteUser(id))
        .withReducer(userReducer)
        .hasFinalState({
          data: [user],
          isLoading: false
        })
        .run();
    });

    it("if API call fails, it displays a message", async () => {
      const err = "Unable to delete the user.";
      mockApp.onDelete(`users/delete/${id}`).reply(404, { err });

      return expectSaga(sagas.deleteUser, actions.deleteUser(id))
        .withReducer(serverReducer)
        .hasFinalState({
          error: err,
          message: ""
        })
        .run();
    });
  });

  describe("Seed Users", () => {
    it("logical flow matches pattern for seeding users", () => {
      const res = { data };

      testSaga(sagas.seedDB)
        .next()
        .put(resetMessage())
        .next()
        .call(app.post, "users/seed")
        .next(res)
        .call(parseData, res)
        .next(res.data)
        .put(actions.setUsers(res.data))
        .next()
        .isDone();
    });

    it("seeds the database and sets the users into redux state", async () => {
      mockApp.onPost("users/seed").reply(200, data);

      return expectSaga(sagas.seedDB)
        .withReducer(userReducer)
        .hasFinalState({
          data: [user],
          isLoading: false
        })
        .run();
    });

    it("if API call fails, it displays a message", async () => {
      const err = "Unable to seed users.";
      mockApp.onPost("users/seed").reply(404, { err });

      return expectSaga(sagas.seedDB)
        .withReducer(serverReducer)
        .hasFinalState({
          error: err,
          message: ""
        })
        .run();
    });
  });

  describe("Update User", () => {
    let payload: UserData;
    let message: string;
    beforeAll(() => {
      message = "Successfully updated a user.";
      payload = user;
    });

    it("logical flow matches pattern for a updating a user", () => {
      const res = { data: { message } };

      testSaga(sagas.updateUser, actions.updateUser(payload))
        .next()
        .put(resetMessage())
        .next()
        .call(app.put, `users/update/${id}`, payload)
        .next(res)
        .call(parseMessage, res)
        .next(res.data.message)
        .call(toast, { type: "info", message: res.data.message })
        .next()
        .put(setMessage(res.data.message))
        .next()
        .call(sagas.fetchUsers)
        .next()
        .isDone();
    });

    it("successfully updates a user", async () => {
      mockApp.onPut(`users/update/${id}`).reply(200, { message });
      mockApp.onGet("users").reply(200, data);

      return expectSaga(sagas.updateUser, actions.updateUser(payload))
        .withReducer(userReducer)
        .hasFinalState({
          data: [user],
          isLoading: false
        })
        .run();
    });

    it("if API call fails, it displays a message", async () => {
      const err = "Unable to update a user.";
      mockApp.onPut(`users/update/${id}`).reply(404, { err });

      return expectSaga(
        sagas.updateUser,
        actions.updateUser({ ...payload, _id: id })
      )
        .withReducer(serverReducer)
        .hasFinalState({
          error: err,
          message: ""
        })
        .run();
    });
  });
});
