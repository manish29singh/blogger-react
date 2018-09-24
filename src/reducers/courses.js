import * as types from "../actions/consts";

export default function(
  state = {
    courseList: [],
    videoList: []
  },
  action
) {
  switch (action.type) {
    case types.COURSE_FETCHED:
      return {
        ...state,
        courseList: action.data
      };
    case types.VIDEO_FETCHED:
      return {
        ...state,
        videoList: action.data
      };
    default:
      return state;
  }
}
