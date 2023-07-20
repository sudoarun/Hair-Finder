import React, { useEffect, useState } from "react";
import Time from "../../../bookingTime/bookingTime";
const url =
  "https://img.freepik.com/premium-vector/fist-with-lbtbi-wristband_24908-77160.jpg?size=626&ext=jpg";
const ProfessionalProfile = () => {
  const FilterTime = () => {
    const SortTime = Time.filter((data) => data.shift === "AM");
    console.log(SortTime);
  };
  const [profileIMG, setProfileIMG] = useState("");
  const ProfileImgHandle = (e) => {
    if (setProfileIMG === "") {
      alert("Please Select Image");
    }
    return setProfileIMG(URL.createObjectURL(e.target.files[0]));
  };
  useEffect(() => {
    FilterTime();
  }, []);
  return (
    <div className="w-100 bg-white p-3 h-100">
      <div className="d-flex justify-content-center mb-2 position-relative">
        <img
          alt="#"
          src={profileIMG || url}
          className="rounded-circle"
          width={150}
          height={150}
        />
        <label
          htmlFor="img"
          id="imgUpdate"
          className="material-icons-outlined position-absolute bg-white p-2 rounded-circle shadow bottom-0 start-50"
        >
          add_a_photo
        </label>
        <input
          type="file"
          className="d-none"
          onChange={ProfileImgHandle}
          id="img"
        />
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
            Shop Timing<span className="text-danger">*</span>
          </label>
          <div className="d-flex">
            <select className="form-select" aria-label="Default select example">
              {Time.filter((data) => data.shift === "AM").map((sortTime) => (
                <option key={sortTime.time}>
                  <span>{sortTime.time} </span>
                  <span>{sortTime.shift}</span>
                </option>
              ))}
            </select>
            <select
              className="form-select ms-2"
              aria-label="Default select example"
            >
              {Time.filter((data) => data.shift === "PM").map((sortTime) => (
                <option key={sortTime.time}>
                  <span>{sortTime.time} </span>
                  <span>{sortTime.shift}</span>
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-12 mt-4 d-flex justify-content-center align-items-end">
          <button className="bg-warning py-2 border-0 text-white rounded  w-50">
            Submit Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
