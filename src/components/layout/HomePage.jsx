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

    const newsletterElement = (
      <div className="newsletter">
        <h3 className="mr-auto">Newsletter</h3>

        <form action="" className="text-center d-flex px-2">
          <input type="email" placeholder="deine@email.de" required></input>
          {/* <br /> */}
          <button>Subscribe</button>
        </form>
      </div>
    );

    return (
      <div className="landing">
        <Row className="section1 frontBackground" id="home">
          <Col></Col>
          <Col md={5} className="px-4">
            <div className="statement">
              <h2>
                {/* Online-Plattform zur Stärkung des lokalen Einzelhandels in Köln. */}
                Lokal. <br />
                Nachhaltig. <br /> Progressiv.
              </h2>
            </div>
          </Col>

          <Col md={4} className="px-4">
            <div className="d-flex flex-column">
              <p className="w-100">
                Wir machen euch sichtbar. <br /> Während und nach der Krise. <br />{" "}
                <b>kostenfrei & gemeinnützig</b>
              </p>
              {newsletterElement}
            </div>
          </Col>
          <Col> </Col>
        </Row>

        <Row className="section2" id="about">
          <Col></Col>
          <Col md={8} className="px-4">
            <h2>Die Idee</h2>
            <p>
              Wir verstehen uns als Plattform die auf der einen Seite Kunden die Möglichkeit bietet ihren
              Kölner Lieblingsshop auch angesichts der durch das Corona-Virus erschwerten Bedingungen zu
              unterstützen. Auf der anderen Seite wollen wir lokale Einzelhändler in ganz Köln die Möglichkeit
              bieten sich online zu präsentieren und direkten Kontakt zu den Menschen in ihrer Umgebung
              herzustellen.
            </p>
            <p>
              Jeder lokale Einzelhändler benötigt eine Online-Präsenz mit Produktübersicht, Zahlungsabwicklung
              und Logisitik. Weil wir alle derzeit aufgefordert sind uns so wenig wie moeglich draussen
              aufzuhalten wird auch das Einkaufen erschwert und der Rueckgriff auf grosse Versandshops
              attraktiver. Weil dies den lokalen Handel schwaecht, der gerade jetzt moeglichst viel
              Unterstuetzung braucht wollen wir mit dieser Plattform eine neue Art der Kommunikation zwischen
              Kunden und lokalem Einzelhandel gewährleistet, sodass nicht jeder Onlinekauf bei den
              Marktgiganten erfolgen muss.
            </p>
            <p>
              So wollen wir gemeinsam mit unseren Nachbar*innen und den Geschaeften in unserer direkten
              Umgebung die Corona-Krise meistern und ein Gegengewicht zu den marktführenden
              Online-Versandhändlern schaffen, deren Produkte im Internet professionell vermarktet, dreimal um
              die Welt verschickt werden und in Zeiten eines Shutdowns einen enormen Wettbewerbsvorteil
              gegenüber lokalen Fachgeschäften haben, die derzeit der Gefahr einer drohenden Insolvenz
              ausgesetzt sind.
            </p>
            <Row>
              <Col md={6} className="mx-auto py-5 px-0">
                {newsletterElement}
              </Col>
            </Row>
          </Col>
          <Col>
            {" "}
            <img src="/assets/images/strangeSymbol.svg" alt="" className="shapeSize" srcset="" />{" "}
          </Col>
        </Row>

        {/* <div className="row section3" id="contact">
                    <div className="col-md-1"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-1"></div>
                    <div className="col-md-2"></div>

                    <div className="col-md-1"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-1"></div>
                    <div className="col-md-2"></div>
                </div> */}
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
