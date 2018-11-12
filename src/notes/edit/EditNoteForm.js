import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

export const EditNoteForm = props => {
  return (
    <form id="edit-note-form" onSubmit={props.handleSubmit}>
      <label htmlFor="title-txt">
        Title: <br />
        <Field
          name="title"
          component="input"
          type="text"
          className="form-field"
        />
      </label>
      <label htmlFor="content-txt">
        Content: <br />
        <Field
          name="content"
          component="textarea"
          type="text"
          className="form-field"
        />
      </label>
      <br />
      <input type="submit" value="Save Changes" />
    </form>
  );
};

const reduxFormEditNote = reduxForm({
  form: "editNote"
})(EditNoteForm);

const mapStateToProps = state => ({
  initialValues: state.note.noteDetails
});

export default connect(mapStateToProps)(reduxFormEditNote);
