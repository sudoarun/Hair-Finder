import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./DashBoard.css";
// import logo from "../../assets/logo.png";

const DashBoard = () => {
  return (
    <div>
      <nav>
        <ul className="navitems">
          <li>
            <a href="#!" className="logo">
              <span className="nav-item">Home</span>
            </a>
          </li>

          <li>
            <a href="#!">
              <span className="nav-item">Profile</span>
            </a>
          </li>

          <li>
            <a href="#!">
              <span className="nav-item">Schedules</span>
            </a>
          </li>

          <li>
            <a href="!">
              <span className="nav-item">Add Your Services</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashBoard;
