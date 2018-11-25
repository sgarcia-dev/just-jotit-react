import React from "react";
import { connect } from "react-redux";
import SignupForm from "./SignupForm";

import "./auth-views.css";
import { signUp } from "./auth-actions";

export class SignupView extends React.Component {
  signup(formValues) {
    this.props.signUp(formValues).then(createdUser => {
      alert(
        `User ${createdUser.username} created. Redirecting you to login ...`
      );
      this.props.history.push("/login");
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Sign up</h1>
        <SignupForm onSubmit={this.signup.bind(this)} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  signUp
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupView);
