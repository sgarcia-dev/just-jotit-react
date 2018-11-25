import { FAKE_USER, FAKE_JWT, FAKE_LOGIN_DATA } from "./auth-fake-data";

const API = "https://jsonplaceholder.typicode.com";

export const SET_AUTH_DATA = "SET_AUTH_DATA";
export const setAuthData = authData => ({
  type: SET_AUTH_DATA,
  authData
});

export const CLEAR_AUTH_DATA = "CLEAR_AUTH_DATA";
export const clearAuthData = () => ({
  type: CLEAR_AUTH_DATA
});

export const LOGOUT = "LOGOUT";
export const logout = () => ({
  type: LOGOUT
});

export const SIGN_UP_REQUEST = "SIGN_UP";
const signUpAction = () => ({
  type: SIGN_UP_REQUEST
});
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const signUpSuccessAction = user => ({
  type: SIGN_UP_SUCCESS,
  user
});
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const signUpFailureAction = error => ({
  type: SIGN_UP_FAILURE,
  error
});

export const signUp = user => dispatch => {
  dispatch(signUpAction());
  return fetch(`${API}/users`, {
    method: "POST",
    body: JSON.stringify(user),
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
    .then(signUpData => {
      // TODO: Remove when Server Side is ready
      dispatch(signUpSuccessAction(FAKE_USER));
      return FAKE_USER;
    })
    .catch(err => {
      dispatch(signUpFailureAction(err));
    });
};

export const LOG_IN_REQUEST = "LOG_IN";
const logInAction = () => ({
  type: LOG_IN_REQUEST
});
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const logInSuccessAction = authData => ({
  type: LOG_IN_SUCCESS,
  authData
});
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const logInFailureAction = error => ({
  type: LOG_IN_FAILURE,
  error
});

export const logIn = user => dispatch => {
  dispatch(logInAction());
  return fetch(`${API}/users`, {
    method: "POST",
    body: JSON.stringify(user),
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
    .then(loginData => {
      // TODO: Remove when Server Side is ready
      dispatch(logInSuccessAction(FAKE_LOGIN_DATA));
      return FAKE_LOGIN_DATA;
    })
    .catch(err => {
      dispatch(logInFailureAction(err));
    });
};
