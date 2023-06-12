import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div>
      <div>
        <div className="bg-black text-white py-2">
          <div className="d-flex justify-content-between container-fluid px-sm-5 align-items-center">
            <Link to={"/"}>
              <img src={logo} width={50} alt="profile" />
            </Link>

            <div id="mainMenu">
              <div className="d-flex list-unstyled fw-bold ">
                <Link
                  to={"/professional-register"}
                  className="me-5 text-decoration-underline text-warning"
                >
                  Register as Professional
                </Link>
                <Link to={"/schedule"} className="me-5 text-white">
                  My Booking
                </Link>
                <Link to={"/help"} className="me-5 text-white">
                  Help
                </Link>
                <Link to={"/user"} className="text-white">
                  User
                </Link>
              </div>
            </div>
            <div id="hamburgerBtn">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox" class="toggle">
                <div class="bars" id="bar1"></div>
                <div class="bars" id="bar2"></div>
                <div class="bars" id="bar3"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
