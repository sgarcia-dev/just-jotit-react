import React from "react";
import { connect } from "react-redux";

import CreateNoteForm from "./CreateNoteForm";
import { createNote } from "../note-actions";

export class CreateNoteView extends React.Component {
  createNote(values) {
    this.props.createNote({ note: values }).then(note => {
      alert("Note created!");
      this.props.history.push(`/details/${note.id}`);
    });
  }

  render() {
    return (
      <main id="note-create">
        <h1>Create new Note</h1>
        <CreateNoteForm onSubmit={this.createNote.bind(this)} />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  jwt: state.auth.jwt
});

const mapDispatchToProps = {
  createNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNoteView);
