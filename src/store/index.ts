/* istanbul ignore file */
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { MakeStore, createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import rootReducer from "~reducers";
import rootSaga from "~sagas";
import { SagaStore, ReducerState } from "~types";

export const makeStore: MakeStore<ReducerState> = () => {
  const saga = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(saga))
  );

  (store as SagaStore).sagaTask = saga.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
