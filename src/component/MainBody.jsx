import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import TicTacToe from "./TicTacToe";
import Pairs from "./Pairs";
import About from "./About";

class MainBody extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route path="/tictactoe" component={TicTacToe} />
          <Route path="/pairs" component={Pairs} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    );
  }
}

export default MainBody;
