import { HYDRATE } from "next-redux-wrapper";
import * as constants from "~constants/index";
import serverReducer, { initialState } from "../index";

const message = "Hello";
const error = "Goodbye";

describe("Server Reducer", () => {
  it("initially matches the initialState pattern", () => {
    expect(serverReducer(undefined, { payload: {}, type: "" })).toEqual(
      initialState,
    );
  });

  it("rehydrates", () => {
    const state = serverReducer(undefined, {
      type: HYDRATE,
      payload: { server: { message, error: "" } },
    });

    expect(state).toEqual({
      error: "",
      message,
    });
  });

  it("sets a message", () => {
    const state = serverReducer(undefined, {
      type: constants.SERVER_MESSAGE,
      payload: message,
    });

    expect(state).toEqual({
      error: "",
      message,
    });
  });

  it("sets an error", () => {
    const state = serverReducer(undefined, {
      type: constants.SERVER_ERROR,
      payload: error,
    });

    expect(state).toEqual({
      error,
      message: "",
    });
  });

  it("resets the messages", () => {
    let state = serverReducer(undefined, {
      type: constants.SERVER_MESSAGE,
      payload: message,
    });

    state = serverReducer(state, {
      type: constants.RESET_SERVER_MESSAGES,
    });

    expect(state).toEqual(initialState);
  });
});
