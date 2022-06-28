import { apiGetPostRequest } from "@/api/Post";
import { takeLatest, call, put, StrictEffect } from "redux-saga/effects";
import { fetchPostData, showErrMsg, showPostData } from "../slices/post";

function* workFetchPostData(): Generator<StrictEffect, any, any> {
  const res = yield call(apiGetPostRequest);
  if (res.status === 200) {
    yield put(showPostData(res.data));
  } else {
    if (res.response.data) {
      yield put(showErrMsg(res.response.data));
    }
  }
}

export function* postSaga() {
  yield takeLatest(fetchPostData, workFetchPostData);
}
