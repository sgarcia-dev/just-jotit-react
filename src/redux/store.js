import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";

import noteReducer from "./note-reducer";
import authReducer from "./auth-reducer";

export default createStore(
  combineReducers({
    note: noteReducer,
    auth: authReducer,
    form: formReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
