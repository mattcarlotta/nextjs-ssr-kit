import isEmpty from "lodash.isempty";
import * as constants from "~constants";
import { AnyAction, ActionType, UserData, UpdatedUserProps } from "~types";
/**
 * Attempts to create a new user in DB.
 *
 * @param {object} props - contains user's email, firstName, lastName, userName, backgroundInfo street, state, suite, city, zipCode.
 * @returns {AnyAction} a redux action
 */
export const createUser = (
  payload: UserData
): ActionType<constants.CreateUser, UserData> => ({
  type: constants.USERS_CREATE,
  payload
});

/**
 * Attempts to delete a user from DB.
 *
 * @param {string} id - user id
 * @returns {AnyAction} a redux action
 */
export const deleteUser = (
  payload: string
): ActionType<constants.DeleteUser, string> => ({
  type: constants.USERS_DELETE,
  payload
});

/**
 * Attempts to fetchUsers users from DB.
 *
 * @returns {AnyAction} a redux action
 */
export const fetchUsers = (): ActionType<constants.FetchUser> => ({
  type: constants.USERS_FETCH
});

/**
 * Resets redux users state.
 * @returns {AnyAction} a redux action
 */
export const resetUsers = (): ActionType<constants.ResetUsers> => ({
  type: constants.USERS_RESET
});

/**
 * Attempts to seed the DB with data.
 *
 * @returns {AnyAction} a redux action
 */
export const seedDB = (): ActionType<constants.SeedUsers> => ({
  type: constants.USERS_SEED
});

/**
 * Sets user data to state.
 *
 * @param {array} data - contains user data: [{ address: { street, suite, city, state, zipCode }, _id, email, firstName, lastName, userName, backgroundInfo }]
 * @returns {AnyAction} a redux action
 */
export const setUsers = (data: UserData[]): AnyAction => ({
  type: constants.USERS_SET_DATA,
  payload: !isEmpty(data) ? data : []
});

/**
 * Attempts to update a current user in DB.
 *
 * @param {object} props - props contain user data.
 * @param {string} id - user id
 * @returns {AnyAction} a redux action
 */
export const updateUser = ({ props, id }: UpdatedUserProps): AnyAction => ({
  type: constants.USERS_UPDATE,
  props,
  id
});
