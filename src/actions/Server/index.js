import * as constants from "~constants";

/**
 * @function resetMessage - resets all server messages.
 * @returns {object}
 */
export const resetMessage = () => ({ type: constants.RESET_SERVER_MESSAGES });

/**
 * @function setMessage - adds a new server message.
 * @returns {object}
 */
export const setMessage = message => ({
	type: constants.SERVER_MESSAGE,
	payload: message,
});

/**
 * @function setError - adds a new server error message.
 * @returns {object}
 */
export const setError = err => ({
	type: constants.SERVER_ERROR,
	payload: err,
});
