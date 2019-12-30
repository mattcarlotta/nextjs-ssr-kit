import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "@reducers";
import rootSaga from "@sagas";

const saga = createSagaMiddleware();

export default initialState => {
	const store = createStore(rootReducer, initialState, applyMiddleware(saga));

	saga.run(rootSaga);

	return store;
};
