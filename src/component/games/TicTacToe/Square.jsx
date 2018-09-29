import React, { Component } from "react";
import "./ticTac.css";

class Square extends React.Component {
  render() {
    return (
      <div
        className="modal-board card-panel"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </div>
    );
  }
}

export default Square;
