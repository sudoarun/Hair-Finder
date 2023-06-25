import React, { useState } from "react";
// import LoginPage from "../Loginpage/Loginpage";

const BarberRegister = ({ setProfessional }) => {
  const [value, setValue] = useState({
    //State for login
    email: "",
    password: "",
  });
  const [regValue, setRegValue] = useState({
    //State for Registration
    username: "",
    number: "",
    email: "",
    password: "",
  });
  const onChangeRegister = (e) => {
    const name = e.target.name; //Function for Register Section
    const value = e.target.value;
    setRegValue((data) => ({ ...data, [name]: value }));
  };
  const onChangeSigin = (e) => {
    const name = e.target.name; //Function for Sigin Section
    const value = e.target.value;
    setValue((data) => {
      return { ...data, [name]: value };
    });
  };
  const OnSubmit = () => {
    setProfessional(true);
    alert("Logged in as Professional");
    console.log(value);
    console.log(regValue);
  };

  return (
    <div>
      {/* <button
        type="button"
        className="btn btn-primary"
        data-mdb-toggle="modal"
        data-mdb-target="#exampleModal"
      >
        Launch demo modal
      </button> */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg ">
          <div className="modal-content rounded-0 border bg-black text-white">
            <div className="modal-header border-0 position-relative">
              <h5 className="modal-title" id="exampleModalLabel">
                <span className="border text-white py-2 ps-3">
                  Professional{" "}
                  <span className="py-2 pe-3 bg-white text-black">Login</span>
                </span>
              </h5>
              <button
                type="button"
                className="text-white btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              >
                <span className="material-icons-outlined">close</span>
              </button>
            </div>
            <div className="modal-body">
              <ul
                className="nav nav-pills nav-justified mb-3"
                id="ex1"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link rounded-0 text-black"
                    id="tab-login"
                    data-mdb-toggle="pill"
                    href="#pills-login"
                    role="tab"
                    aria-controls="pills-login"
                    aria-selected="false"
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active rounded-0 text-black"
                    id="tab-register"
                    data-mdb-toggle="pill"
                    href="#pills-register"
                    role="tab"
                    aria-controls="pills-register"
                    aria-selected="true"
                  >
                    Register
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div
                  className="tab-pane fade "
                  id="pills-login"
                  role="tabpanel"
                  aria-labelledby="tab-login"
                >
                  <form>
                    <input
                      type="email"
                      id="loginName"
                      required
                      onChange={onChangeSigin}
                      name="email"
                      placeholder="Enter Email"
                      className="form-control bg-black text-white"
                    />

                    <input
                      type="password"
                      placeholder="Enter Password"
                      id="loginPassword"
                      onChange={onChangeSigin}
                      name="password"
                      required
                      className="form-control text-white bg-black mt-4"
                    />
                    <div className="row mb-4">
                      <div className="col-md-12 mt-2 d-flex justify-content-center">
                        <a href="#!">Forgot password?</a>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-warning btn-block mb-4"
                      onClick={() => OnSubmit}
                    >
                      Sign in
                    </button>
                  </form>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="pills-register"
                  role="tabpanel"
                  aria-labelledby="tab-register"
                >
                  <form>
                    <input
                      type="text"
                      id="registerName"
                      name="username"
                      onChange={onChangeRegister}
                      placeholder="Enter Name"
                      className="form-control border bg-black mt-3 text-white"
                    />

                    <input
                      placeholder="Enter Number"
                      type="number"
                      name="number"
                      onChange={onChangeRegister}
                      id="registerUsername"
                      className="form-control border bg-black mt-3 text-white"
                    />

                    <input
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      onChange={onChangeRegister}
                      id="registerEmail"
                      className="form-control border bg-black mt-3 text-white"
                    />

                    <input
                      type="password"
                      name="password"
                      onChange={onChangeRegister}
                      placeholder="Enter Password"
                      id="registerPassword"
                      className="form-control border bg-black mt-3 text-white"
                    />

                    <div className="form-check d-flex justify-content-center mb-4 mt-2">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="registerCheck"
                        defaultChecked
                        aria-describedby="registerCheckHelpText"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="registerCheck"
                      >
                        I have read and agree to the terms
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-warning btn-block mb-3"
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarberRegister;
