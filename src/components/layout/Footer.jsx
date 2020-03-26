import React, { Component } from "react";
import "./../../style/footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-area mt-auto" id="footer-area">
        <div className="container">
          <div className="site-logo text-center">
            <div className="social text-center">
              <h5 className="text-uppercase">Follow us</h5>
              <a href="" className="">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="" className="">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="" className="">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
