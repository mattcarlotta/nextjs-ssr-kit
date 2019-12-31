import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "@reducers";
import rootSaga from "@sagas";

export default (initialState, { isServer, req = null }) => {
	const saga = createSagaMiddleware();

	const store = createStore(rootReducer, initialState, applyMiddleware(saga));

	if (req || !isServer) {
		store.sagaTask = saga.run(rootSaga);
	}

	return store;
};
