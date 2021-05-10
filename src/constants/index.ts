export const RESET_SERVER_MESSAGES = "RESET_SERVER_MESSAGES";
export const SERVER_ERROR = "SERVER_ERROR";
export const SERVER_MESSAGE = "SERVER_MESSAGE";

export const USERS_CREATE = "USERS/CREATE";
export const USERS_DELETE = "USERS/DELETE";
export const USERS_FETCH = "USERS/FETCH";
export const USERS_RESET = "USERS/RESET";
export const USERS_SEED = "USERS/SEED";
export const USERS_SET_DATA = "USERS/SET_DATA";
export const USERS_UPDATE = "USERS/UPDATE";

export type ResetMessage = typeof RESET_SERVER_MESSAGES;
export type ServerError = typeof SERVER_ERROR;
export type ServerMessage = typeof SERVER_MESSAGE;

export type CreateUser = typeof USERS_CREATE;
export type DeleteUser = typeof USERS_DELETE;
export type FetchUser = typeof USERS_FETCH;
export type ResetUsers = typeof USERS_RESET;
export type SeedUsers = typeof USERS_SEED;
export type SetUsersData = typeof USERS_SET_DATA;
export type UpdateUser = typeof USERS_UPDATE;
