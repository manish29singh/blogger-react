import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import { rootSaga } from "./sagas/rootSaga";

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(reducers, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};
