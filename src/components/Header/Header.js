import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isToggle, setToggle] = useState(false);
  const menu = () => {
    setToggle(!isToggle);
  };

  console.log(isToggle);
  return (
    <div className="bg-black text-white py-3">
      <div className="d-flex justify-content-between container align-items-center">
        <Link to={"/"}>
          <img src={logo} width={50} alt="profile" />
        </Link>
        <div id="menuToggle" onClick={menu}>
          <input id="checkbox" type="checkbox" />
          <label className="toggle" htmlFor="checkbox">
            <div className="bar bar--top"></div>
            <div className="bar bar--middle"></div>
            <div className="bar bar--bottom"></div>
          </label>
        </div>
        {isToggle ? (
          <div>
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
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
