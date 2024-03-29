import React,{useEffect} from "react";
import BreadCrumbs from "../BreadCrumbs/Breadcrumb";
import SearchContent from "./SearchContent";
import { useSelector } from "react-redux";
import Loader from "../Loader/loader";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const SearchShop = () => {
  const shops = useSelector((state) => state.allshops[0]);
  const [search, setSearch] = useState("");
useEffect(()=>{
  window.scrollTo(0, 0);
},[])
  return (
    <div className="mb-3">
      <div className="bg-white ">
        <div className="container pt-3 pb-5">
          <BreadCrumbs text="black" activePage={"Search"} />
          <div className="d-flex justify-content-center align-items-center pt-3">
            {/* <span className="border  py-3 border-dark ps-2 pe-2">
              Detect my location
            </span> */}
            <input
              placeholder="Search Your Favorite Shops..."
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
              <span className="material-icons-outlined">tune</span>
              <span className="ms-2"></span>
            </div>
          </div>
          <div className="border p-3">
            <div className="overflow-auto" style={{ height: "500px" }}>
              {!shops ? (
                <Loader />
              ) : (
                shops
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.shopName.toLowerCase().includes(search);
                  })
                  .map((res) => (
                    <NavLink key={res.id} to={`/shop/${res.id}`}>
                      <SearchContent data={res} />
                    </NavLink>
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchShop;
