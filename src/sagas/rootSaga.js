import { saveUser } from "./userSaga";
import { all } from "redux-saga/effects";
import { saveCourse, saveVideo, getCourses } from "./courseSaga";

export function* rootSaga() {
  yield all([saveUser(), saveCourse(), saveVideo(), getCourses()]);
}
