// root reducer
import { tasks } from "./tasks";
import { combineReducers } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import session from "redux-persist/lib/storage/session";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage: session, // local storage는 storage
  whiteList: ["tasks"],
  // blackList: [],
};

const combineReducer = combineReducers({ tasks: tasks.reducer });

const rootReducer = persistReducer(persistConfig, combineReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
  devTools: true, // devtools 내장
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
