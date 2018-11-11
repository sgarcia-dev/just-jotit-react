import React from "react";

export class SignupView extends React.Component {
  signup(event) {
    event.preventDefault();
    alert("Signup succesful. Redirecting you to login ...");
    this.props.history.push("/login");
  }

  render() {
    return (
      <React.Fragment>
        <h1>Sign up</h1>
        <form id="sign-up-form" onSubmit={this.signup.bind(this)}>
          <label>
            Name: <input id="name-txt" type="text" required />
            <br />
          </label>
          <label>
            Email: <input id="email-txt" type="email" required />
            <br />
          </label>
          <label>
            Username: <input id="username-txt" type="text" required />
            <br />
          </label>
          <label>
            Password: <input id="password-txt" type="password" required />
            <br />
          </label>
          <input type="submit" value="Create Account" />
        </form>
      </React.Fragment>
    );
  }
}
