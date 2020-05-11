import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "~reducers/index";
import rootSaga from "~sagas/index";

export default (initialState, { isServer, req = null }) => {
	const saga = createSagaMiddleware();

	const store = createStore(
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(saga)),
	);

	if (module.hot) {
		module.hot.accept("../reducers", () => {
			/* eslint-disable-next-line */
			const createNextReducer = require("../reducers/index").default;

			store.replaceReducer(createNextReducer(initialState));
		});
	}

	/* istanbul ignore next */
	if (req || !isServer) {
		store.sagaTask = saga.run(rootSaga);
	}

	return store;
};
