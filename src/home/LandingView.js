import React from "react";
import { connect } from "react-redux";

import NoteListView from "./NoteListView";

export const LandingView = props => {
  const defaultView = (
    <div id="default-menu">
      <h1>Welcome to JJ. Your own notebook, on the cloud.</h1>
      <p>
        Just Jotit is a place where you can write down your ideas in a simple,
        minimal interface, and access them using your account information.
      </p>
      <h5>To create and view your notes, please Login or Create an Account.</h5>
    </div>
  );

  const authenticatedView = (
    <div id="auth-menu">
      <h1 id="nav-greeting">Welcome {props.username}</h1>
      <NoteListView />
    </div>
  );

  return props.isLoggedIn ? authenticatedView : defaultView;
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  username: state.auth.username
});

export default connect(mapStateToProps)(LandingView);
