import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";
import Subscribe from "./Subscribe";

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
                <Row className="section1 frontBackground" id="home">
                    <Col></Col>
                    <Col md={5} className="px-5">
                        <div className="statement">
                            <h2>
                                {/* Online-Plattform zur Stärkung des lokalen Einzelhandels in Köln. */}
                                Lokal. <br />
                                Nachhaltig. <br /> Progressiv.
                            </h2>
                        </div>
                    </Col>

                    <Col md={4} className="px-5">
                        <div className="d-flex flex-column">
                            <p className="w-100">
                                Wir machen euch sichtbar. <br /> Während und
                                nach der Krise. <br />{" "}
                                <b>Kostenfrei & gemeinnützig</b>
                            </p>
                            <Subscribe></Subscribe>
                        </div>
                    </Col>
                    <Col> </Col>
                </Row>

                <Row className="section2" id="about">
                    <Col></Col>
                    <Col
                        md={7}
                        className="px-4 d-flex flex-column justify-content-center align-items-center"
                    >
                        <h2>Die Idee</h2>
                        <p>
                            In einer Zeit, in der auch das Einkaufen erschwert
                            ist muss damit gerechnet werden, dass immer mehr
                            Menschen auf die Angebote einschlaegiger
                            Online-Versandhaendler zurueckgreifen werden, die
                            schon heute den hert umkaempfen Online-Markt
                            dominieren. Angesichts dieser Entwicklungen setzt
                            #brandname darauf dem anonymen Online-Handel eine
                            neue Art der Kommunikation zwischen Kunden und
                            lokalen Geschaeften herzustellen, um beiden dadurch
                            durch die Krise zu helfen.
                        </p>

                        <h5>#shoplocal with GrinKopp</h5>

                        <p>
                            GrinKopp ist eine neuartige Plattform die lokale
                            Geschäfte unterstützen moechte. Motiviert durch die
                            neuen Herauforderungen der Corona-Krise, aber mit
                            dem Ziel auch darueber hinaus einen Einfluss zu
                            haben um den Online-Handel wieder naeher an das
                            Leben der Menschen zu bringen und so den derzeit mit
                            ihm einhergehende Umweltverschmutzung und
                            Anonymitaet entgegenzuwirken.
                        </p>

                        <h3 className="mx-auto">
                            Lokal und nachhaltig – hier und jetzt!
                        </h3>

                        <Row className="container-fluid">
                            <Col md={6} className="mx-auto py-5 px-0">
                                <Subscribe></Subscribe>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        {" "}
                        <img
                            src="/assets/images/strangeSymbol.svg"
                            alt=""
                            className="shapeSize"
                            srcset=""
                        />{" "}
                    </Col>
                </Row>
             
<script> $(window).scroll(function() {
   
    $(".hideme").each(function(i) {
        var bottom_of_object =
            $(this).position().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

     
        if (bottom_of_window > bottom_of_object) {
            $(this).animate({ opacity: "1" }, 1500);
        }
    });
});
</script>
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


