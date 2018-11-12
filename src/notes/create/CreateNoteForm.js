import React from "react";
import { Field, reduxForm } from "redux-form";

export const CreateNoteForm = props => {
  return (
    <form id="new-note-form" onSubmit={props.handleSubmit}>
      <label>
        Title: <br />
        <Field
          name="title"
          component="input"
          type="text"
          className="form-field"
        />
      </label>
      <label>
        Content: <br />
        <Field
          name="content"
          component="textarea"
          type="text"
          className="form-field"
        />
      </label>
      <br />
      <input type="submit" value="Create New Note" />
    </form>
  );
};

export default reduxForm({
  form: "createNote"
})(CreateNoteForm);
