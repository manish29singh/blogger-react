import * as actionTypes from "./consts";

export const createUser = payload => {
  console.log("action creator called: ", payload);
  return { type: actionTypes.ON_SIGNUP, payload };
};

export const userLogin = payload => ({ type: actionTypes.ON_LOGIN, payload });

export const createCourse = payload => {
  return { type: actionTypes.ON_CREATE_COURSE, payload };
};

export const createVideo = payload => {
  return { type: actionTypes.ON_CREATE_VIDEO, payload };
};

export const fetchCourses = () => {
  return { type: actionTypes.FETCH_COURSES };
};
