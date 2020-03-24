import React, { Component, useState } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { saveQuestionnaire } from "../../store/actions/authActions";
import "./../../style/auth.css";
import "./../../style/auth.css";

class Questionnaire extends Component {
  state = { showConfimation: false, firstName: "", lastName: "", email: "", city: "", region: "", plz: "" };

  selectOptions1 = {
    kann: "ja, kann und will ich",
    kannNicht: "ja, will ich, kann aber nicht",
    nein: "nein, will ich nicht "
  };

  selectOptions2 = {
    tel: "ja, per Telefon",
    chatMail: "ja, per Chat/Mail",
    nein: "nein, will ich nicht "
  };

  handleClose = () => this.setState({ showConfimation: false });
  handleShow = () => this.setState({ showConfimation: true });

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveQuestionnaire(this.state);
    this.handleShow();
  };

  render() {
    const { showConfimation } = this.state;
    const confirmationModal = (
      <Modal show={showConfimation} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ehrlichen dank fuer Ihren Support</Modal.Title>
        </Modal.Header>
        <Modal.Body>-- some text saying thanks and next steps --</Modal.Body>
        <Modal.Footer>
          <Button className="btn-primary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );

    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: "var(--dark-color)" }}
      >
        {/* START FRAGENBOGEN */}
        <div className="subscribe text-justify" id="#subscribe">
          {/* INTRO TO FRAGENBOGEN */}
          <div className="questionGroup">
            <h2>Helft uns euch zu helfen</h2>
            <p>
              Kurze Info was wir machen. Fragebogen als Info über Optionen und für Anregungen/Hilfe/Feedback
              nicht bindend!!! Soll uns nur helfen, Lösungen zu finden die euch helfen! Kurze Info was wir
              machen.
            </p>
            <p>
              Fragebogen als Info über Optionen und für Anregungen/Hilfe/Feedback nicht bindend!!! Soll uns
              nur helfen, Lösungen zu finden die euch helfen! Kurze Info was wir machen.
            </p>
            <p>
              Fragebogen als Info über Optionen und für Anregungen/Hilfe/Feedback nicht bindend!!! Soll uns
              nur helfen, Lösungen zu finden die euch helfen!
            </p>
          </div>

          <Form onSubmit={this.handleSubmit}>
            <h1 className="title">Fragenbogen</h1>

            {/* Part 1 */}

            <div className="questionGroup">
              <h2>Informationen und Online Präsenz</h2>
              <p>
                Euch soll damit die Möglichkeit gegeben werden, euer Geschäft vorzustellen und Informationen
                über die Produkte die Ihr anbietet für die Kunden bereitzustellen. Bitte gebt an, welche
                Optionen Ihr dafür gerne nutzen würdet.
              </p>
              <Question
                type={1}
                title={"Allgemeine Informationen über mein Geschäft"}
                desc={
                  "Mit dieser Option könnt Ihr dem Kunden allgemeine Informationen über euer Geschäft präsentieren. Dazu gehören Name, Art des Geschäfts, Adresse, Kontakt, und eine kurze Vorstellung eures Geschäfts."
                }
                question={"Würdet ihr dies gerne nutzen?"}
                options={this.selectOptions1}
                handleChange={this.handleChange}
              ></Question>
              <Question
                type={1}
                title={"Allgemeiner Überblick über Produkte"}
                desc={
                  "Mit dieser Option könnt ihr eine allgemeine Übersicht über die verschiedenen Produkte, die Ihr anbietet präsentieren. Dies umfasst nur eine übersichtliche Auflistung der verschiedenen Arten von Produkten in Form von Schlagwörtern und Kategorien. Damit kann der Kunde sich informieren, was für Produkte ihr allgemein anbietet."
                }
                question={"Würdet ihr dies gerne nutzen?"}
                options={this.selectOptions1}
                handleChange={this.handleChange}
              ></Question>
              <Question
                type={1}
                title={"Genaue Übersicht über einzelne Produkte"}
                desc={
                  "Mit dieser Option könnt Ihr eine genaue Übersicht über die einzelnen Produkte, die ihr anbietet präsentieren. Ihr könnt hier eure gesamte Produktpalette online aufzeigen, inklusive Produktinfos, Foto und ggfs. Preis und Kaufoption. Dies ermöglicht dem Kunden, sich genau zu informieren ob Ihr das passende Produkt für ihn habt."
                }
                question={"Würdet ihr dies gerne nutzen?"}
                options={this.selectOptions1}
                handleChange={this.handleChange}
              ></Question>
              <Question
                type={1}
                title={"Verknüpfung mit bestehendem Online-Shop"}
                desc={
                  "Falls Ihr bereits einen Online-Shop habt, kann dieser einfach mit unserer Plattform verknüpft werden."
                }
                question={"Würdet ihr dies gerne nutzen?"}
                options={this.selectOptions1}
                handleChange={this.handleChange}
              ></Question>
            </div>

            {/* PART 2 */}
            <div className="questionGroup">
              <h2>Kaufberatung/Konakt</h2>
              <Question
                type={2}
                title={"Verknüpfung mit bestehendem Online-Shop"}
                desc={
                  "Hiemit soll die Möglichkeit eröffnet werden, dass Händler und Kunde direkt und unkompliziert in Kontakt treten können. Damit soll ein privateres Kaufumfeld als bei großen Onlinehändlern ermöglicht werden, dass die Vorteile des persönlichen Kontakt direkt im Geschäft auch online gewährleisten soll. Die Kunden sollen die Möglichkeit haben, z.B. Fragen zu bestimmten Produkten zu stellen und bei ihrem Kauf beraten zu werden. "
                }
                question={"Würdet ihr dies gerne nutzen?"}
                options={this.selectOptions2}
                handleChange={this.handleChange}
              ></Question>
            </div>

            {/* PART 3 */}

            <div className="questionGroup">
              <h2>Liefern/Abholen</h2>
              <p>
                Es sollen verschiedene Optionen angeboten werden, wie die gekaufte Ware zum Kunden gelangt.
                Insbesondere da Einzelhändler aufgrund der aktuellen Lage leider ihre Geschäfte zeitweise
                geschlossen haben und der enge Kontakt zu anderen möglichst minimiert werden soll, wollen wir
                hier umsetzbare Alternativen anbieten, mit denen ihr euer Geschäft trotzdem am Laufen halten
                könnt. Bitte gebt an, welche Optionen Ihr dafür gerne nutzen würdet.
              </p>
              <Question
                type={1}
                title={"Abholung durch Kunden"}
                desc={
                  "Bei dieser Option soll die Möglichkeit gegeben werden, dass der Kunde zu einem bestimmten Zeitpunkt direkt bei eurem Geschäft die vorbereitete Ware abholt. Dabei soll bzw. muss euer Geschäft nicht offen sein und der Kunde sich nicht lange im Laden aufhalten - die Abholung findet einfach an der Tür statt."
                }
                question={"Würdet ihr dies gerne nutzen?"}
                options={this.selectOptions1}
                handleChange={this.handleChange}
              ></Question>
              <Question
                type={1}
                title={"Händler liefert selbst aus"}
                desc={
                  "Hier hättet ihr selbst die Möglichkeit die bestellte Ware an eure Kunden in der Umgebung auszuliefern. So könntet ihr z.B. bereits gesammelte Bestellungen in einer Tour in der Stadt verteilen. Diese Option ist natürlich nur relevant, falls euch die nötigen Fortbewegungsmittel (Fahrrad, Auto) zur Verfügung stehen"
                }
                question={"Würdet ihr dies gerne nutzen?"}
                options={this.selectOptions1}
                handleChange={this.handleChange}
              ></Question>
              <Question
                type={1}
                title={"Händler verschickt per Post"}
                desc={
                  "Bei dieser Option verschickt ihr ganz klassisch die bestellte Ware per Post an den Kunden."
                }
                question={"Würdet ihr dies gerne nutzen?"}
                options={this.selectOptions1}
                handleChange={this.handleChange}
              ></Question>
              <Question
                type={1}
                title={"Händler verschickt per Post"}
                desc={
                  "Diese Option können wir aktuell zwar noch nicht anbieten, längerfristig wäre dies aber eine schnelle und umweltfreundliche Alternative zum klassischen Postversand, die nur durch die lokale Nähe von euch und euren Kunden möglich ist. Fahrradkuriere o.ä. können die bestellte Ware direkt bei euch abholen und blitzschnell zum Kunden liefern"
                }
                question={"Würdet ihr dies gerne nutzen?"}
                options={this.selectOptions1}
                handleChange={this.handleChange}
              ></Question>
            </div>

            {/* PART 4 */}

            <div className="questionGroup">
              <h2>Bezahlung</h2>
              <Question
                type={2}
                title={""}
                desc={
                  "Hier geht es darum, wie die Kunden bei euch bezahlen können. Die verschiedenen Bezahlungsoptionen hängen natürlich auch davon ab, wie die Ware an den Kunden gelangt (Abholung, Lieferung, Postweg). So ist bei direkter Warenübergabe (vor dem Geschäft oder an der Haustür des Kunden) sowohl Bar wie Online Zahlung möglich. Bei klassischer Lieferung per Post kann hingegen Online Zahlung (PayPal) genutzt werden."
                }
                question={"Welche der Bezahlungsoptionen würdet ihr gerne nutzen?"}
                options={this.selectOptions2}
                handleChange={this.handleChange}
              ></Question>
            </div>

            {/* PART 5 */}

            <div className="questionGroup">
              <h2>Feedback</h2>
              <hr />
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>
                  Wir wollen eine Plattform schaffen, die euch als lokale Einzelhändler in dieser schwierigen
                  Zeit unterstützt. Falls ihr selbst noch Anregungen oder Fragen habt, gebt uns hier sehr
                  gerne ein Feedback. Helft uns euch zu helfen!
                </Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Vielen Dank!" />
              </Form.Group>
            </div>

            {/* FINAL PART */}
            <div className="questionGroup">
              <h2>Contact details</h2>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="formBasicFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    required
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    required
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="formBasicShopName">
                <Form.Label>Name deines Geschäfts</Form.Label>
                <Form.Control
                  type="text"
                  // placeholder="Name deines Betriebs"
                  required
                  name="shopName"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  name="email"
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    required
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label>Region</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Region"
                    name="region"
                    required
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                  <Form.Label>PLZ</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="PLZ"
                    name="plz"
                    required
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
            </div>
            <Button type="submit" className="btn-big">
              Anmelden
            </Button>
          </Form>
        </div>
        {showConfimation && confirmationModal}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveQuestionnaire: questionnaire => dispatch(saveQuestionnaire(questionnaire))
  };
};

export default connect(null, mapDispatchToProps)(Questionnaire);

function Question(props) {
  const { type, title, desc, question, options, handleChange } = props;

  let questionElement = {};
  if (type === 1) {
    questionElement = (
      <Form.Group as={Col} md="6" className="my-auto q1" controlId="validationCustom03">
        <Form.Control as="select" required name="shopName" onChange={handleChange}>
          {Object.values(options).map((opt, key) => (
            <option key={key}>{opt}</option>
          ))}
        </Form.Control>
      </Form.Group>
    );
  } else if (type === 2) {
    questionElement = (
      <Form.Group as={Col} md="6" className="my-auto q2" controlId="validationCustom03">
        {Object.values(options).map((opt, key) => (
          <Form.Check type="checkbox" id="uyi" label={opt} key={key} />
        ))}
      </Form.Group>
    );
  }

  return (
    <div className="question">
      <h4>{title}</h4>
      <p>{desc}</p>

      <Form.Row className="my-4">
        <Form.Group as={Col} md="6" className="my-auto" controlId="validationCustom03">
          <Form.Label className="">{question}</Form.Label>
        </Form.Group>
        {questionElement}
      </Form.Row>
      <Form.Group controlId="exampleForm.ControlSelect1"></Form.Group>
    </div>
  );
}
