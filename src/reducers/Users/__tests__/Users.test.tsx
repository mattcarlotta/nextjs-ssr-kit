import { HYDRATE } from "next-redux-wrapper";
import * as constants from "~constants/index";
import userReducer, { initialState } from "../index";

const users = [
  {
    address: {
      street: "123 St.",
      state: "CA",
      suite: "1404",
      city: "SJ",
      zipCode: "55555",
    },
    backgroundInfo: "Hi.",
    email: "test@test.com",
    firstName: "Bob",
    lastName: "Dole",
    userName: "bobdole",
    _id: "123456789",
  },
];

describe("User Reducer", () => {
  it("initially matches the initialState pattern", () => {
    expect(userReducer(undefined, { payload: {}, type: "" })).toEqual(
      initialState,
    );
  });

  it("rehydrates", () => {
    const state = userReducer(undefined, {
      type: HYDRATE,
      payload: { users: { data: users, isLoading: false } },
    });

    expect(state).toEqual({
      data: users,
      isLoading: false,
    });
  });

  it("sets user data", () => {
    const state = userReducer(undefined, {
      type: constants.USERS_SET_DATA,
      payload: { users },
    });

    expect(state).toEqual({
      data: users,
      isLoading: false,
    });
  });

  it("resets users data during fetch", () => {
    let state = userReducer(undefined, {
      type: constants.USERS_SET_DATA,
      payload: { users },
    });

    state = userReducer(state, {
      type: constants.USERS_FETCH,
    });

    expect(state).toEqual(initialState);
  });

  it("resets users data", () => {
    let state = userReducer(undefined, {
      type: constants.USERS_SET_DATA,
      payload: { users },
    });

    state = userReducer(state, {
      type: constants.USERS_RESET,
    });

    expect(state).toEqual(initialState);
  });
});
