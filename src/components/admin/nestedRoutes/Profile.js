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
          <input
            type="text"
            placeholder="Professional Name"
            className="form-control"
          />
        </div>
        <div className="col-12 col-sm-6 mt-2">
          <input
            type="text"
            placeholder="Mobile Number"
            className="form-control"
          />
        </div>
        <div className="col-12 col-sm-6 mt-2">
          <input type="text" placeholder="Shop Name" className="form-control" />
        </div>
        <div className="col-12 col-sm-6 mt-2">
          <input
            type="text"
            placeholder="Shop Address"
            className="form-control"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
