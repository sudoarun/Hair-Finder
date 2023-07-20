import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import MobileMenu from "./MobileMenu";
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "../../Firebase/firebase";
// import { useEffect } from "react";

const DashBoard = ({ signInData }) => {
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
    <div className="d-flex gap-2 me-1 vh-100 pt-1 pb-1">
      <Sidebar />

      <div className="w-100 position-relative">
        <Outlet />
      </div>
      <div className="position-fixed w-100 bottom-0 mb-2 responsiveMenu">
        <MobileMenu />
      </div>
    </div>
  );
};

export default DashBoard;
