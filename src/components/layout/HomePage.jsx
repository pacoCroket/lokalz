import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Image from "react-bootstrap/Image";
import { Row } from "react-bootstrap";

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
                    <div className="cath col-md-3 p-0 mr-5">
                        <Image
                            className="ml-auto"
                            src="/assets/images/CologneCathedralSilhouette.svg"
                            rounded
                        />
                        <h3 className="sm_title text-right border-left-0 ">
                            {brandString}
                        </h3>
                    </div>
                    {/* <div className="col-md-1"></div> */}
                    <div className="col-md center px-5">
                        <h2 className="front_header">
                            <span className="logo_pos">Support</span> your{" "}
                            <br /> local Shop.
                            {/* <span
                                style={{
                                    color: "var(--accent-secondary-color)"
                                }}
                            >
                               
                            </span> */}
                        </h2>
                        <p className="front_text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>

                    <div className="col-md-3 span4 p-0"></div>
                </div>
                <div className="diagonal"></div>
                <div className="diagonal2"></div>
                <div className="row section2" id="about">
                    <div className="col-md-3 circle_pos"></div>

                    <div className="col-md-6 circle_pos">
                        {/* IMAGE1 */}
                        <div className="d-flex justify-content-end align-items-center img_wrap">
                            <Image
                                className="pic"
                                // style={{ backgroundColor: "darkred" }}
                                src="/assets/images/commerce.svg"
                                rounded
                            />
                            <span className="text_pos text-center">
                                <h4 className="pic_title text-left">
                                    Lokal
                                    <span
                                        style={{
                                            color: "var(--accent-light-color)"
                                        }}
                                    >
                                        !
                                    </span>
                                </h4>
                                <p className="pic_text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam
                                </p>
                            </span>
                        </div>
                        {/* IMAGE2 */}
                        <div className="d-flex justify-content-end align-items-center flex-row-reverse img_wrap">
                            <Image
                                className="pic"
                                // style={{ backgroundColor: "darkred" }}
                                src="/assets/images/growth.svg"
                                rounded
                            />
                            <span className="text_pos text-center">
                                <h4 className="pic_title text-right">
                                    Solidarisch
                                    <span
                                        style={{
                                            color: "var(--accent-light-color)"
                                        }}
                                    >
                                        !
                                    </span>
                                </h4>

                                <p className="pic_text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam
                                </p>
                            </span>
                        </div>

                        {/* IMAGE3 */}
                        <div className="d-flex justify-content-end align-items-center">
                            <Image
                                className="pic"
                                // style={{ backgroundColor: "darkred" }}
                                src="/assets/images/green.svg"
                                rounded
                            />
                            <span className="text_pos text-center">
                                <h4 className="pic_title text-left">
                                    Umweltbewusst
                                    <span
                                        style={{
                                            color: "var(--accent-light-color)"
                                        }}
                                    >
                                        !
                                    </span>
                                </h4>
                                <p className="pic_text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam
                                </p>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="diagonal3"></div>
                <div className="diagonal4"></div>
                <div className="row section3" id="contact">
                    <div className="col-md-1"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-1"></div>
                    <div className="col-md-2"></div>

                    <div className="col-md-1"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-1"></div>
                    <div className="col-md-2"></div>
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
    firestoreConnect([
        { collection: "notifications", limit: 5, orderBy: ["time", "desc"] }
    ])
)(HomePage);
