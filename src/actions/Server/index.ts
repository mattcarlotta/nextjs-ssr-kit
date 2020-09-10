import * as constants from "~constants";

/**
 * @function resetMessage - resets all server messages.
 * @returns a redux action
 */
export const resetMessage = () => ({ type: constants.RESET_SERVER_MESSAGES });

/**
 * @function setMessage - adds a new server message.
 * @returns a redux action
 */
export const setMessage = (message: string) => ({
  type: constants.SERVER_MESSAGE,
  payload: message,
});

/**
 * @function setError - adds a new server error message.
 * @returns a redux action
 */
export const setError = (err: string) => ({
  type: constants.SERVER_ERROR,
  payload: err,
});
