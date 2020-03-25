import React, { Component, useState } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { saveQuestionnaire } from "../../store/actions/authActions";
import "./../../style/subscribe.css";
import { Row } from "react-bootstrap";

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
          <Button className="btn-primary" onClick={this.handleClose}>
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
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveQuestionnaire: questionnaire => dispatch(saveQuestionnaire(questionnaire))
  };
};

export default connect(null, mapDispatchToProps)(Questionnaire);
