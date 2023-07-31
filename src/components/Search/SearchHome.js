import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  professionalLogIn,
  professionalLogOut,
} from "../../Redux/Slices/professionalRedux";

const SearchHome = () => {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate("search");
  };
  const dispatch = useDispatch();
  const ispro = useSelector((state) => state.isPro);
  console.log(ispro);
  const handleLogin = () => {
    dispatch(professionalLogIn());
  };

  const handleLogout = () => {
    dispatch(professionalLogOut());
  };
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
      <div>
        <h6 className="text-white">{ispro.isProfessional.toString()}</h6>
        <button onClick={handleLogin}>true</button>
        <button onClick={handleLogout}>false</button>
      </div>
      <div className="d-flex justify-content-center mt-5">
        {/* <form> */}
        <div className=" border responsiveSearchHome bg-white">
          <form className="align-items-center d-flex">
            <input
              placeholder="Search Your Service..."
              type="search"
              id="HomeSearch"
              className="text- w-100 border-0 ms-2 me-2 py-3"
            />
            <button
              className="material-icons bg-black text-white py-3 px-3 border-0"
              type="submit"
              onClick={handleSearch}
            >
              search
            </button>
          </form>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default SearchHome;
