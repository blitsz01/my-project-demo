import React, { Component } from "react";
import Board from "./Board";

class TicTacToe extends Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex d-column">
        <div class="my-auto">
          <h2>Tic-Tac-Toe</h2>
          <Board />
          <div className="game-info" />
        </div>
      </section>
    );
  }
}

export default TicTacToe;
