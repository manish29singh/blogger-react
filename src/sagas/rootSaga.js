import { saveUser } from "./userSaga";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([saveUser()]);
}
