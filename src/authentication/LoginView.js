import React from "react";
import { connect } from "react-redux";

export class LoginView extends React.Component {
  login(event) {
    event.preventDefault();
    this.props.dispatch({
      type: "LOGIN_SUCCESS",
      username: "sgarcia-dev",
      jwt: "ajsndiajsndjansdkjanskjdanskjdaksdn"
    });
    alert("Login Succesful.");
    this.props.history.push("/");
  }

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form id="login-form" onSubmit={this.login.bind(this)}>
          <label>
            Username: <input id="username-txt" type="text" required />
            <br />
          </label>
          <label>
            Password: <input id="password-txt" type="password" required />
            <br />
          </label>
          <input type="submit" value="Login" />
        </form>
      </React.Fragment>
    );
  }
}

export default connect()(LoginView);
