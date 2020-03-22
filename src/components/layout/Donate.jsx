import React, { Component } from "react";
// import PaypalButton from "./../payments/PaypalButton";

const CLIENT = {
  sandbox: "xxxXXX",
  production: "xxxXXX"
};

const ENV = process.env.NODE_ENV === "production" ? "production" : "sandbox";

export default class Donate extends Component {
  render() {
    const onSuccess = payment => console.log("Successful payment!", payment);
    const onError = error => console.log("Erroneous payment OR failed to load script!", error);
    const onCancel = data => console.log("Cancelled payment!", data);

    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "500px" }}>
        <h2 className="front_header">
          <span className="logo_pos">Work</span> In Progess
          <span style={{ color: "var(--accent-secondary-color)" }}>!</span>
        </h2>
        {/* <PaypalButton
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={"USD"}
          total={100}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        /> */}
      </div>
    );
  }
}
