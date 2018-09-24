import React, { Component } from "react";
import CourseList from "./CourseList";

class CourseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseName: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createCourse({
      name: this.state.courseName
    });
  }

  render() {
    console.log("render", this.props);
    let courseList = this.props.courseList;
    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            <h1>Course</h1>
          </div>
        </div>
        <div className="col-12 col-lg-6 offset-lg-3">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="form-control my-3"
              placeholder="Course Name"
              value={this.state.courseName}
              onChange={event => this.handleChange("courseName", event)}
              required
            />
            <button className="btn btn-primary float-right" type="submit">
              Submit
            </button>
          </form>
        </div>
        <CourseList courseList={courseList} />
      </div>
    );
  }
}

export default CourseForm;
