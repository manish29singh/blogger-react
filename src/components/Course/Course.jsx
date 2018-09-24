import React, { Component } from "react";
import CourseForm from "./CourseForm";

class Course extends Component {
  constructor(props) {
    super(props);

    this.props.fetchCourses();
    this.state = {
      courseList: this.props.courseList
    };
  }

  render() {
    return (
      <CourseForm
        createCourse={this.props.createCourse}
        courseList={this.state.courseList}
      />
    );
  }
}

export default Course;
