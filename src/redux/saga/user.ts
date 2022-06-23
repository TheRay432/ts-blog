import { apiLoginRequest } from "@/api/Auth";
import { takeLatest, put, call, StrictEffect } from "redux-saga/effects";
import { closeLoading, showLoading } from "../slices/loading";
import { closeModal } from "../slices/modal";
import { loginError, loginSuccess, toLogin } from "../slices/User";

function* workLogin(action: any): Generator<StrictEffect, any, any> {
  yield put(showLoading());
  const res = yield call(apiLoginRequest, action.payload);
  if (res.status === 200) {
    localStorage.setItem("tsBlogUser", JSON.stringify(res.data));
    yield put(loginSuccess(res.data));
    yield put(closeLoading());
    yield put(closeModal());
  } else {
    if (res.response.data) {
      yield put(loginError(res.response.data));
      yield put(closeLoading());
    }
  }
}

export function* userSaga() {
  yield takeLatest(toLogin, workLogin);
}
