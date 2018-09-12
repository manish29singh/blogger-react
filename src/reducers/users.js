import * as types from "../actions/consts";

export default function(state = {}, action) {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.data
      };
    default:
      return state;
  }
}
