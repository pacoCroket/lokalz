import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

export default class SignedOutLinks extends Component {
  render() {
    return (
      <Nav className="ml-auto">
        <Nav.Link href="/signup">Sign Up</Nav.Link>
        <Nav.Link href="/signin">Log In</Nav.Link>
      </Nav>
    );
  }
}
