import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import BreadCrumb from "../BreadCrumbs/Breadcrumb";
import "react-day-picker/dist/style.css";

const BookShop = () => {
  const [selected, setSelected] = useState(Date);
  return (
    <div className="container">
      <BreadCrumb path={"Booking"} />
      <h4 className="text-white text-center">Book the Shop</h4>
      <div className="mt-5 d-flex justify-content-between align-items-center">
        <div className="text-white">
          <span className="d-block">Shop Name</span>
          <span className="d-block">Service Name</span>
          <span className="d-block">Shop Rating</span>
          <span className="d-block">Shop Time</span>
        </div>
        <div className="text-white ">
          <h6>Pick Your Date</h6>
          <div className="border p-2">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </div>
        </div>
        <div className="text-white">
          <h6>Pick Your Time</h6>
          <div>
            <li>11:00 AM</li>
            <li>11:00 AM</li>
            <li>11:00 AM</li>
            <li>11:00 AM</li>
            <li>11:00 AM</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookShop;
