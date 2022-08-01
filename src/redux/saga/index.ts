import { all, fork } from "redux-saga/effects";
import * as userSagas from "./user";
import * as postSagas from "./post";

export function* rootSaga() {
  yield all(
    [...Object.values(userSagas), ...Object.values(postSagas)].map(fork)
  );
}
