import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
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
    <div className="d-flex gap-4 vh-100 pt-1 pb-1">
      <Sidebar />

      <div className="w-100 vh-100">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
