import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../authentication/auth-actions";

import "./navbar.css";

export class NavbarView extends React.Component {
  logout() {
    this.props.logout();
    alert("Logout succesful.");
    this.props.history.push("/");
  }

  render() {
    const defaultLinks = !this.props.isLoggedIn ? (
      <React.Fragment>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Create an Account</Link>
        </li>
      </React.Fragment>
    ) : null;

    const authLinks = this.props.isLoggedIn ? (
      <React.Fragment>
        <li>
          <Link to="/create">Create</Link>
        </li>
        <li>
          <button onClick={this.logout.bind(this)}>Logout</button>
        </li>
      </React.Fragment>
    ) : null;

    return (
      <nav className="navbar">
        <div className="brand">
          <Link to="/">
            <h1>Just Jotit</h1>
          </Link>
        </div>
        <ul className="links">
          {defaultLinks}
          {authLinks}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = {
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavbarView));
