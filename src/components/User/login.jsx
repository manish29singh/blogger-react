import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("submit button clicked");
  }

  render() {
    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            <h1>Login</h1>
          </div>
        </div>
        <div className="col-12 col-lg-6 offset-lg-3">
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              className="form-control my-3"
              placeholder="Email"
              value={this.state.email}
              onChange={event => this.handleChange("email", event)}
              required
            />
            <input
              type="password"
              className="form-control my-3"
              placeholder="Password"
              value={this.state.password}
              onChange={event => this.handleChange("password", event)}
              required
            />
            <button className="btn btn-primary float-right" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
