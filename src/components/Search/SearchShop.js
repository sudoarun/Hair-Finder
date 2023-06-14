import React from "react";
import BreadCrumbs from "../BreadCrumbs/Breadcrumb";
// import { Link } from "react-router-dom";
import SearchContent from "./SearchContent";

// import { Link } from "react-router-dom";
const SearchShop = () => {
  return (
    <div className="mb-3">
      <div className="bg-white ">
        <div className="container pt-3 pb-5">
          <BreadCrumbs text="black" path={"Search Page"} link={"search"} />
          <div className="d-flex justify-content-center pt-3">
            <input
              placeholder="Search Your Favorite Shop and Service here.."
              type="search"
              id="HomeSearch"
              className="text- bg-white w-75 border border-end-0 border-dark ps-3 pe-3 py-3"
            />
            <span className="material-icons py-3 px-3 bg-black text-white border-dark border border-start-0">
              search
            </span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="container">
          <div className="d-flex justify-content-between text-white mb-3 align-items-center">
            <h6>Search Results ...</h6>
            <div className="d-flex align-items-center">
              <span class="material-icons-outlined">tune</span>
              <span className="ms-2">Filter</span>
            </div>
          </div>
          <div className="border p-3">
            <div className="overflow-auto" style={{ height: "500px" }}>
              <SearchContent shop="/shop" />
              <SearchContent shop="/shop" />
              <SearchContent shop="/shop" />
              <SearchContent shop="/shop" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchShop;
