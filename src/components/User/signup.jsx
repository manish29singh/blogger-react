import React, { Component } from "react";
class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createUser({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    });
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            <h1>Signup</h1>
          </div>
        </div>

        <div className="col-12 col-lg-6 offset-lg-3">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="form-control my-3"
              placeholder="Name"
              value={this.state.name}
              onChange={event => this.handleChange("name", event)}
              required
            />
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

export default Signup;
