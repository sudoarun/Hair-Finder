import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="bg-black text-white py-3">
      <div className="d-flex justify-content-between container align-items-center">
        <Link to={"/"}>
          <img src={logo} width={50} alt="profile" />
        </Link>
        <div>
          <div className="d-flex list-unstyled fw-bold">
            <Link
              to={"/barber-registration"}
              className="me-5 text-decoration-underline"
            >
              Register as Barber
            </Link>
            <Link to={"/book"} className="me-5">
              My Booking
            </Link>
            <Link to={"/help"} className="me-5">
              Help
            </Link>
            <Link to={"/user"}>User</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
