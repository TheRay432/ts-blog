import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modal";
import userReducer from "./slices/User";

const store = configureStore({
  reducer: { modalReducer, userReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
