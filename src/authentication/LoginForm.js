import React from "react";
import { Field, reduxForm } from "redux-form";

export const LoginForm = props => (
  <form id="login-form" onSubmit={props.handleSubmit}>
    <label>
      Username:
      <Field name="username" component="input" type="text" />
    </label>
    <label>
      Password:
      <Field name="password" component="input" type="password" />
    </label>
    <br />
    <input type="submit" value="Login" />
  </form>
);

export default reduxForm({
  form: "login"
})(LoginForm);
