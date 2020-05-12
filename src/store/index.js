import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "~reducers/index";
import rootSaga from "~sagas/index";

export const makeStore = () => {
	const saga = createSagaMiddleware();

	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(saga)),
	);

	if (module.hot) {
		module.hot.accept("../reducers", () => {
			/* eslint-disable-next-line */
			store.replaceReducer(require("../reducers").default);
		});
	}

	/* istanbul ignore next */
	store.sagaTask = saga.run(rootSaga);

	return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
