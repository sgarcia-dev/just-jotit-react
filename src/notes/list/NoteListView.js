import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getNotes, deleteNote } from "../note-actions";
import "./note-list.css";

export class NoteListView extends React.Component {
  componentDidMount() {
    this.props.getNotes({
      jwt: this.props.jwt
    });
  }

  deleteNote(noteId) {
    this.props
      .deleteNote({
        jwt: this.props.jwt,
        noteId
      })
      .then(() => {
        alert("Note deleted!");
      });
  }

  renderNote(note) {
    return (
      <div id="note-card" data-note-id={note.id} key={note.id}>
        <Link to={`/details/${note.id}`}>
          <h3 className="card-header">{note.title}</h3>
        </Link>
        <p className="card-content">{note.content}</p>
        <p className="card-info">
          <i>
            {note.user.name} | Last update on
            {new Date(note.updateDate).toLocaleDateString()}
          </i>
        </p>
        <div className="card-controls">
          <Link to={`/edit/${note.id} `}>
            <button id="edit-note-btn">Edit</button>
          </Link>
          &nbsp;
          <button id="delete-note-btn" onClick={() => this.deleteNote(note.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }

  render() {
    const notes = this.props.noteList.map(this.renderNote.bind(this));
    return <main id="note-list">{notes}</main>;
  }
}

const mapStateToProps = state => ({
  noteList: state.note.noteList,
  jwt: state.auth.jwt
});

const mapDispatchToProps = {
  getNotes,
  deleteNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteListView);
