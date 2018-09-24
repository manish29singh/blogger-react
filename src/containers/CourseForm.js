import { createCourse, fetchCourses } from "../actions/creator";
import { connect } from "react-redux";
import Course from "../components/Course/Course";

const mapStateToProps = state => {
  return {
    courseList: state.courses.courseList.data
  };
};

const mapDispatchToProps = {
  createCourse,
  fetchCourses
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Course);
