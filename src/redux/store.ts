import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modal";
import userReducer from "./slices/User";
import loadingReducer from "./slices/loading";

const store = configureStore({
  reducer: { modalReducer, userReducer, loadingReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
