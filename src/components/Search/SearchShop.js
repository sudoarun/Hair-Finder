import React from "react";
import BreadCrumbs from "../BreadCrumbs/Breadcrumb";

// import { Link } from "react-router-dom";
const SearchShop = () => {
  const ShopImg =
    "https://img.freepik.com/premium-vector/vintage-art-illustration-man-getting-his-hair-cut_697324-8454.jpg?size=626&ext=jpg&ga=GA1.1.1543915203.1685795707&semt=sph";
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
          <div className="row border p-3">
            <div className="col-3">
              <img alt="" src={ShopImg} className="w-100 rounded" />
            </div>
            <div className="col-9 text-white text-left">
              <div className="d-flex justify-content-between">
                <div className="">
                  <div>
                    <h5>Shop Name</h5>
                  </div>
                  <div>
                    <li>Shop Services</li>
                    <li>Shop Timing</li>
                    <li>Other details</li>
                    <li>Shop Timing</li>
                    <li>Rating</li>
                  </div>
                </div>
                <div className="d-flex align-items-end">
                  <div>
                    <div className="d-flex justify-content-between">
                      <span>Price :-</span>
                      <span>399rs</span>
                    </div>
                    <button className="btn btn-danger">Check Shop</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchShop;
