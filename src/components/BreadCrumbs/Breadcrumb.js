import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ path, link }) => {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb text-white">
          <li className="breadcrumb-item">
            <Link to={"/"} className="text-white">
              Home
            </Link>
          </li>
          {link ? (
            <li
              className="breadcrumb-item active text-secondary"
              aria-current="page"
            >
              <Link to={"/shop"} className="text-white">
                Shop details
              </Link>
            </li>
          ) : (
            <></>
          )}

          <li
            className="breadcrumb-item active text-secondary text-decoration-underline"
            aria-current="page"
          >
            {path}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
