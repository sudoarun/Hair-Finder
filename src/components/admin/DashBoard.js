import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Professional from "./ProfessionalSchedule";
import ProfessionalProfile from "./Profile";
import AddShopDetails from "./AddShopDetails";

const DashBoard = () => {
  const [Profile, setProfile] = useState(true);
  const [Schedule, setSchedule] = useState(false);
  const [service, setService] = useState(false);
  return (
    <div className="d-flex gap-4">
      <Sidebar
        Profile={Profile}
        setProfile={setProfile}
        Schedule={Schedule}
        setSchedule={setSchedule}
        service={service}
        setService={setService}
      />

      <div className="w-100">
        {Profile ? <ProfessionalProfile /> : ""}
        {Schedule ? <Professional /> : ""}
        {service ? <AddShopDetails /> : ""}
      </div>
    </div>
  );
};

export default DashBoard;
