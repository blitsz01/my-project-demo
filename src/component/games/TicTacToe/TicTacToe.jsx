import React, { Component } from "react";
import Board from "./Board";
class TicTacToe extends Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex d-column">
        <h3>Tic-Tac-Toe</h3>
        <div class="my-auto">
          <Board />
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </section>
    );
  }
}

export default TicTacToe;
