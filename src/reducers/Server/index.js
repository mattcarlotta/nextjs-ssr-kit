import { HYDRATE } from "next-redux-wrapper";
import * as constants from "~constants/index";

export const initialState = {
	error: "",
	message: "",
};

/**
 * @function serverReducer
 * @param {object} state - an object containing error or server messages.
 * @param {object} action - type and payload to be reduced.
 * @returns {object} - new server state.
 */
const serverReducer = (state = initialState, { payload, type }) => {
	switch (type) {
		case HYDRATE:
			return { ...state, ...payload.server };
		case constants.RESET_SERVER_MESSAGES:
			return initialState;
		case constants.SERVER_ERROR:
			return { ...state, error: payload };
		case constants.SERVER_MESSAGE:
			return { ...state, message: payload };
		default:
			return state;
	}
};

export default serverReducer;
