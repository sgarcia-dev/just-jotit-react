import React from "react";
import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import "./auth-views.css";

export class LoginView extends React.Component {
  login(values) {
    this.props.dispatch({
      type: "LOGIN_SUCCESS",
      username: values.username,
      jwt: "ajsndiajsndjansdkjanskjdanskjdaksdn"
    });
    alert("Login Succesful.");
    this.props.history.push("/");
  }

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <LoginForm onSubmit={this.login.bind(this)} />
      </React.Fragment>
    );
  }
}

export default connect()(LoginView);
