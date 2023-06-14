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
            {/* <div id="hamburgerBtn">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
              </label>
            </div> */}
            <div className="dropdown" id="userBtn">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#!"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <Link to={"/user"} className="dropdown-item">
                    My profile
                  </Link>
                </li>
                <li>
                  <Link to={"/schedule"} className="dropdown-item" href="#">
                    Booking
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
