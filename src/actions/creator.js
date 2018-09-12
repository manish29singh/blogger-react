import * as actionTypes from "./consts";

export const createUser = payload => {
  console.log("action creator called: ", payload);
  return { type: actionTypes.ON_SIGNUP, payload };
};
export const userLogin = payload => ({ type: actionTypes.ON_LOGIN, payload });
