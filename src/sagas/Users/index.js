import { all, put, call, takeLatest } from "redux-saga/effects";
import app from "~utils/axiosConfig";
import { parseData, parseMessage } from "~utils/parseResponse";
import * as constants from "~constants/index";
import { setUsers } from "~actions/Users";
import { setMessage } from "~actions/Server";
import showError from "~utils/showError";
import toast from "~components/Toast";

/**
 * Attempts to fetch users from DB.
 *
 * @generator
 * @function fetchUsers
 * @yields {object} - A response from a call to the API.
 * @function parseData - returns a parsed res.data.
 * @yields {action} -  A redux action to set users to redux state.
 * @throws {action} - A toast error message.
 */
export function* fetchUsers() {
	try {
		const res = yield call(app.get, "users");
		const data = yield call(parseData, res);

		yield put(setUsers(data));
	} catch (e) {
		yield call(showError, e.toString());
	}
}

/**
 * Creates a new user.
 *
 * @generator
 * @function createUser
 * @param {object} props - props contain new user data.
 * @yields {object} - A response from a call to the API.
 * @function parseMessage - returns a parsed res.data.message.
 * @yields {action} - A toast success message.
 * @yields {action} - A redux action to set server message state.
 * @yields {action} - A redux action to refetch users.
 * @throws {action} - A toast error message.
 */
export function* createUser({ props }) {
	try {
		const res = yield call(app.post, "users/create", props);
		const message = yield call(parseMessage, res);

		yield call(toast, { type: "success", message });

		yield put(setMessage(message));

		yield call(fetchUsers);
	} catch (e) {
		yield call(showError, e.toString());
	}
}

/**
 * Attempts to delete a user.
 *
 * @generator
 * @function deleteUser
 * @param id
 * @yields {object} - A response from a call to the API.
 * @function parseMessage - returns a parsed res.data.message.
 * @yields {action} - A toast success message.
 * @yields {action} - A redux action to set server message state.
 * @yields {action} - A redux action to refetch users.
 * @throws {action} - A toast error message.
 */
export function* deleteUser({ id }) {
	try {
		const res = yield call(app.delete, `users/delete/${id}`);
		const message = yield call(parseMessage, res);

		yield call(toast, { type: "success", message });

		yield put(setMessage(message));

		yield call(fetchUsers);
	} catch (e) {
		yield call(showError, e.toString());
	}
}

/**
 * Attempts to seed DB with fake users.
 *
 * @generator
 * @function seedDB
 * @yields {object} - A response from a call to the API.
 * @function parseData - returns a parsed res.data.
 * @yields {action} -  A redux action to set users to redux state.
 * @throws {action} - A toast error message.
 */
export function* seedDB() {
	try {
		const res = yield call(app.post, "users/seed");
		const data = yield call(parseData, res);

		yield put(setUsers(data));
	} catch (e) {
		yield call(showError, e.toString());
	}
}

/**
 * Attempts to update a new user.
 *
 * @generator
 * @function updateUser
 * @param {object} - props contain user data and id is user id.
 * @yields {object} - A response from a call to the API.
 * @function parseMessage - returns a parsed res.data.message.
 * @yields {action} - A redux action to display a server message by type.
 * @yields {action} - A redux action to set server message state.
 * @yields {action} - A redux action to fetch users.
 * @throws {action} - A redux action to display a server message by type.
 */
export function* updateUser({ props, id }) {
	try {
		const res = yield call(app.put, `users/update/${id}`, { ...props });
		const message = yield call(parseMessage, res);

		yield call(toast, { type: "info", message });

		yield put(setMessage(message));

		yield call(fetchUsers);
	} catch (e) {
		yield call(showError, e.toString());
	}
}

/**
 * Creates watchers for all generators.
 *
 * @generator
 * @function authSagas
 * @yields {watchers}
 */
export default function* authSagas() {
	yield all([
		takeLatest(constants.USERS_CREATE, createUser),
		takeLatest(constants.USERS_DELETE, deleteUser),
		takeLatest(constants.USERS_FETCH, fetchUsers),
		takeLatest(constants.USERS_SEED, seedDB),
		takeLatest(constants.USERS_UPDATE, updateUser),
	]);
}
