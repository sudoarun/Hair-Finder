import React, { useState } from "react";

const AddShopDetails = () => {
  const [state, setState] = useState([]);
  const ImageHandler = (e) => {
    // const file = e.target.files;
    return setState(URL.createObjectURL(e.target.files[0]));
    // console.log(file);
  };
  // console.log(state);
  return (
    <div>
      <h1 className="text-white">Add SHop Details</h1>
      <div className="bg-white">
        <input
          type="file"
          alt=""
          className="border"
          placeholder="Select image"
          onChange={ImageHandler}
        />
        {/* {state.length === 0 ? (
          <h1 className="text-black">Nothing</h1>
        ) : (
          (console.log(state),
          state.map((images, i) => <img src={images[0]} key={i + 1} alt="" />))
        )} */}
        <img src={state} alt="" />
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default AddShopDetails;
