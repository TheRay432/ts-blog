import { all, fork } from "redux-saga/effects";
import { postSaga, testSaga } from "./post";
import { userSaga } from "./user";

export function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga), fork(testSaga)]);
}
