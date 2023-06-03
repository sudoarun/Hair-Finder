import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="bg-black text-white py-3">
      <div className="d-flex justify-content-between container align-items-center">
        <div>
          <img src={logo} width={50} alt="profile" />
        </div>
        <div>
          <div className="d-flex list-unstyled fw-bold">
            <li className="me-5 text-decoration-underline">
              Register as Barber
            </li>
            <li className="me-5">My Booking</li>
            <li className="me-5">Help</li>
            <li>Signin</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
