import React from "react";
import { connect } from "react-redux";

export const NoteListView = props => {
  const notes = props.noteList.map(note => (
    <div id="note-card" data-note-id={note.id} key={note.id}>
      <h3 className="card-header">
        {note.title}
        <button id="delete-note-btn">Delete</button>
      </h3>
      <p className="card-content">{note.content}</p>
      <p className="card-info">
        <i>
          {note.user.name} | Last update on
          {new Date(note.updateDate).toLocaleDateString()}
        </i>
      </p>
    </div>
  ));

  return <section id="note-list">{notes}</section>;
};

const mapStateToProps = state => ({
  noteList: state.note.noteList
});

export default connect(mapStateToProps)(NoteListView);
