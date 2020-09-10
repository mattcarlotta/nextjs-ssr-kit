import isEmpty from "lodash.isempty";
import * as constants from "~constants";
import { UserData, UserProps, UpdatedUserProps } from "~types";
/**
 * Attempts to create a new user in DB.
 *
 * @param {object} props - contains user's email, firstName, lastName, userName, backgroundInfo street, state, suite, city, zipCode.
 * @returns a redux action
 */
export const createUser = ({ props }: UserProps) => ({
  type: constants.USERS_CREATE,
  props,
});

/**
 * Attempts to delete a user from DB.
 *
 * @param {string} id - user id
 * @returns a redux action
 */
export const deleteUser = (id: string) => ({
  type: constants.USERS_DELETE,
  id,
});

/**
 * Attempts to fetchUsers users from DB.
 *
 * @returns a redux action
 */
export const fetchUsers = () => ({
  type: constants.USERS_FETCH,
});

/**
 * Resets redux users state.
 * @returns a redux action
 */
export const resetUsers = () => ({
  type: constants.USERS_RESET,
});

/**
 * Attempts to seed the DB with data.
 *
 * @returns a redux action
 */
export const seedDB = () => ({
  type: constants.USERS_SEED,
});

/**
 * Sets user data to state.
 *
 * @param {array} data - contains user data: [{ address: { street, suite, city, state, zipCode }, _id, email, firstName, lastName, userName, backgroundInfo }]
 * @returns a redux action
 */
export const setUsers = (data: UserData[]) => ({
  type: constants.USERS_SET_DATA,
  payload: !isEmpty(data) ? data : [],
});

/**
 * Attempts to update a current user in DB.
 *
 * @param {object} props - props contain user data.
 * @param {string} id - user id
 * @returns a redux action
 */
export const updateUser = ({ props, id }: UpdatedUserProps) => ({
  type: constants.USERS_UPDATE,
  props,
  id,
});
