import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import "./../../style/auth.css";
import "./../../style/auth.css";

export default class Questionnaire extends Component {
  state = { showConfimation: false };

  handleClose = () => this.setState({ showConfimation: false });
  handleShow = () => this.setState({ showConfimation: true });

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.handleShow();
    // if (this.state.password !== this.state.rePassword) {
    //   this.setState({ error: true });
    //   return;
    // } else {
    //   this.setState({ error: false });
    //   this.props.signUp(this.state);
    // }
    console.log(e);
  };

  render() {
    const { showConfimation } = this.state;
    const confirmationModal = (
      <Modal show={showConfimation} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ehrlichen dank fuer Ihren Support</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );

    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="subscribe">
          <Form onSubmit={this.handleSubmit}>
            <h5>Fragenbogen</h5>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="firstName"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" required />
                <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" required />
                <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" placeholder="Zip" required />
                <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit" className="ml-auto">
              Anmelden
            </Button>
          </Form>
        </div>
        {showConfimation && confirmationModal}
      </div>
    );
  }
}
