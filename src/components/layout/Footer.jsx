import React, { Component } from "react";
import "./../../style/footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-area" id="footer-area">
        <div className="container">
          <div className="">
            <div className="site-logo text-center">
              <div className="social text-center py-2">
                <h5 className="text-uppercase py-2">Follow me</h5>
                <a href="https://www.instagram.com/pacocroket/" className="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://soundcloud.com/frank-croket" className="">
                  <i className="fab fa-soundcloud"></i>
                </a>
                <a href="https://github.com/pacoCroket" className="">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/francisco-paco-muro-006a7895/" className="">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
