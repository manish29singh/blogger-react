import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="float-left">
          <Link to="/">Home </Link>
        </div>
        <div className="float-right">
          <Link to="/add-course">Add Course </Link>
        </div>
        {/* <div className="float-right">
          <Link to="/login">login </Link>|<Link to="/signup"> signup</Link>
        </div> */}
      </div>
    );
  }
}

export default Navigation;
