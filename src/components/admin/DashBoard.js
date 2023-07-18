import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Professional from "./ProfessionalSchedule";
import ProfessionalProfile from "./Profile";
import AddShopDetails from "./AddShopDetails";
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "../../Firebase/firebase";
// import { useEffect } from "react";

const DashBoard = ({ signInData }) => {
  const [Profile, setProfile] = useState(true);
  const [Schedule, setSchedule] = useState(false);
  const [service, setService] = useState(false);
  // const [data, setData] = useState([]);
  // const docRef = doc(db, "ProfessionalDB", `${signInData.uid}`);
  // const saveProfessionalData = async () => {
  //   await setDoc(docRef, {
  //     name: "Arun",
  //   }).then(() => alert("data Added"));
  // };
  // useEffect(() => {
  //   saveProfessionalData();
  // }, []);
  // console.log(signInData);
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
