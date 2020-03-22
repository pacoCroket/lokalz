import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import { signOut } from "../../store/actions/authActions";
import { getUserProjects } from "../../store/actions/projectActions";
import { isEmpty } from "underscore";

class SignedInLinks extends Component {
  handleSetProject = project => {
    if (project) {
      this.props.setLocalProject(project);
    } else if (!isEmpty(this.props.projects)) {
      this.props.setLocalProject(this.props.projects[0]);
    }
  };

  render() {
    const { profile } = this.props;

    return (
      <Nav className="ml-auto">
        <NavDropdown
          title={profile.firstName ? profile.firstName + "'s Profile" : "My profile"}
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item href="/">Settings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/" onClick={this.props.signOut}>
            Sign Out
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    );
  }
}

const mapStateToProps = state => {
  const { ordered } = state.firestore;
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    projects: ordered.projects,
    localProject: state.project.localProject
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
    getUserProjects: () => dispatch(getUserProjects()),
    setLocalProject: project => dispatch({ type: "SET_LOCAL_PROJECT", project })
    // delProject: () => dispatch(delProject())
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [
    {
      collection: `users/${props.auth.uid}/projects/`,
      storeAs: "projects",
      limit: 10,
      orderBy: ["lastEdit", "desc"]
    }
  ])
)(SignedInLinks);
