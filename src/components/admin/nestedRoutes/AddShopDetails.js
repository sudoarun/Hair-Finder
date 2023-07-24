import React, { useState } from "react";
// import img from "../../../assets/noImage.png";
const AddShopDetails = () => {
  const [state, setState] = useState("");
  const noImage =
    "https://img.freepik.com/premium-vector/fist-with-lbtbi-wristband_24908-77160.jpg?size=626&ext=jpg";
  const ImageHandler = (e) => {
    // const file = e.target.files;
    return setState(URL.createObjectURL(e.target.files[0]));
    // console.log(file);
  };
  // console.log(state);
  return (
    <div className="bg-white p-3 h-100">
      <div className="pt-4">
        <h2 className="text-center pb-3">
          <span className="border border-dark ps-2 py-2">
            Add{" "}
            <span className="text-white bg-black ps-1 pe-2 py-2">Services</span>
          </span>
        </h2>
        <div className="row align-items-center">
          <div className="col-12 col-sm-6 col-md-6 mb-3">
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
          <div className="col-12 col-sm-6 col-md-6">
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

        {/* {state.length === 0 ? (
          <h1 className="text-black">Nothing</h1>
        ) : (
          (console.log(state),
          state.map((images, i) => <img src={images[0]} key={i + 1} alt="" />))
        )} */}
        <div className="mt-4">
          <h5>
            Recently <span className="text-decoration-custom">added </span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AddShopDetails;
