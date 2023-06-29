import React from "react";

const Sidebar = ({
  Profile,
  setProfile,
  Schedule,
  setSchedule,
  service,
  setService,
}) => {
  const ProfilePage = () => {
    Profile ? setProfile(false) : setProfile(true);
    console.log(Profile);
  };
  const AddService = () => {
    service ? setService(false) : setService(true);
    console.log(service);
  };
  const Schedules = () => {
    Schedule ? setSchedule(false) : setSchedule(true);
    console.log(Schedule);
  };
  return (
    <div
      id="sideDiv"
      className="text-white w-25 d-flex justify-content-between flex-column vh-85 border px-2 pb-2"
    >
      <div id="main" className="">
        <div
          className="py-2 my-4 ps-2 bg-warning d-flex align-items-center"
          onClick={ProfilePage}
        >
          <span className="material-icons-outlined me-2">person</span>
          <span>Profile Page</span>
        </div>
        <div
          className="py-2 my-4 ps-2 bg-warning d-flex align-items-center"
          onClick={AddService}
        >
          <span className="material-icons-outlined me-2">design_services</span>
          <span>Add Services</span>
        </div>
        <div
          className="py-2 my-4 ps-2 bg-warning d-flex align-items-center"
          onClick={Schedules}
        >
          <span className="material-icons-outlined me-2">calendar_month</span>
          <span>Schedules</span>
        </div>
      </div>
      <div id="footer">
        <div className="bg-warning ps-2 py-2 d-flex align-items-center">
          <span className="material-icons-outlined me-2">logout</span>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
