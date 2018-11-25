import * as actions from "../authentication/auth-actions";
import { saveAuthData, clearAuthData } from "../authentication/localStorage";

const initialState = {
  authenticating: false,
  isLoggedIn: false,
  user: null,
  jwt: null,
  error: null
};

export default function reducer(state = initialState, action) {
  // LOGIN & SIGNUP REQUEST START
  if (
    action.type === actions.LOG_IN_REQUEST ||
    action.type === actions.SIGN_UP_REQUEST
  ) {
    return {
      ...state,
      authenticating: true,
      isLoggedIn: false,
      user: null,
      jwt: null,
      error: null
    };
    // LOGIN & SIGNUP REQUEST FAILURE
  } else if (
    action.type === actions.LOG_IN_FAILURE ||
    action.type === actions.SIGN_UP_FAILURE
  ) {
    return { ...state, error: action.error };
    // LOGIN & SIGNUP REQUEST SUCCESS
  } else if (action.type === actions.SIGN_UP_SUCCESS) {
    return { ...state, authenticating: false, error: action.error };
  } else if (
    action.type === actions.LOG_IN_SUCCESS ||
    action.type === actions.SET_AUTH_DATA
  ) {
    saveAuthData(action.authData);
    return {
      ...state,
      authenticating: false,
      isLoggedIn: true,
      user: action.authData.user,
      jwt: action.authData.jwt
    };
  } else if (
    action.type === actions.LOGOUT ||
    action.type === actions.CLEAR_AUTH_DATA
  ) {
    clearAuthData();
    return { ...state, isLoggedIn: false, user: null, jwt: null };
  }
  return state;
}
