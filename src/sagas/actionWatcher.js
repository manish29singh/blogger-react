import { takeLatest } from "redux-saga/effects";
import { ON_LOGIN, ON_SIGNUP } from "../actions/consts";
import { saveUser } from "../sagas/userSaga";

export default function* actionWatcher() {
  yield takeLatest(ON_SIGNUP, saveUser);
}
