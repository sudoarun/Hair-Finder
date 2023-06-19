import React from "react";
import { Link } from "react-router-dom";

const SearchContent = ({ shop, btn }) => {
  const ShopImg =
    "https://img.freepik.com/premium-vector/vintage-art-illustration-man-getting-his-hair-cut_697324-8454.jpg?size=626&ext=jpg&ga=GA1.1.1543915203.1685795707&semt=sph";
  return (
    <div className="row pb-3 mt-3 border-bottom border-secondary">
      <div className="col-4 col-sm-3">
        <img alt="" src={ShopImg} className="w-100 rounded" />
      </div>
      <div className="col-8 col-sm-6 text-white text-left">
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
        </div>
      </div>
      <div className="d-flex col-12 col-sm-3 align-items-end">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="d-flex justify-content-between text-white">
            <span>Price :-</span>
            <span>399rs</span>
          </div>
          <div>
            {btn ? (
              <button
                className="py-2 px-4 border-0 rounded bg-danger text-white"
                id="cancelbtn"
              >
                Cancel
              </button>
            ) : (
              <Link to={shop} className="py-2 px-4 border bg-black text-white">
                Check Shop
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContent;
