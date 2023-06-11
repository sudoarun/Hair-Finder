import React from "react";
import BreadCrumbs from "../BreadCrumbs/Breadcrumb";
// import { Link } from "react-router-dom";
import SearchContent from "./SearchContent";

// import { Link } from "react-router-dom";
const SearchShop = () => {
  return (
    <div>
      <div className="bg-white mt-3">
        <div className="container pt-3 pb-5">
          {/* <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/"} className="text-black">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <span>Search Page</span>
            </li>
          </ol> */}

          <BreadCrumbs text="black" path={"Search Page"} link={"search"} />
          <div className="d-flex justify-content-center pt-3">
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
        <div className="container">
          <div className="d-flex justify-content-between text-white mb-3">
            <h6>Search Results ...</h6>
            <span>Filter</span>
          </div>
          <div className="border p-3">
            <SearchContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchShop;
