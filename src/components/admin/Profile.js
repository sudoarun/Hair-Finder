import React from "react";
const url =
  "https://img.freepik.com/premium-vector/fist-with-lbtbi-wristband_24908-77160.jpg?size=626&ext=jpg";
const Profile = () => {
  return (
    <div className="w-85 bg-white p-3 d-flex">
      <div>
        <img alt="#" src={url} width="200" />
      </div>
      <div className="row">
        <div className="col-4">
          <input type="text" placeholder="Shop Name" className="form-control" />
        </div>
        <div className="col-4">
          <input type="text" placeholder="Shop Name" className="form-control" />
        </div>
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              placeholder="Shop Name"
              className="form-control"
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              placeholder="Shop Name"
              className="form-control"
            />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Shop Name"
              className="form-control"
            />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Shop Name"
              className="form-control"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
