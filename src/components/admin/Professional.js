import React from "react";
import "./style.css";

const Professional = () => {
  return (
    <div>
      <h5 className="text-white text-center">
        <span className="py-2 ps-2 border">
          Professional{" "}
          <span className="py-2 pe-2 bg-white text-black text-decoration-underline ps-1">
            Panel
          </span>
        </span>
      </h5>
      <section className="mt-5">
        <div className="container">
          <div>
            <div id="main" className="mt-5 border py-2 px-3 position-relative">
              <h6 className="text-white position-absolute start-2 top-0">
                Your Schedules
              </h6>
              <div
                id="schedule"
                className="text-white d-flex justify-content-between align-items-center"
              >
                <div>
                  <h6>Client Name</h6>
                </div>

                <div>
                  <span className="me-4">Service Name</span>
                  <span>Slot Time</span>
                </div>
                <div id="clientActions">
                  <span class="material-icons-outlined bg-success rounded-circle px-2 py-2 me-3">
                    call
                  </span>
                  <span class="material-icons-outlined bg-danger rounded px-2 py-2">
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
