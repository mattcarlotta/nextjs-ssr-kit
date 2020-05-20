/* istanbul ignore file */
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import rootReducer from "~reducers";
import rootSaga from "~sagas";

export const makeStore = () => {
  const saga = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(saga)),
  );

  // if (module.hot) {
  // 	module.hot.accept("../reducers", () => {
  // 		/* eslint-disable-next-line */
  // 		store.replaceReducer(require("../reducers").default);
  // 	});
  // }

  store.sagaTask = saga.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
