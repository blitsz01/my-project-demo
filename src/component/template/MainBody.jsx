import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "../profile/Profile";
import Contact from "../profile/Contact";
import TicTacToe from "../games/TicTacToe/TicTacToe";
import Pairs from "../games/pairs/Pairs";

class MainBody extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route path="/tictactoe" component={TicTacToe} />
          <Route path="/pairs" component={Pairs} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    );
  }
}

export default MainBody;
