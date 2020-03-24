import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";

class HomePage extends Component {
  render() {
    const { notifications } = this.props;

    const brandString = (
      <>
        <b>Lokal</b>Zone.
      </>
    );

    const topSection = (
      <Row className="section1 frontBackground" id="home">
        <Col></Col>
        <Col md={8}>
          <div className="statement">
            <h2>
              {/* <span className="logo_pos"> </span>*/}
              Lokal. <br />
              Nachhaltig. <br /> Progressiv.
            </h2>
            <div>
              <p>
                Wir machen euch im Netz sichtbar. Während und nach der Krise. Ohne jegliche Gebühren!
                {/* Online-Plattform zur Stärkung des lokalen Einzelhandels in Köln. */}
              </p>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    );

    //   const restSections = (<Row className="section2" id="about">
    //   <div className="col-md-3 pl-0"></div>
    //   <div className="col-md-6 circle_pos">
    //     <div className="d-flex justify-content-end align-items-center img_wrap">
    //       <span className="text_pos">
    //         <h4 className="pic_title text-center">Lokal</h4>
    //         <p className="pic_text text-center">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    //           labore et dolore magna aliqua. Ut enim ad minim veniam
    //         </p>
    //       </span>
    //     </div>
    //     <div className="d-flex justify-content-end align-items-center flex-row-reverse img_wrap">
    //       <span className="text_pos text-center">
    //         <h4 className="pic_title text-center">Solidarisch</h4>
    //         <p className="pic_text text-center">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    //           labore et dolore magna aliqua. Ut enim ad minim veniam
    //         </p>
    //       </span>
    //     </div>

    //     <div className="d-flex justify-content-end align-items-center">
    //       <span className="text_pos">
    //         <h4 className="pic_title text-center">Umweltbewusst</h4>
    //         <p className="pic_text text-center">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    //           labore et dolore magna aliqua. Ut enim ad minim veniam
    //         </p>
    //       </span>
    //     </div>
    //   </div>
    //   <div className="col-md-3"></div>
    // </Row>

    // <div className="diagonal3"></div>
    // <div className="row section3" id="contact">
    //   <div className="col-md-1"></div>
    //   <div className="col-md-2"></div>
    //   <div className="col-md-1"></div>
    //   <div className="col-md-2"></div>

    //   <div className="col-md-1"></div>
    //   <div className="col-md-2"></div>
    //   <div className="col-md-1"></div>
    //   <div className="col-md-2"></div>
    // </div>);

    return (
      <div className="landing">
        {topSection}
        <div className="diagonal"></div>
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
