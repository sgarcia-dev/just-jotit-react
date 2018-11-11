import React from "react";
import SignupForm from "./SignupForm";

export class SignupView extends React.Component {
  signup(formValues) {
    alert(`User ${formValues.username} created. Redirecting you to login ...`);
    this.props.history.push("/login");
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
