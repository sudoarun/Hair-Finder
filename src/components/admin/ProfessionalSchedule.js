import React from "react";
import "./style.css";
// import Breadcrumb from "../BreadCrumbs/Breadcrumb.js";

const Professional = () => {
  return (
    <div className="w-100  ">
      {/* <div className="container">
        <Breadcrumb activePage={"Professional"} text={"white"} />
      </div> */}
      {/* <h5 className="text-white text-center">
        <span className="py-2 ps-2 border">
          Your{" "}
          <span className="py-2 pe-2 bg-white text-black text-decoration-underline ps-1">
            Schedules
          </span>
        </span>
      </h5> */}
      <section className="">
        <div className="container">
          <div>
            <div
              id="main"
              className=" border py-2 px-3 position-relative vh-85 overflow-auto"
            >
              <h6 className="text-white position-absolute start-2">
                <span className="bg-white text-black px-2 py-2">
                  Your
                  <span className="text-decoration-underline ms-1">
                    Schedules
                  </span>
                </span>
              </h6>
              <div
                id="schedule"
                className="text-white row mt-5 align-items-center border-bottom pb-2"
              >
                <div className="col-6  col-sm-2">
                  <h6>Vinod Kumar</h6>
                </div>

                <div className="col-0 col-sm-4">
                  <span className="me-4">Shaving</span>
                </div>
                <div className="col-8  col-sm-4">
                  <span>12:00pm - 23 april</span>
                </div>
                <div id="clientActions" className="col-4 col-sm-2 px-0">
                  <span className="material-icons-outlined bg-success rounded-circle px-2 py-2 me-3">
                    call
                  </span>
                  <span className="material-icons-outlined bg-danger rounded px-2 py-2">
                    close
                  </span>
                </div>
              </div>
              <div
                id="schedule"
                className="text-white row mt-5 align-items-center border-bottom pb-2"
              >
                <div className="col-6 col-sm-2">
                  <h6>Vinod Kumar</h6>
                </div>

                <div className="col-0 col-sm-4">
                  <span className="me-4">Shaving</span>
                </div>
                <div className="col-8 col-sm-4">
                  <span>12:00pm - 23 april</span>
                </div>
                <div id="clientActions" className="col-4 col-sm-2 px-0">
                  <span className="material-icons-outlined bg-success rounded-circle px-2 py-2 me-3">
                    call
                  </span>
                  <span className="material-icons-outlined bg-danger rounded px-2 py-2">
                    close
                  </span>
                </div>
              </div>
              <div
                id="schedule"
                className="text-white row mt-5 align-items-center border-bottom pb-2"
              >
                <div className="col-6 col-sm-2">
                  <h6>Vinod Kumar</h6>
                </div>

                <div className="col-0 col-sm-4">
                  <span className="me-4">Shaving</span>
                </div>
                <div className="col-8 col-sm-4">
                  <span>12:00pm - 23 april</span>
                </div>
                <div id="clientActions" className="col-4 col-sm-2 px-0">
                  <span className="material-icons-outlined bg-success rounded-circle px-2 py-2 me-3">
                    call
                  </span>
                  <span className="material-icons-outlined bg-danger rounded px-2 py-2">
                    close
                  </span>
                </div>
              </div>
              <div
                id="schedule"
                className="text-white row mt-5 align-items-center border-bottom pb-2"
              >
                <div className="col-6 col-sm-2">
                  <h6>Vinod Kumar</h6>
                </div>

                <div className="col-0 col-sm-4">
                  <span className="me-4">Shaving</span>
                </div>
                <div className="col-8 col-sm-4">
                  <span>12:00pm - 23 april</span>
                </div>
                <div id="clientActions" className="col-4 col-sm-2 px-0">
                  <span className="material-icons-outlined bg-success rounded-circle px-2 py-2 me-3">
                    call
                  </span>
                  <span className="material-icons-outlined bg-danger rounded px-2 py-2">
                    close
                  </span>
                </div>
              </div>
              <div
                id="schedule"
                className="text-white row mt-5 align-items-center border-bottom pb-2"
              >
                <div className="col-6 col-sm-2">
                  <h6>Vinod Kumar</h6>
                </div>

                <div className="col-0 col-sm-4">
                  <span className="me-4">Shaving</span>
                </div>
                <div className="col-8 col-sm-4">
                  <span>12:00pm - 23 april</span>
                </div>
                <div id="clientActions" className="col-4 col-sm-2 px-0">
                  <span className="material-icons-outlined bg-success rounded-circle px-2 py-2 me-3">
                    call
                  </span>
                  <span className="material-icons-outlined bg-danger rounded px-2 py-2">
                    close
                  </span>
                </div>
              </div>
              <div
                id="schedule"
                className="text-white row mt-5 align-items-center border-bottom pb-2"
              >
                <div className="col-6 col-sm-2">
                  <h6>Vinod Kumar</h6>
                </div>

                <div className="col-0 col-sm-4">
                  <span className="me-4">Shaving</span>
                </div>
                <div className="col-8 col-sm-4">
                  <span>12:00pm - 23 april</span>
                </div>
                <div id="clientActions" className="col-4 col-sm-2 px-0">
                  <span className="material-icons-outlined bg-success rounded-circle px-2 py-2 me-3">
                    call
                  </span>
                  <span className="material-icons-outlined bg-danger rounded px-2 py-2">
                    close
                  </span>
                </div>
              </div>
              <div
                id="schedule"
                className="text-white row mt-5 align-items-center border-bottom pb-2"
              >
                <div className="col-6 col-sm-2">
                  <h6>Vinod Kumar</h6>
                </div>

                <div className="col-0 col-sm-4">
                  <span className="me-4">Shaving</span>
                </div>
                <div className="col-8 col-sm-4">
                  <span>12:00pm - 23 april</span>
                </div>
                <div id="clientActions" className="col-4 col-sm-2 px-0">
                  <span className="material-icons-outlined bg-success rounded-circle px-2 py-2 me-3">
                    call
                  </span>
                  <span className="material-icons-outlined bg-danger rounded px-2 py-2">
                    close
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Professional;
