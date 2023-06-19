import React from "react";

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
            <h6 className="text-white">Your Schedules</h6>
            <div id="main" className="mt-5 border py-2 px-3">
              <div
                id="schedule"
                className="text-white d-flex justify-content-between align-items-center"
              >
                <h6>Client Name</h6>
                <span>Service Name</span>
                <span>Slot Time</span>
                <button className="btn btn-success">Call</button>
                <button className="btn btn-danger">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Professional;
