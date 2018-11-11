import React from "react";

export const LoginView = () => {
  return (
    <React.Fragment>
      <h1>Login</h1>
      <form id="login-form">
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
};
