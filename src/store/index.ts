import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { MakeStore, createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import rootReducer, { TRootState } from "~reducers";
import rootSaga from "~sagas";
import { SagaStore } from "~types";

export const makeStore: MakeStore<TRootState> = () => {
  const saga = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(saga))
  ) as SagaStore;

  store.sagaTask = saga.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
export const withRedux = wrapper.withRedux;
