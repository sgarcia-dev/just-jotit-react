import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";

import { loadAuthData } from "../authentication/localStorage";
import { setAuthData } from "../authentication/auth-actions";

import noteReducer from "./note-reducer";
import authReducer from "./auth-reducer";

const STORE = createStore(
  combineReducers({
    note: noteReducer,
    auth: authReducer,
    form: formReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

const authData = loadAuthData();
if (authData) {
  STORE.dispatch(setAuthData(authData));
}

export default STORE;
