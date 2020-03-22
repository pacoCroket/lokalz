import React, { Component } from "react";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./../../style/navbar.css";

class MyNavBar extends Component {
  render() {
    const { auth } = this.props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

    return (
      <header>
        <Navbar expand="lg" fixed="top">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/#home" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/#about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/#browse" className="nav-link">
                Browse
              </NavLink>
              <NavLink to="/#contact" className="nav-link">
                Contact
              </NavLink>
            </Nav>

            <Navbar.Text className="nav-logo position-absolute text-capitalize" style={{ left: "50%" }}>
              LokalZ.
            </Navbar.Text>
            {auth.isLoaded && links}
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(MyNavBar);
