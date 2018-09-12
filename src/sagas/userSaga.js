import { call, put, take } from "redux-saga/effects";
import { createUser } from "../api/userApi";
import * as types from "../actions/consts";

export function* saveUser() {
  const { payload } = yield take(types.ON_SIGNUP);
  let data = yield call(createUser, payload);
  console.log("UserSaga : ", data);
  yield put({ type: types.SIGNUP_SUCCESS, data });
}
