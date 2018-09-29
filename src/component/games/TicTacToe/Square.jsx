import React, { Component } from "react";
import "./ticTac.css";
class Square extends React.Component {
  render() {
    return (
      <div
        className="modalCard card-panel"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </div>
    );
  }
}
export default Square;
