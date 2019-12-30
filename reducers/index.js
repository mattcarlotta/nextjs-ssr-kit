import { combineReducers } from "redux";
import userReducer from "./Users";
import serverReducer from "./Server";

const reducers = {
	server: serverReducer,
	users: userReducer,
};

export default combineReducers(reducers);
