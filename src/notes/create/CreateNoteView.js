import React from "react";
import CreateNoteForm from "./CreateNoteForm";

export class CreateNoteView extends React.Component {
  createNote(values) {
    alert("Note Created.");
    console.log(values);
    this.props.history.push("/");
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

export default CreateNoteView;
