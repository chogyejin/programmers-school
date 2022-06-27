// root reducer
import { tasks } from "./tasks";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import session from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage: session, // local storage는 storage
  whiteList: ["tasks"],
  // blackList: [],
};

const combineReducer = combineReducers({ tasks });

const rootReducer = persistReducer(persistConfig, combineReducer);

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
