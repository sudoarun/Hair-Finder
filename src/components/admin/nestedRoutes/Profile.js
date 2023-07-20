import React from "react";
const url =
  "https://img.freepik.com/premium-vector/fist-with-lbtbi-wristband_24908-77160.jpg?size=626&ext=jpg";
const ProfessionalProfile = () => {
  return (
    <div className="w-100 bg-white p-3 h-100">
      <div className="d-flex justify-content-center mb-2">
        <img alt="#" src={url} className="rounded-circle" width={200} />
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 mt-2">
          <label>
            Professional Name<span className="text-danger">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter name"
            className="form-control"
          />
        </div>
        <div className="col-12 col-sm-6 mt-2">
          <label>
            Mobile Number<span className="text-danger">*</span>
          </label>
          <input
            type="number"
            maxLength={10}
            placeholder="+91"
            className="form-control"
          />
        </div>
        <div className="col-12 col-sm-6 mt-2">
          <label>
            Email ID<span className="text-danger">*</span>
          </label>
          <input type="email" placeholder="email id" className="form-control" />
        </div>
        <div className="col-12 col-sm-6 mt-2">
          <label>
            Shop Name<span className="text-danger">*</span>
          </label>
          <input type="text" placeholder="shop name" className="form-control" />
        </div>
        <div className="col-12 col-sm-6 mt-2">
          <label>
            Shop Address<span className="text-danger">*</span>
          </label>
          <input
            type="text"
            placeholder="shop address"
            className="form-control"
          />
        </div>
        <div className="col-12 col-sm-6 mt-2">
          <label>
            Shop Timing<span className="text-danger">*</span>{" "}
            <span className="fs-7 ms-2">
              Note :-{" "}
              <span className="text-secondary">
                Default Time is 9:00AM - 9:00PM
              </span>
            </span>
          </label>
          <div className="d-flex">
            <input
              type="time"
              placeholder=""
              value={"09:00AM"}
              className="form-control"
            />
            <input
              type="time"
              placeholder="shop Time"
              className="form-control"
            />
          </div>
        </div>
        <div className="col-12 col-sm-6 mt-2 d-flex align-items-end">
          <button className="bg-warning py-2 border-0 text-white rounded  w-100">
            Submit Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
