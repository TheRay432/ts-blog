import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modal";
import userReducer from "./slices/User";
import loadingReducer from "./slices/loading";
import postReducer from "./slices/post";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { modalReducer, userReducer, loadingReducer, postReducer },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      sagaMiddleware
    );
  },
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
