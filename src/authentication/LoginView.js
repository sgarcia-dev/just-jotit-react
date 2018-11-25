import React from "react";
import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import { logIn } from "./auth-actions";
import { saveAuthData } from "./localStorage";

import "./auth-views.css";

export class LoginView extends React.Component {
  login(values) {
    this.props.logIn(values).then(loginData => {
      alert(`User ${loginData.user.name} logged in succesfully.`);
      this.props.history.push("/");
    });
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  logIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView);
