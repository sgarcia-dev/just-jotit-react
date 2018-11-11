import React from "react";

export const CreateNoteView = () => {
  return (
    <React.Fragment>
      <h1>Create new Note</h1>
      <form id="new-note-form">
        <label>
          Title:
          <br />
          <input id="title-txt" className="form-field" type="text" required />
        </label>
        <br />
        <label>
          Content:
          <br />
          <textarea
            id="content-txt"
            className="form-field"
            form="new-note-form"
            required
          />
        </label>
        <br />
        <input type="submit" value="Create New Note" />
      </form>
    </React.Fragment>
  );
};
