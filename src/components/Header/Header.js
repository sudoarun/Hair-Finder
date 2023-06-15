import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";
import BarberRegister from "../Pages/BarberRegister";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  console.log(isLoggedIn, setIsLoggedIn);
  const navigate = useNavigate();

  const logInHandle = () => {
    // setIsLoggedIn(true);
    navigate("/login");
    // alert("logged in");
  };
  const logOutHandle = () => {
    setIsLoggedIn(false);
    alert("Logged Out");
  };
  return (
    <div>
      <div>
        <div className="bg-black text-white py-2">
          <div className="d-flex justify-content-between container-fluid px-sm-5 align-items-center">
            <Link to={"/"}>
              <img src={logo} width={50} alt="profile" />
            </Link>
            <div className="d-sm-inline text-center">
              <h6
                to={"/professional-register"}
                className="text-decoration-underline border-0 bg-black text-warning"
                data-mdb-toggle="modal"
                data-mdb-target="#exampleModal"
              >
                Register as Professional
              </h6>
            </div>
            <div className="d-flex">
              <div id="mainMenu">
                <div className="d-flex list-unstyled fw-bold ">
                  <button
                    to={"/professional-register"}
                    className="me-5 text-decoration-underline border-0 bg-black text-warning"
                    data-mdb-toggle="modal"
                    data-mdb-target="#exampleModal"
                  >
                    Register as Professional
                  </button>
                  <Link to={"/schedule"} className="me-5 text-white">
                    My Booking
                  </Link>
                  <Link to={"/help"} className="me-5 text-white">
                    Help
                  </Link>
                  {/* <Link to={"/user"} className="text-white">
                  User
                </Link> */}
                </div>
              </div>
              <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#!"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.2.1543915203.1685795707&semt=ais"
                    className="rounded"
                    height="30"
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
                  {isLoggedIn ? (
                    <li>
                      <button className="dropdown-item" onClick={logOutHandle}>
                        Logout
                      </button>
                    </li>
                  ) : (
                    <li>
                      <button className="dropdown-item" onClick={logInHandle}>
                        Login
                      </button>
                    </li>
                  )}
                </ul>
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
          </div>
        </div>
      </div>
      {/* Professional Registration Modal */}
      <BarberRegister />
    </div>
  );
};

export default Header;
