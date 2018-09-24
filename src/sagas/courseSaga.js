import { call, put, take } from "redux-saga/effects";
import { createCourse, createVideo, fetchCourses } from "../api/courseApi";
import * as types from "../actions/consts";

export function* saveCourse() {
  const { payload } = yield take(types.ON_CREATE_COURSE);
  yield call(createCourse, payload);
  let data = yield call(fetchCourses);
  console.log(data, "CourseSaga List: ");
  yield put({ type: types.COURSE_FETCHED, data });
}

export function* saveVideo() {
  const { payload } = yield take(types.ON_CREATE_VIDEO);
  let data = yield call(createVideo, payload);
  console.log("videoSaga : ", data);
  yield put({ type: types.VIDEO_FETCHED, data });
}

export function* getCourses() {
  yield take(types.ON_FETCH_COURSES);
  let data = yield call(fetchCourses);
  console.log(data, "CourseSaga List: ");
  yield put({ type: types.COURSE_FETCHED, data });
}
