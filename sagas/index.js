import { all } from "redux-saga/effects";
import userSagas from "./Users";

export default function* rootSaga() {
	yield all([userSagas()]);
}
