import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import NoteListView from "./NoteListView";

export const LandingView = props => {
  const defaultView = (
    <div id="default-menu">
      <h3>Welcome to JJ. Your own notebook, on the cloud.</h3>
      <h4>
        To create and view your notes, please <Link to="/login">Log In</Link>
        <span> or </span>
        <Link to="/signup">Create an Account</Link>
      </h4>
    </div>
  );

  const authenticatedView = (
    <div id="auth-menu">
      <h3 id="nav-greeting">Welcome {props.username}</h3>
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
