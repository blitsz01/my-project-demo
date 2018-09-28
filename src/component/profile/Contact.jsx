import React, { Component } from "react";
import data from "../../data/data.json";

class Contact extends Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column">
        <div className="my-auto">
          <h2 className="mb-5">Contact Me</h2>
          <hr className="m-0" />
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fas fa-phone text-warning" />
              {data.contactNumber}
            </li>
            <li>
              <i className="fa-li fas fa-envelope text-warning" />
              <a href={"mailto:" + data.email}>{data.email}</a>
            </li>
            <li>
              <i className="fa-li fab fa-facebook text-warning" />
              <a href={data.fbUrl}>{data.fbUrl}</a>
            </li>
            <li>
              <i className="fa-li fab fa-skype text-warning" />
              {data.skype}
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Contact;
