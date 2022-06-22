import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modal";
import userReducer from "./slices/User";
import loadingReducer from "./slices/loading";
import createSagaMiddleware from "@redux-saga/core";
import { userSaga } from "./saga/user";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { modalReducer, userReducer, loadingReducer },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      sagaMiddleware
    );
  },
});

sagaMiddleware.run(userSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
