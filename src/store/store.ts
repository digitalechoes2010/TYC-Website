import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import RootReducer from "./index.reducer";

import watcherSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
export const store: any = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export const persistor = persistStore(store);
sagaMiddleware.run(watcherSaga);
