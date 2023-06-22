import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";
import BarberRegister from "../Pages/BarberRegister";

const Header = ({
  isLoggedIn,
  setIsLoggedIn,
  isProfessional,
  setProfessional,
}) => {
  console.log(isLoggedIn, setIsLoggedIn);
  // const navigate = useNavigate();

  // const logInHandle = () => {
  //   // setIsLoggedIn(true);
  //   navigate("/login");
  //   // alert("logged in");
  // };

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
            {isProfessional ? ( //condition when Professional log in
              ""
            ) : (   //condition when user log in
              <div className="d-sm-none text-center">
                <h6
                  to={"/professional-register"}
                  className="text-decoration-underline border-0 bg-black fw-bold text-warning"
                  data-mdb-toggle="modal"
                  data-mdb-target="#exampleModal"
                >
                  Register as Professional
                </h6>
              </div>
            )}

            <div className="d-flex">
              <div id="mainMenu">
                <div className="d-flex list-unstyled fw-bold ">
                  {isProfessional ? (
                    ""
                  ) : (
                    <button
                      to={"/professional-register"}
                      className="me-5 text-decoration-underline border-0 fw-bold bg-black text-warning"
                      data-mdb-toggle="modal"
                      data-mdb-target="#exampleModal"
                    >
                      Register as Professional
                    </button>
                  )}

                  {isLoggedIn ? (
                    <Link to={"/schedule"} className="me-5 text-white">
                      My Booking
                    </Link>
                  ) : isProfessional ? (
                    <Link to={"/dashboard"} className="me-5 text-white">
                      Dashboard
                    </Link>
                  ) : (
                    ""
                  )}

                  <Link to={"/help"} className="me-5 text-white">
                    Help
                  </Link>
                  {/* <Link to={"/user"} className="text-white">
                  User
                </Link> */}
                </div>
              </div>
              {isLoggedIn || isProfessional ? (
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
                      {isLoggedIn ? (
                        <Link
                          to={"/schedule"}
                          className="dropdown-item"
                          href="#"
                        >
                          Booking
                        </Link>
                      ) : isProfessional ? (
                        <Link
                          to={"/dashboard"}
                          className="dropdown-item"
                          href="#"
                        >
                          Dashboard
                        </Link>
                      ) : (
                        ""
                      )}
                    </li>
                    {isLoggedIn ? (
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={logOutHandle}
                        >
                          Logout
                        </button>
                      </li>
                    ) : isProfessional ? (
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() =>
                            setProfessional(false) ||
                            alert("Professional Logout !!!")
                          }
                        >
                          Logout
                        </button>
                      </li>
                    ) : (
                      <li>
                        <NavLink to={"/login"} className="dropdown-item">
                          Login
                        </NavLink>
                      </li>
                    )}
                  </ul>
                </div>
              ) : (
                <div>
                  <NavLink
                    to={"/login"}
                    className="fw-bold border-0 bg-black text-white"
                    //onClick={() => setIsLoggedIn(true)}
                  >
                    Login
                  </NavLink>
                </div>
              )}
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
      <BarberRegister setProfessional={setProfessional} />
    </div>
  );
};

export default Header;
