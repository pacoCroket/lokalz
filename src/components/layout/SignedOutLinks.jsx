import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default class SignedOutLinks extends Component {
  render() {
    return (
      <Nav className="ml-auto">
        <NavLink className="nav-link" to="/questionnaire">
          Subscribe
        </NavLink>
        {/* <Nav.Link href="/signup">Sign Up</Nav.Link>
        <Nav.Link href="/signin">Log In</Nav.Link> */}
        <NavLink className="nav-link" to="/donate">
          Donate
        </NavLink>
      </Nav>
    );
  }
}
