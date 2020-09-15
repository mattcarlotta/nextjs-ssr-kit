import { all, call } from "redux-saga/effects";
import userSagas from "./Users";
import { SagaIterator } from "~types";

function* rootSaga(): SagaIterator {
  yield all([call(userSagas)]);
}

export default rootSaga;
