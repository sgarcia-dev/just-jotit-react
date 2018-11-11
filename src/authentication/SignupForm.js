import React from "react";
import { Field, reduxForm } from "redux-form";

export const SignupForm = props => (
  <form id="login-form" onSubmit={props.handleSubmit}>
    <label>
      Name
      <Field name="name" component="input" type="text" />
    </label>
    <label>
      Email:
      <Field name="email" component="input" type="email" />
    </label>
    <label>
      Username:
      <Field name="username" component="input" type="text" />
    </label>
    <label>
      Password:
      <Field name="password" component="input" type="password" />
    </label>
    <br />
    <input type="submit" value="Create Account" />
  </form>
);

export default reduxForm({
  form: "signup"
})(SignupForm);
