import { all, fork } from "redux-saga/effects";
import {
  deletePostSaga,
  fetchIdPostSaga,
  fetchMyPostDataSaga,
  postSaga,
  testSaga,
  updatePostSaga,
} from "./post";
import { userSaga } from "./user";

export function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(postSaga),
    fork(testSaga),
    fork(fetchMyPostDataSaga),
    fork(fetchIdPostSaga),
    fork(updatePostSaga),
    fork(deletePostSaga),
  ]);
}
