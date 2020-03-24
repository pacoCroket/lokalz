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
                <div className="row section1 frontBackground" id="home">
                    <div className="cath col-md-2 p-0">
                       
                      
                    </div>
                   
                    <div className="col-md center">
                        <h2 className="front_header">
                            {/* <span className="logo_pos"> </span>*/} Lokal <br/> nachhaltig <br/> progressiv 
                            
                          
                        </h2>
                        <p className="front_text">
                        Die LOKALZ-Initiative ist eine Herzensangelegenheit, welche aus den Herausforderungen angesichts der weltweit wütenden Corona-Krise heraus entstanden ist. Wir haben es uns zum Ziel gemacht, den lokalen Einzelhandel Kölns durch eine gemeinsame Online-Plattform für die Kölner*innen sichtbar zu machen, um so einen Gegenpol zu den marktführenden Online-Versandhäusern schaffen. 
                        </p>
                    </div>

                
                <div className="cath2 col-md-5 span4 p-0">
     
                        </div>
                </div>
                <div className="diagonal"></div>
                {/* <div className="diagonal2"></div> */}
                <div className="row section2" id="about">
                    <div className="col-md-3 pl-0">
                  
                        </div>  
                    <div className="col-md-6 circle_pos">
                        {/* IMAGE1 */}
                        <div className="d-flex justify-content-end align-items-center img_wrap">
                            <span className="text_pos">
                                <h4 className="pic_title text-center">
                                    Lokal
                                
                                </h4>
                                <p className="pic_text text-center">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam
                                </p>
                            </span>
                        </div>
                        {/* IMAGE2 */}
                        <div className="d-flex justify-content-end align-items-center flex-row-reverse img_wrap">
                     
                            <span className="text_pos text-center">
                                <h4 className="pic_title text-center">
                                    Solidarisch
                                </h4>
                                <p className="pic_text text-center">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam
                                </p>
                            </span>
                        </div>

                        {/* IMAGE3 */}
                        <div className="d-flex justify-content-end align-items-center">
                         
                            <span className="text_pos">
                                <h4 className="pic_title text-center">
                                    Umweltbewusst
                              
                                </h4>
                                <p className="pic_text text-center">
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
