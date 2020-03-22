import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { saveQuestionnaire } from "../../store/actions/authActions";
import "./../../style/auth.css";
import "./../../style/auth.css";

class Questionnaire extends Component {
  state = { showConfimation: false, firstName: "", lastName: "", email: "", city: "", region: "", plz: "" };

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
          <Button clasName="btn-primary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );

    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="subscribe" id="#subscribe">
          <Form onSubmit={this.handleSubmit}>
            <h5>Fragenbogen</h5>
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
