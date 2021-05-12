import { combineReducers } from "redux";
import userReducer from "./Users";
import serverReducer from "./Server";

const reducers = {
  server: serverReducer,
  users: userReducer
};

const RootReducer = combineReducers(reducers);

export type TRootState = ReturnType<typeof RootReducer>;

export default RootReducer;
