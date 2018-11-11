import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./navigation/NavbarView";
import LandingView from "./home/LandingView";
import LoginView from "./authentication/LoginView";
import { SignupView } from "./authentication/SignupView";
import { CreateNoteView } from "./notes/create/CreateNoteView";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={LandingView} />
          <Route path="/login" component={LoginView} />
          <Route path="/signup" component={SignupView} />
          <Route path="/create" component={CreateNoteView} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
