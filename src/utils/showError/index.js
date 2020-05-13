import { put, call } from "redux-saga/effects";
import { setError } from "~actions/Server";
import toast from "~components/App/Toast";

/**
 * Helper function to showcase an error to the UI.
 *
 * @generator
 * @function showError
 * @param {string} message - an API error response message.
 * @yields {action} - A redux action to set server messages to redux state.
 * @yields {function} - A function to trigger an error toast with the server message.
 */
function* showError(message) {
  yield put(setError(message));
  yield call(toast, { type: "error", message });
}

export default showError;
