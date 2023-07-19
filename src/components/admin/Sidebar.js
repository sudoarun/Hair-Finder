import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const HandleSign = () => {};
  return (
    <div
      id="sideDiv"
      className="text-white w-25 d-flex justify-content-between flex-column vh-85 border px-2 pb-2"
      style={{ background: "#001C30" }}
    >
      <div id="main" className="">
        <Link
          to={"/dashboard"}
          className="py-2 my-4 ps-2 bg-warning d-flex align-items-center"
        >
          <span className="material-icons-outlined me-2">person</span>
          <span>Profile Page</span>
        </Link>
        <Link
          to={"add-services"}
          className="py-2 my-4 ps-2 bg-warning d-flex align-items-center"
        >
          <span className="material-icons-outlined me-2">design_services</span>
          <span>Add Services</span>
        </Link>
        <Link
          to={"schedules-professional"}
          className="py-2 my-4 ps-2 bg-warning d-flex align-items-center"
        >
          <span className="material-icons-outlined me-2">calendar_month</span>
          <span>Schedules</span>
        </Link>
      </div>
      <div id="footer">
        <div
          className="bg-warning ps-2 py-2 d-flex align-items-center"
          onChange={HandleSign}
        >
          <span className="material-icons-outlined me-2">logout</span>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
