import * as constants from "~constants";
import { ActionType } from "~types";

export type ResetMessage = typeof resetMessage;
export type SetMessage = typeof setMessage;
export type SetError = typeof setError;

/**
 * @function resetMessage - resets all server messages.
 * @returns {ActionType} a redux action
 */
export const resetMessage = (): ActionType<constants.ResetMessage> => ({
  type: constants.RESET_SERVER_MESSAGES
});

/**
 * @function setMessage - adds a new server message.
 * @returns {ActionType} a redux action
 */
export const setMessage = (
  message: string
): ActionType<constants.ServerMessage, string> => ({
  type: constants.SERVER_MESSAGE,
  payload: message
});

/**
 * @function setError - adds a new server error message.
 * @returns {ActionType} a redux action
 */
export const setError = (
  err: string
): ActionType<constants.ServerError, string> => ({
  type: constants.SERVER_ERROR,
  payload: err
});
