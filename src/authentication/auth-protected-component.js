import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default Component => {
  function AuthProtectedComponent(props) {
    const { isLoggedIn, ...passThroughProps } = props;
    if (isLoggedIn) {
      return <Component {...passThroughProps} />;
    } else {
      return <Redirect to="/" />;
    }
  }

  const displayName = Component.displayName || Component.name || "Component";
  AuthProtectedComponent.displayName = `AuthProtectedComponent(${displayName})`;

  const mapStateToProps = state => ({
    isLoggedIn: !!(state.auth.user && state.auth.jwt)
  });

  return connect(mapStateToProps)(AuthProtectedComponent);
};
