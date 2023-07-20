import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const imgPath =
    "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=626&ext=jpg&ga=GA1.1.1357742209.1688643562&semt=sph";
  const HandleSign = () => {};
  return (
    <div
      id="sideDiv"
      className="text-white w-25 d-flex justify-content-between flex-column h-100 border px-2 pb-2"
      style={{ background: "#001C30" }}
    >
      <div id="main" className="">
        <div className="d-flex justify-content-center mt-2">
          <img alt="" src={imgPath} className="rounded-circle w-50" />
        </div>
        <Link
          to={"/dashboard"}
          className="py-2 my-4 ps-2 bg-warning d-flex align-items-center text-white"
        >
          <span className="material-icons-outlined me-2">person</span>
          <span id="sidebarMenuName">Profile Page</span>
        </Link>
        <Link
          to={"add-services"}
          className="py-2 my-4 ps-2 bg-warning d-flex align-items-center text-white"
        >
          <span className="material-icons-outlined me-2">design_services</span>
          <span id="sidebarMenuName">Add Services</span>
        </Link>
        <Link
          to={"schedules-professional"}
          className="py-2 my-4 ps-2 bg-warning d-flex align-items-center text-white"
        >
          <span className="material-icons-outlined me-2">calendar_month</span>
          <span id="sidebarMenuName">Schedules</span>
        </Link>
      </div>
      <div id="footer">
        <div
          className="bg-warning ps-2 py-2 d-flex align-items-center"
          onChange={HandleSign}
        >
          <span className="material-icons-outlined me-2">logout</span>
          <span id="sidebarMenuName">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
