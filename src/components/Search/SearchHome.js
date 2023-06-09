import React from "react";

const SearchHome = () => {
  return (
    <div className="mt-5 mb-5">
      <div>
        <h4 className="text-center">
          <span className="py-2 ps-2 text-white border">
            Services{" "}
            <span className="pe-2 py-2 bg-white text-black">on demand</span>
          </span>
        </h4>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="align-items-center d-flex border w-50 bg-white">
          <input
            placeholder="Search Your Service..."
            type="search"
            id="HomeSearch"
            className="text- w-100 border-0 ms-2 py-3"
          />
          <span className="material-icons bg-black text-white py-3 px-3">
            search
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchHome;
