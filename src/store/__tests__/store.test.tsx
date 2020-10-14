import { makeStore, wrapper } from "../index";

describe("Store", () => {
  it("creates a store", () => {
    const store = makeStore({});
    expect(store).toEqual(
      expect.objectContaining({
        dispatch: expect.any(Function),
        getState: expect.any(Function),
        replaceReducer: expect.any(Function),
        sagaTask: {
          "@@redux-saga/TASK": expect.any(Boolean),
          cancel: expect.any(Function),
          cont: expect.any(Function),
          context: expect.any(Object),
          end: expect.any(Function),
          error: expect.any(Function),
          id: expect.any(Number),
          isAborted: expect.any(Function),
          isCancelled: expect.any(Function),
          isRoot: expect.any(Boolean),
          isRunning: expect.any(Function),
          joiners: expect.any(Array),
          meta: {
            location: undefined,
            name: "rootSaga"
          },
          queue: {
            abort: expect.any(Function),
            addTask: expect.any(Function),
            cancelAll: expect.any(Function),
            getTasks: expect.any(Function)
          },
          result: expect.any(Function),
          setContext: expect.any(Function),
          toPromise: expect.any(Function)
        },
        subscribe: expect.any(Function)
      })
    );
  });

  it("provides wrapper redux functions for a component", () => {
    expect(wrapper).toEqual({
      getServerSideProps: expect.any(Function),
      getStaticProps: expect.any(Function),
      withRedux: expect.any(Function)
    });
  });
});
