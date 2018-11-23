import React, { Component } from "react";
import { connect } from "react-redux";

import { getNote } from "../note-actions";

export class NoteDetailsView extends Component {
  componentDidMount() {
    this.props.getNote({
      jwt: this.props.jwt,
      noteId: this.props.match.params.noteId
    });
  }

  render() {
    const { note } = this.props;
    if (!note) {
      return <p>Loading ...</p>;
    }
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
  jwt: state.auth.jwt,
  note: state.note.noteDetails
});

const mapDispatchToProps = {
  getNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteDetailsView);
