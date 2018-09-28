import React, { Component } from "react";
import data from "../../data/data.json";
import profileImg from "../../images/profile.jpg";

class Profile extends Component {
  state = {};

  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex d-column">
        <div className="my-auto">
          <span className="d-lg-block" id="profileImg">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={profileImg}
              alt=""
            />
          </span>
          <h2 className="mb-0">
            {data.firstName}
            <span className="text-primary">{data.lastName}</span>
          </h2>
          <div className="subheading mb-5">
            {data.address}
            <a href={"mailto:" + data.email}> {data.email}</a>
          </div>
          <p className="lead mb-5">{data.summary}</p>
          <div className="social-icons">
            <a href={data.gitUrl}>
              <i className="fab fa-github" />
            </a>
            <a href={data.fbUrl}>
              <i className="fab fa-facebook-f" />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
