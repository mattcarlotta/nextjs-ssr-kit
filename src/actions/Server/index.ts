import * as constants from "~constants";
import { AnyAction } from "~types";

/**
 * @function resetMessage - resets all server messages.
 * @returns {AnyAction} a redux action
 */
export const resetMessage = (): AnyAction => ({
  type: constants.RESET_SERVER_MESSAGES
});

/**
 * @function setMessage - adds a new server message.
 * @returns {AnyAction} a redux action
 */
export const setMessage = (message: string): AnyAction => ({
  type: constants.SERVER_MESSAGE,
  payload: message
});

/**
 * @function setError - adds a new server error message.
 * @returns {AnyAction} a redux action
 */
export const setError = (err: string): AnyAction => ({
  type: constants.SERVER_ERROR,
  payload: err
});
