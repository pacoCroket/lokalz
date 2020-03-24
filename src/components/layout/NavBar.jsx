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
    // const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

    return (
      <header>
        <Navbar collapseOnSelect expand="lg" fixed="top">
          <Navbar.Brand className="nav-brand text-capitalize text-center" href="/#home">
            LokalZ
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="nav-link" href="/#home" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link" href="/#about" className="nav-link">
                About
              </Nav.Link>
              <Nav.Link className="nav-link" href="/#browse" className="nav-link">
                Browse
              </Nav.Link>
              <Nav.Link className="nav-link" href="/#contact" className="nav-link">
                Contact
              </Nav.Link>
            </Nav>

            {/* {auth.isLoaded && links}
             */}

            <Nav className="ml-auto">
              <NavLink className="nav-link" to="/subscribe">
                Subscribe
              </NavLink>
              <NavLink className="nav-link" to="/donate">
                Donate
              </NavLink>
            </Nav>
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
