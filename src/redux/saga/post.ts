import {
  apiAddPostRequest,
  apiGetMyPostRequest,
  apiGetPostRequest,
  apiGetIdPostRequest,
} from "@/api/Post";
import { takeLatest, call, put, StrictEffect } from "redux-saga/effects";
import { closeLoading, showLoading } from "../slices/loading";
import {
  addPostData,
  fetchIdPostData,
  fetchMyPostData,
  fetchPostData,
  showErrMsg,
  showIdPostData,
  showPostData,
} from "../slices/post";

function* workFetchPostData(action: any): Generator<StrictEffect, any, any> {
  const res = yield call(apiGetPostRequest, action.payload);
  if (res.status === 200) {
    yield put(showPostData(res.data));
  } else {
    if (res.response.data) {
      yield put(showErrMsg(res.response.data));
    }
  }
}

function* workAddPost(action: any): Generator<StrictEffect, any, any> {
  const res = yield call(apiAddPostRequest, action.payload);
  if (res.status === 200) {
    console.log(1);
  } else {
    if (res.response.data) {
      yield put(showErrMsg(res.response.data));
    }
  }
}
function* workFetchMyPost(action: any): Generator<StrictEffect, any, any> {
  const res = yield call(apiGetMyPostRequest, action.payload);
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

export function* testSaga() {
  yield takeLatest(addPostData, workAddPost);
}
export function* workFetchIdPost(
  action: any
): Generator<StrictEffect, any, any> {
  yield put(showLoading());
  const onePost = yield call(apiGetIdPostRequest, action.payload);
  yield put(showIdPostData(onePost));
  yield put(closeLoading());
}

export function* fetchIdPostSaga() {
  yield takeLatest(fetchIdPostData, workFetchIdPost);
}

export function* fetchMyPostDataSaga() {
  yield takeLatest(fetchMyPostData, workFetchMyPost);
}
