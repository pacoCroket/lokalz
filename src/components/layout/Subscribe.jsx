import React, { Component, useState } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { saveEmail } from "../../store/actions/authActions";
import "./../../style/subscribe.css";
import { Row } from "react-bootstrap";

class Questionnaire extends Component {
  state = { showConfimation: false, email: "" };

  handleClose = () => this.setState({ showConfimation: false });
  handleShow = () => this.setState({ showConfimation: true });

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveEmail(this.state);
    this.handleShow();
  };

  render() {
    const { showConfimation } = this.state;
    const confirmationModal = (
      <Modal show={showConfimation} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vielen Dank</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sie werden bald von uns hören</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );

    return (
      <Form onSubmit={this.handleSubmit} className="newsletter">
        <h3 className="mr-auto">Newsletter</h3>
        <div className="inputEmail p-2">
          <Form.Group controlId="formBasicEmail" className="text-center d-flex px-2 my-auto">
            <Form.Control
              type="email"
              placeholder="deine@email.de"
              required
              name="email"
              onChange={this.handleChange}
            />

            <Button type="submit" className="btn-big">
              Subscribe
            </Button>
          </Form.Group>
        </div>
        {confirmationModal}
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveEmail: email => dispatch(saveEmail(email))
  };
};

export default connect(null, mapDispatchToProps)(Questionnaire);
