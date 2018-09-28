import React, { Component } from "react";
import "./App.css";
import Nav from "./component/template/Nav";
import MainBody from "./component/template/MainBody";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container-fluid p-0">
          <MainBody />
        </div>
      </div>
    );
  }
}

export default App;
