import React, { Component } from "react";
import { connect } from "react-redux";

import EditNoteForm from "./EditNoteForm";
import { getNote, updateNote } from "../note-actions";

export class EditNoteView extends Component {
  componentDidMount() {
    this.props.getNote({
      jwt: this.props.jwt,
      noteId: this.props.match.params.noteId
    });
  }

  saveChanges(formValues) {
    this.props
      .updateNote({
        jwt: this.props.jwt,
        noteId: this.props.match.params.noteId,
        note: formValues
      })
      .then(updatedNote => {
        this.props.history.push(`/details/${updatedNote.id}`);
      });
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
  jwt: state.auth.jwt,
  note: state.note.noteDetails
});

const mapDispatchToProps = {
  getNote,
  updateNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditNoteView);
