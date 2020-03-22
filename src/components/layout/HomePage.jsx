import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class HomePage extends Component {
  render() {
    const { notifications } = this.props;

    return (
      <>
        <div className="landing">
          <div className="row">
            <div className="col-md-3">
              <h3 className="sm_title">
                <b>Lokal</b>zone
              </h3>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4 center">
              <h2 className="front_header logo_pos">
                Support your local Shop<span className="yellow">.</span>
              </h2>
              <p className="front_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 col_5 span4"></div>
          </div>
        </div>
        <div className="section_2">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-2">
              <div className="pic"></div>
              <span className="pic_text"></span>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2">
              <div className="pic"></div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2">
              <div className="pic"></div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2">
              <h3 className="sm_title2">
                Lokal<b>zone</b>
              </h3>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { notifications } = state.firestore.ordered;
  return {
    notifications,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "notifications", limit: 5, orderBy: ["time", "desc"] }])
)(HomePage);
