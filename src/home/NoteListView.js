import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./note-list.css";

export class NoteListView extends React.Component {
  deleteNote(note) {
    alert(`Deleting Note ...`);
    console.log(note);
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
          <button id="delete-note-btn">Delete</button>
        </div>
      </div>
    );
  }

  render() {
    const notes = this.props.noteList.map(this.renderNote);
    return <main id="note-list">{notes}</main>;
  }
}

const mapStateToProps = state => ({
  noteList: state.note.noteList
});

export default connect(mapStateToProps)(NoteListView);
