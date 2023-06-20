import React from "react";
// import LoginPage from "../Loginpage/Loginpage";

const BarberRegister = () => {
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
                <span class="material-icons-outlined">close</span>
              </button>
            </div>
            <div className="modal-body">
              <ul
                class="nav nav-pills nav-justified mb-3"
                id="ex1"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link rounded-0 text-black"
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
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active rounded-0 text-black"
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

              <div class="tab-content">
                <div
                  class="tab-pane fade "
                  id="pills-login"
                  role="tabpanel"
                  aria-labelledby="tab-login"
                >
                  <form>
                    <input
                      type="email"
                      id="loginName"
                      placeholder="Enter Email"
                      class="form-control bg-black text-white"
                    />

                    <input
                      type="password"
                      placeholder="Enter Password"
                      id="loginPassword"
                      class="form-control text-white bg-black mt-4"
                    />
                    <div class="row mb-4">
                      <div class="col-md-12 mt-2 d-flex justify-content-center">
                        <a href="#!">Forgot password?</a>
                      </div>
                    </div>

                    <button
                      type="submit"
                      class="btn btn-warning btn-block mb-4"
                    >
                      Sign in
                    </button>
                  </form>
                </div>
                <div
                  class="tab-pane fade show active"
                  id="pills-register"
                  role="tabpanel"
                  aria-labelledby="tab-register"
                >
                  <form>
                    <input
                      type="text"
                      id="registerName"
                      placeholder="Enter Name"
                      class="form-control border bg-black mt-3 text-white"
                    />

                    <input
                      placeholder="Enter Number"
                      type="number"
                      id="registerUsername"
                      class="form-control border bg-black mt-3 text-white"
                    />

                    <input
                      type="email"
                      placeholder="Enter Email"
                      id="registerEmail"
                      class="form-control border bg-black mt-3 text-white"
                    />

                    <input
                      type="password"
                      placeholder="Enter Password"
                      id="registerPassword"
                      class="form-control border bg-black mt-3 text-white"
                    />

                    <div class="form-check d-flex justify-content-center mb-4 mt-2">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="registerCheck"
                        checked
                        aria-describedby="registerCheckHelpText"
                      />
                      <label class="form-check-label" for="registerCheck">
                        I have read and agree to the terms
                      </label>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-warning btn-block mb-3"
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
