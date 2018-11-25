import { NOTE_LIST, NOTE_DETAILS } from "./note-fake-data";

const API = "https://jsonplaceholder.typicode.com";

export const GET_NOTES_REQUEST = "GET_NOTES";
const getNotesAction = () => ({
  type: GET_NOTES_REQUEST
});
export const GET_NOTES_SUCCESS = "GET_NOTES_SUCCESS";
const getNotesSuccessAction = notes => ({
  type: GET_NOTES_SUCCESS,
  notes
});
export const GET_NOTES_FAILURE = "GET_NOTES_FAILURE";
const getNotesFailureAction = error => ({
  type: GET_NOTES_FAILURE,
  error
});

export const getNotes = payload => dispatch => {
  dispatch(getNotesAction());
  return fetch(`${API}/posts`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(notes => {
      // TODO: Remove when Server Side is ready
      dispatch(getNotesSuccessAction(NOTE_LIST));
    })
    .catch(err => {
      dispatch(getNotesFailureAction(err));
    });
};

export const GET_NOTE_REQUEST = "GET_NOTE";
const getNoteAction = () => ({
  type: GET_NOTE_REQUEST
});
export const GET_NOTE_SUCCESS = "GET_NOTE_SUCCESS";
const getNoteSuccessAction = note => ({
  type: GET_NOTE_SUCCESS,
  note
});
export const GET_NOTE_FAILURE = "GET_NOTE_FAILURE";
const getNoteFailureAction = error => ({
  type: GET_NOTE_FAILURE,
  error
});

export const getNote = payload => dispatch => {
  dispatch(getNoteAction());
  return fetch(`${API}/posts/1`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(note => {
      // TODO: Remove once Server Side is complete.
      dispatch(getNoteSuccessAction(NOTE_DETAILS));
    })
    .catch(err => {
      console.error(err);
      dispatch(getNoteFailureAction(err));
    });
};

export const CREATE_NOTE_REQUEST = "CREATE_NOTE";
const createNoteAction = note => ({
  type: CREATE_NOTE_REQUEST,
  note
});
export const CREATE_NOTE_SUCCESS = "CREATE_NOTE_SUCCESS";
const createNoteSuccessAction = () => ({
  type: CREATE_NOTE_SUCCESS
});
export const CREATE_NOTE_FAILURE = "CREATE_NOTE_FAILURE";
const createNoteFailureAction = error => ({
  type: CREATE_NOTE_FAILURE,
  error
});
export const createNote = payload => dispatch => {
  const { note, jwt } = payload;
  dispatch(createNoteAction({ note }));
  return fetch(`${API}/posts/`, {
    method: "POST",
    body: JSON.stringify(note),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(note => {
      dispatch(createNoteSuccessAction());
      return note;
    })
    .catch(err => {
      console.error(err);
      dispatch(createNoteFailureAction(err));
    });
};

export const UPDATE_NOTE_REQUEST = "UPDATE_NOTE";
const updateNoteAction = (noteId, note) => ({
  type: UPDATE_NOTE_REQUEST,
  noteId,
  note
});
export const UPDATE_NOTE_SUCCESS = "UPDATE_NOTE_SUCCESS";
const updateNoteSuccessAction = note => ({
  type: UPDATE_NOTE_SUCCESS,
  note
});
export const UPDATE_NOTE_FAILURE = "UPDATE_NOTE_FAILURE";
const updateNoteFailureAction = error => ({
  type: UPDATE_NOTE_FAILURE,
  error
});

export const updateNote = payload => dispatch => {
  const { noteId, note, jwt } = payload;
  dispatch(updateNoteAction());
  return fetch(`${API}/posts/1`, {
    method: "PUT",
    body: JSON.stringify(note),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(note => {
      // TODO: remove once server side is done
      dispatch(updateNoteSuccessAction(NOTE_DETAILS));
      dispatch(getNotes());
      return NOTE_DETAILS;
    })
    .catch(err => {
      console.error(err);
      dispatch(updateNoteFailureAction(err));
    });
};

export const DELETE_NOTE_REQUEST = "DELETE_NOTE";
const deleteNoteAction = noteId => ({
  type: DELETE_NOTE_REQUEST,
  noteId
});
export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS";
const deleteNoteSuccessAction = () => ({
  type: DELETE_NOTE_SUCCESS
});
export const DELETE_NOTE_FAILURE = "DELETE_NOTE_FAILURE";
const deleteNoteFailureAction = error => ({
  type: DELETE_NOTE_FAILURE,
  error
});

export const deleteNote = payload => dispatch => {
  const { noteId, jwt } = payload;
  dispatch(deleteNoteAction());
  return fetch(`${API}/posts/${noteId}`, { method: "DELETE" })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      dispatch(deleteNoteSuccessAction());
      dispatch(getNotes());
    })
    .catch(err => {
      console.error(err);
      dispatch(deleteNoteFailureAction(err));
    });
};
