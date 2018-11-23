import * as actions from "../notes/note-actions";

const initialState = {
  loading: false,
  error: null,
  noteList: [],
  noteDetails: null
};
export default function reducer(state = initialState, action) {
  // REQUEST START
  if (
    action.type === actions.GET_NOTES_REQUEST ||
    action.type === actions.GET_NOTE_REQUEST ||
    action.type === actions.CREATE_NOTE_REQUEST ||
    action.type === actions.UPDATE_NOTE_REQUEST ||
    action.type === actions.DELETE_NOTE_REQUEST
  ) {
    return { ...state, loading: true, error: null };
    // REQUEST ERROR
  } else if (
    action.type === actions.GET_NOTES_FAILURE ||
    action.type === actions.GET_NOTE_FAILURE ||
    action.type === actions.CREATE_NOTE_FAILURE ||
    action.type === actions.UPDATE_NOTE_FAILURE ||
    action.type === actions.DELETE_NOTE_FAILURE
  ) {
    return { ...state, loading: false, error: action.error };
    // REQUEST SUCCESS
  } else if (action.type === actions.GET_NOTES_SUCCESS) {
    return { ...state, loading: false, noteList: action.notes };
  } else if (action.type === actions.GET_NOTE_SUCCESS) {
    return { ...state, loading: false, noteDetails: action.note };
  } else if (action.type === actions.CREATE_NOTE_SUCCESS) {
    return { ...state, loading: false, noteDetails: action.note };
  } else if (action.type === actions.UPDATE_NOTE_SUCCESS) {
    return { ...state, loading: false, noteDetails: action.note };
  } else if (action.type === actions.DELETE_NOTE_SUCCESS) {
    return { ...state, loading: false };
  }
  return state;
}
