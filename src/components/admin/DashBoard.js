import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Professional from "./ProfessionalSchedule";
import ProfessionalProfile from "./Profile";

const DashBoard = () => {
  const [Profile, setProfile] = useState(false);
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
      <div>
        <ProfessionalProfile />
      </div>
      <div>
        <Professional />
      </div>
    </div>
  );
};

export default DashBoard;
