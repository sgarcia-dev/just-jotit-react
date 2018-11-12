import React, { Component } from "react";
import { connect } from "react-redux";

export class NoteDetailsView extends Component {
  render() {
    const { note } = this.props;
    return (
      <main id="note-details">
        <h1>{note.title}</h1>
        <i>
          {note.user.name} | {new Date(note.updateDate).toLocaleString()}
        </i>
        <p>{note.content}</p>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  note: state.note.noteDetails
});

export default connect(mapStateToProps)(NoteDetailsView);
