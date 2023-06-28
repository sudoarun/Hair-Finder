import React from "react";

const Sidebar = () => {
  return (
    <div id="sideDiv" className="text-white">
      <div id="main">
        <div>
          <span>Profile Page</span>
        </div>
        <div>
          <span>Add Services</span>
        </div>
        <div>
          <span>Schedules</span>
        </div>
      </div>
      <div id="footer">
        <div>Logout</div>
      </div>
    </div>
  );
};

export default Sidebar;
