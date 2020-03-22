import React, { Component } from "react";
import "./style/App.css";
import MyNavBar from "./components/layout/MyNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/layout/HomePage";
import SingIn from "./components/auth/SignIn";
import SingUp from "./components/auth/SignUp";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" id="app">
          <MyNavBar id="NavBar" />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signup" component={SingUp} />
            <Route path="/signin" component={SingIn} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
