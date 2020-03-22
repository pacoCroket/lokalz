import React, { Component } from "react";
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
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Card className="my-4 w-50">
          <Card.Title className="mx-auto p-2 my-0">Helft uns euch zu helfen</Card.Title>
          <Card.Body>
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
          </Card.Body>
        </Card>
        <div className="subscribe text-justify" id="#subscribe">
          <Form onSubmit={this.handleSubmit}>
            <h1>Fragenbogen</h1>
            <hr />
            <h2>Informationen und Online Präsenz</h2>
            <p>
              Euch soll damit die Möglichkeit gegeben werden, euer Geschäft vorzustellen und Informationen
              über die Produkte die Ihr anbietet für die Kunden bereitzustellen. Bitte gebt an, welche
              Optionen Ihr dafür gerne nutzen würdet.
            </p>
            {/* Part 1 */}
            <div className="py-3">
              <h4>Allgemeine Informationen über mein Geschäft</h4>
              <p>
                Mit dieser Option könnt Ihr dem Kunden allgemeine Informationen über euer Geschäft
                präsentieren. Dazu gehören Name, Art des Geschäfts, Adresse, Kontakt, und eine kurze
                Vorstellung eures Geschäfts.
              </p>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Würdet ihr dies gerne nutzen?</Form.Label>
                <Form.Control as="select" required name="shopName" onChange={this.handleChange}>
                  {Object.values(this.selectOptions1).map(opt => (
                    <option>{opt}</option>
                  ))}
                </Form.Control>
              </Form.Group>

              <hr />
            </div>
            <h4>Contact details</h4>
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
            <Button variant="primary" type="submit" className="btn-primary">
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
