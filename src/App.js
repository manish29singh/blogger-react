import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/User/login";
import Signup from "./containers/signup";
import Navigation from "./components/navigation";
import CourseForm from "./containers/CourseForm";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/add-course" component={CourseForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
