import React from "react";
import Sidebar from "./Sidebar";
// import Profile from "./Profile";
import Professional from "./ProfessionalSchedule";

const DashBoard = () => {
  return (
    <div className="d-flex gap-4">
      <Sidebar />
      {/* <Profile /> */}
      <Professional />
    </div>
  );
};

export default DashBoard;
