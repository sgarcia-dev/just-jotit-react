import React, { Component } from "react";
import { connect } from "react-redux";

import EditNoteForm from "./EditNoteForm";

export class EditNoteView extends Component {
  saveChanges(formValues) {
    alert("Changes saved.");
    console.log(formValues);
    this.props.history.push("/");
  }

  render() {
    return (
      <main id="note-edit">
        <h1>Editing Note</h1>
        <EditNoteForm onSubmit={this.saveChanges.bind(this)} />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  note: state.note.noteDetails
});

export default connect(mapStateToProps)(EditNoteView);
