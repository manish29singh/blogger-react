import { takeLatest, takeEvery } from "redux-saga/effects";
import {
  ON_LOGIN,
  ON_SIGNUP,
  ON_CREATE_COURSE,
  ON_CREATE_VIDEO,
  ON_FETCH_COURSES
} from "../actions/consts";
import { saveUser } from "../sagas/userSaga";
import { saveCourse, saveVideo, getCourses } from "../sagas/courseSaga";

export default function* actionWatcher() {
  yield takeLatest(ON_SIGNUP, saveUser);
  yield takeEvery(ON_CREATE_COURSE, saveCourse);
  yield takeLatest(ON_CREATE_VIDEO, saveVideo);
  yield takeEvery(ON_FETCH_COURSES, getCourses);
}
