import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

export const NavbarView = () => (
  <nav className="navbar">
    <div className="brand">
      <h1>Just Jotit</h1>
    </div>
    <ul className="links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Create an Account</Link>
      </li>
      <li>
        <Link to="/create">Create</Link>
      </li>
    </ul>
  </nav>
);
