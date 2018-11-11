import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./navbar.css";

export class NavbarView extends React.Component {
  logout() {
    this.props.dispatch({
      type: "LOGOUT_SUCCESS"
    });
    alert("Logout Succesful.");
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

export default connect(mapStateToProps)(NavbarView);
