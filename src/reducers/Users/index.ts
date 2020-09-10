import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import * as constants from "~constants";
import { UserReducerState } from "~types";

export const initialState: UserReducerState = {
  data: [],
  isLoading: true,
};

/**
 * @param {object} state - an object containing data and isLoading state.
 * @param {object} action - type and payload to be reduced.
 * @returns USERS state.
 */
const userReducer = (state: UserReducerState, { payload, type }: AnyAction) => {
  switch (type) {
    case HYDRATE: {
      return { ...state, ...payload.users };
    }
    case constants.USERS_RESET:
    case constants.USERS_FETCH: {
      return initialState;
    }
    case constants.USERS_SET_DATA: {
      return {
        ...state,
        data: payload.users,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
