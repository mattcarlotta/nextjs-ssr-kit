import * as types from "~types";

/**
 * ~function resetMessage - resets all server messages.
 * ~returns {object}
 */
export const resetMessage = () => ({ type: types.RESET_SERVER_MESSAGES });

/**
 * ~function setMessage - adds a new server message.
 * ~returns {object}
 */
export const setMessage = message => ({
	type: types.SERVER_MESSAGE,
	payload: message,
});

/**
 * ~function setError - adds a new server error message.
 * ~returns {object}
 */
export const setError = err => ({
	type: types.SERVER_ERROR,
	payload: err,
});
