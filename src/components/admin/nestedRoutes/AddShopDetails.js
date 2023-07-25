import React, { useState } from "react";
import noImage from "../../../assets/noImage.jpg";
import ServicesList from "./Service component/ServicesList";
const AddShopDetails = () => {
  const [state, setState] = useState("");
  const services = "s";
  const ImageHandler = (e) => {
    // const file = e.target.files;
    return setState(URL.createObjectURL(e.target.files[0]));
    // console.log(file);
  };
  // console.log(state);
  return (
    <div className="bg-white p-2 h-sm-100">
      <div className="pt-3 overflow-auto mb-3 pb-5">
        <h2 className="text-center pb-3">
          <span className="border border-dark ps-2 py-2">
            Add{" "}
            <span className="text-white bg-black ps-1 pe-2 py-2">Services</span>
          </span>
        </h2>
        <div className="row align-items-center">
          <div className="col-12 col-sm-6 col-md-5 mb-3">
            <div className="position-relative">
              <label
                htmlFor="addServiceImg"
                id=""
                className="material-icons-outlined position-absolute bg-white text-black p-2 rounded-circle shadow bottom-0"
              >
                add_a_photo
              </label>
              <img
                src={state ? state : noImage}
                alt=""
                className="w-100 rounded shadow"
                height={250}
              />
              <input
                id="addServiceImg"
                type="file"
                alt=""
                className="border d-none"
                placeholder="Select image"
                onChange={ImageHandler}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-7">
            <div>
              <input
                placeholder="Enter Service Name"
                className="form-control"
              />
              <input
                placeholder="Enter Price"
                type="number"
                className="form-control mt-2"
              />
              <textarea
                placeholder="Enter description"
                className="form-control mt-2"
              />
              <button className="py-2 bg-warning px-4 border-0 text-white rounded mt-2 shadow ripple">
                Add Service
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h5>
            Recently{" "}
            <span className="text-decoration-custom">added services</span>
          </h5>
          <div className="mt-4 pb-3 overflow-auto" style={{ height: "200px" }}>
            {services ? (
              <div>
                <ServicesList noImage={noImage} />
                <ServicesList noImage={noImage} />
                <ServicesList noImage={noImage} />
                <ServicesList noImage={noImage} />
                <ServicesList noImage={noImage} />
              </div>
            ) : (
              <div>
                <h5>No Services Added Yet</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddShopDetails;
