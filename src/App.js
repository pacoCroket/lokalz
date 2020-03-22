import React, { Component } from "react";
import "./style/style.css";
import NavBar from "./components/layout/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/layout/HomePage";
import Footer from "./components/layout/Footer";
import SingIn from "./components/auth/SignIn";
import SingUp from "./components/auth/SignUp";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" id="app">
          <NavBar id="NavBar" />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signup" component={SingUp} />
            <Route path="/signin" component={SingIn} />
          </Switch>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
