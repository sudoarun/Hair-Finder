import React from "react";
import StyleCard from "./StyleCard";
import Breadcrumb from "../BreadCrumbs/Breadcrumb";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { useEffect } from "react";
import { useState } from "react";

const ShopDetail = () => {
  const { id } = useParams();
  const [shopDetails, setShopdetails] = useState("");
  // console.log(id);
  const getSaloon = async () => {
    await getDoc(doc(db, "ProfessionalDB", `${id}`)).then((res) =>
      setShopdetails(res.data())
    );
  };
  useEffect(() => {
    getSaloon();
  }, []);
  console.log(shopDetails);
  return (
    <div className="container">
      <div className="mt-3">
        <Breadcrumb path="Shop Details" activePage={"Shop"} text="white" />
      </div>
      <h3 className="text-white text-center">
        <span className=" border  py-2 ps-4">
          Shop <span className="bg-white text-black py-2 pe-4">Details</span>
        </span>
      </h3>
      <div className="mt-5">
        <div className="d-flex justify-content-between align-items-center">
          <div className="w-50">
            <img
              alt=""
              src="https://img.freepik.com/premium-photo/beauty-saloon-eyebrow-care_524291-978.jpg?size=626&ext=jpg&ga=GA1.2.1543915203.1685795707&semt=ais"
              className="w-100"
            />
          </div>
          <div className="w-50 ms-3">
            <div className="text-white">
              <span className="d-block">Shop Name</span>
              <span className="d-block">Timing: 10am - 9pm</span>
              <span className="d-block">Owner contact Number</span>
              <span className="d-block">Shop Rating</span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white mb-3">
            Services by{" "}
            <span className="text-decoration-underline">Professional</span>
          </h3>
          <div className="row">
            <div className="col-6 col-sm-3 mt-2">
              <div className=" ">
                <StyleCard price={120} book="/booking" />
              </div>
            </div>
            <div className="col-6 col-sm-3 mt-2">
              <div className=" ">
                <StyleCard price={250} book="/booking" />
              </div>
            </div>
            <div className="col-6 col-sm-3 mt-2">
              <div className="">
                <StyleCard price={430} book="/booking" />
              </div>
            </div>
            <div className="col-6 col-sm-3 mt-2">
              <div className="">
                <StyleCard price={299} book="/booking" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h4 className="text-white text-center">
          Free Offers are you{" "}
          <span className="text-decoration-underline">eligible</span> ?
        </h4>
        <div className="mt-4 mb-3">
          <div className="">
            <h6 className="text-white text-center">
              No Offers{" "}
              <span className="text-decoration-underline">Currently</span> !!!
              <span className="text-warning fw-bold fs-2">☺</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;
