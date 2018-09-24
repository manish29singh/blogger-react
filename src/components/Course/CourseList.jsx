import React, { Component } from "react";

class CourseList extends Component {
  render() {
    let courseList = this.props.courseList;

    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-lg-11">
            <ul className="list-group">
              {courseList ? (
                courseList.map(el => {
                  return (
                    <li className="list-group-item disabled">{el.name}</li>
                  );
                })
              ) : (
                <span>No Courses yet.</span>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseList;
