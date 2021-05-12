import isEmpty from "lodash.isempty";
import * as constants from "~constants";
import { ActionType, UserData } from "~types";

export type CreateUser = typeof createUser;
export type DeleteUser = typeof deleteUser;
export type FetchUsers = typeof fetchUsers;
export type ResetUsers = typeof resetUsers;
export type SeedDB = typeof seedDB;
export type SetUsers = typeof setUsers;
export type UpdateUser = typeof updateUser;

/**
 * Attempts to create a new user in DB.
 *
 * @param props - contains user's email, firstName, lastName, userName, backgroundInfo street, state, suite, city, zipCode.
 * @returns {ActionType} a redux action
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
 * @param id - user id as string
 * @returns {ActionType} a redux action
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
 * @returns {ActionType} a redux action
 */
export const fetchUsers = (): ActionType<constants.FetchUser> => ({
  type: constants.USERS_FETCH
});

/**
 * Resets redux users state.
 * @returns {ActionType} a redux action
 */
export const resetUsers = (): ActionType<constants.ResetUsers> => ({
  type: constants.USERS_RESET
});

/**
 * Attempts to seed the DB with data.
 *
 * @returns {ActionType} a redux action
 */
export const seedDB = (): ActionType<constants.SeedUsers> => ({
  type: constants.USERS_SEED
});

/**
 * Sets user data to state.
 *
 * @param data - contains user data: [{ address: { street, suite, city, state, zipCode }, _id, email, firstName, lastName, userName, backgroundInfo }]
 * @returns {ActionType} a redux action
 */
export const setUsers = (
  data: UserData[]
): ActionType<constants.SetUsersData, UserData[]> => ({
  type: constants.USERS_SET_DATA,
  payload: !isEmpty(data) ? data : []
});

/**
 * Attempts to update a current user in DB.
 *
 * @param payload - props contain user data and user id as string
 * @returns {ActionType} a redux action
 */
export const updateUser = (
  payload: UserData
): ActionType<constants.UpdateUser, UserData> => ({
  type: constants.USERS_UPDATE,
  payload
});
