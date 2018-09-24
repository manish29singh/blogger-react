import { combineReducers } from "redux";
import users from "./users";
import courses from "./courses";

const reducers = combineReducers({
  users,
  courses
});

export default reducers;
