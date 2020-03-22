import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class HomePage extends Component {
  render() {
    const { notifications } = this.props;

    const brandString = (
      <>
        <b>Lokal</b>Zone.
      </>
    );

    return (
      <div className="landing">
        <div className="row section1" id="home">
          <div className="col-md-3 p-0 mb-auto">
            <h3 className="sm_title text-right border-left-0 mr-5">{brandString}</h3>
          </div>
          {/* <div className="col-md-1"></div> */}
          <div className="col-md center px-5">
            <h2 className="front_header logo_pos">
              Support your
              <br />
              ________local Shop
              <span style={{ color: "var(--accent-secondary-color)" }}>.</span>
            </h2>
            <p className="front_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          {/* <div className="col-md-1"></div> */}
          <div className="col-md-3 col_5 span4 p-0"></div>
        </div>
        <div className="row section2" id="about">
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
          <div className="col-md-2 p-0">
            <h3 className="sm_title text-left border-right-0 ml-5">{brandString}</h3>
          </div>
        </div>
        <div className="row section3" id="contact">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <div>
              <img
                className="pic"
                src="/assets/images/eichhoernchen-geert-weggen-zeigt-die-welt-der-kleinen-nager-.jpg"
                alt=""
              />
            </div>
            <p className="pic_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <div>
              <img className="pic" src="/assets/images/image.jpg" alt="" />
            </div>
            <p className="pic_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <div>
              <img className="pic" src="/assets/images/focus-stacking-scharfe-bilder-1.jpg" alt="" />
            </div>
            <p className="pic_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <h3 className="sm_title text-left border-right-0 ml-5">{brandString}</h3>
          </div>
        </div>
      </div>
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
