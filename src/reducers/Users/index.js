import * as constants from "~constants/index";

export const initialState = {
	data: [],
	isLoading: true,
};

/**
 * @function userReducer
 * @param {object} state - an object containing data and isLoading state.
 * @param {object} action - type and payload to be reduced.
 * @returns {object} - USERS state.
 */
const userReducer = (state = initialState, { payload, type }) => {
	switch (type) {
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
