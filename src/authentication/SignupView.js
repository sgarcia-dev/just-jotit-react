import React from "react";

export const SignupView = () => {
  return (
    <React.Fragment>
      <h1>Sign up</h1>
      <form id="sign-up-form">
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
};
