import React, { Component } from "react";
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
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">My Portfolio</span>
            <span className="d-none d-lg-block">
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src="/images/profile.jpg"
                alt=""
              />
            </span>
          </a>
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tictactoe">
                  Tic-Tac-Toe
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pairs">
                  Pairs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Dev
                </Link>
              </li>
              <hr className="m-0" />
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/logout">
                  <i className="fas fa-sign-out-alt" />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Nav;
