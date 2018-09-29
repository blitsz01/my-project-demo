import React, { Component } from "react";

class DisplayImages extends Component {
  render() {
    return (
      <div
        className="modalCard card-panel"
        onClick={() => {
          if (!this.props.isCorrect && !this.props.isSelected) {
            this.props.onSelect();
          }
        }}
      >
        <img
          id="imgCard"
          style={{
            visibility:
              this.props.isCorrect || this.props.isSelected
                ? "visible"
                : "hidden"
          }}
          src={this.props.image}
          alt="Error"
        />
      </div>
    );
  }
}

export default DisplayImages;
