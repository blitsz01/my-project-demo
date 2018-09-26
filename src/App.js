import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./component/Nav";
import MainBody from "./component/MainBody";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container-fluid p-0">
          <MainBody />
        </div>
      </div>
    );
  }
}

export default App;
