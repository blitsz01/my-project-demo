import React, { Component } from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <hr className="m-0" />
          <Link className="navbar-brand js-scroll-trigger" to="/">
            <span className="d-none d-lg-block">
              <img src={logo} className="App-logo" alt="logo" />
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav fa-ul mb-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fas fa-user-circle text-light" /> Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tictactoe">
                  <i className="far fa-times-circle text-light" /> Tic-Tac-Toe
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pairs">
                  <i className="fas fa-parking text-light" /> Pairs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <i className="fas fa-phone text-light" /> Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Nav;
