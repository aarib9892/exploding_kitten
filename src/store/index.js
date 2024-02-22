import { createSlice, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import getStoredState from "redux-persist/es/getStoredState";

import storage from "redux-persist/lib/storage";
import { counterSlice , initialState } from "./deckSlice";





const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, counterSlice.reducer);

const store = configureStore({
  reducer: persistedReducer,
  state: initialState,
});
export const counterActions = counterSlice.actions;
export const persistor = persistStore(store);
export default store;
