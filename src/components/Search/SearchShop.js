import React from "react";

const SearchShop = () => {
  return (
    <div>
      <div className="bg-white mt-3">
        <div className="container py-5">
          <div className="d-flex justify-content-center">
            <input
              placeholder="Search Your Favorite Shop and Service here.."
              type="search"
              id="HomeSearch"
              className="text- bg-white w-75 border border-end-0 border-dark ps-3 py-3"
            />
            <span className="material-icons py-3 px-3 bg-black text-white border-dark border border-start-0">
              search
            </span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h1>Result section</h1>
      </div>
    </div>
  );
};

export default SearchShop;
