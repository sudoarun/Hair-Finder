import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import BreadCrumb from "../BreadCrumbs/Breadcrumb";
import "react-day-picker/dist/style.css";

const BookShop = () => {
  const [selected, setSelected] = useState(Date);
  let today = new Date();
  let year = today.getFullYear();

  return (
    <div className="">
      <div className="container">
        <BreadCrumb path={"Booking"} />
      </div>
      <h4 className="text-white text-center">Book the Shop</h4>
      <div className=" container mt-5 d-flex justify-content-between align-items-center">
        <div className="text-white">
          <span className="d-block">Shop Name</span>
          <span className="d-block">Service Name</span>
          <span className="d-block">Shop Rating</span>
          <span className="d-block">Shop Time</span>
        </div>
        <div className="text-white ">
          <div
            className="d-flex border p-2 text-center"
            style={{ height: "400px" }}
          >
            <div>
              <h6 className="fw-bold">Pick Your Date</h6>
              <div className="">
                <DayPicker
                  mode="single"
                  required
                  selected={selected}
                  onSelect={setSelected}
                  footer={selected.toString().substring(0, 15)}
                  fromYear={year}
                  fromMonth={today}
                  showOutsideDays
                  fixedWeeks
                  modifiersClassNames={{
                    today: "my-today",
                  }}
                />
              </div>
            </div>
            <div className="h-100">
              <h6 className="fw-bold">Pick Your Time</h6>
              <div className="text-white scheduleTime h-100 mt-5">
                <div className="overflow-auto h-75">
                  <li className="py-2 my-1 px-5">10:00 AM</li>
                  <li className="py-2 my-1 px-5">10:30 AM</li>
                  <li className="py-2 my-1 px-5">11:00 AM</li>
                  <li className="py-2 my-1 px-5">11:30 AM</li>
                  <li className="py-2 my-1 px-5">12:00 AM</li>
                  <li className="py-2 my-1 px-5">12:30 AM</li>
                  <li className="py-2 my-1 px-5">01:00 PM</li>
                  <li className="py-2 my-1 px-5">01:30 PM</li>
                  <li className="py-2 my-1 px-5">02:00 PM</li>
                  <li className="py-2 my-1 px-5">02:30 PM</li>
                  <li className="py-2 my-1 px-5">03:00 PM</li>
                  <li className="py-2 my-1 px-5">03:30 PM</li>
                  <li className="py-2 my-1 px-5">04:00 PM</li>
                  <li className="py-2 my-1 px-5">04:30 PM</li>
                  <li className="py-2 my-1 px-5">05:00 PM</li>
                  <li className="py-2 my-1 px-5">05:30 PM</li>
                  <li className="py-2 my-1 px-5">06:00 PM</li>
                  <li className="py-2 my-1 px-5">06:30 PM</li>
                  <li className="py-2 my-1 px-5">07:00 PM</li>
                  <li className="py-2 my-1 px-5">07:30 PM</li>
                  <li className="py-2 my-1 px-5">08:00 PM</li>
                  <li className="py-2 my-1 px-5">08:30 PM</li>
                  <li className="py-2 my-1 px-5">09:00 PM</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 bg-white">
        <h4 className=" text-center pt-5">
          <span className="border ps-3 py-3 fw-bold">
            Free Services
            <span className="text-white fw-normal bg-black ms-1 ps-1 py-3 pe-3">
              If Eligible
            </span>
          </span>
        </h4>
        <div className="d-flex mt-5">
          <div>
            <img
              src="https://img.freepik.com/premium-vector/hand-drawn-barbershop-illustration_9829-82.jpg?size=626&ext=jpg&ga=GA1.2.1543915203.1685795707&semt=ais"
              alt=""
              className="w-50 border"
            />
          </div>
          <div>
            <div>
              <div>
                <input type="checkbox" id="cbx2" style={{ display: "none" }} />
                <label for="cbx2" class="check">
                  <svg width="30px" height="30px" viewBox="0 0 18 18">
                    <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                  </svg>
                </label>
                <label>Shampoo</label>
                <input type="checkbox" id="cbx2" style={{ display: "none" }} />
                <label for="cbx2" class="check">
                  <svg width="30px" height="30px" viewBox="0 0 18 18">
                    <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                  </svg>
                </label>
                <label>Hair massage</label>
                <input type="checkbox" id="cbx2" style={{ display: "none" }} />
                <label for="cbx2" class="check">
                  <svg width="30px" height="30px" viewBox="0 0 18 18">
                    <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                  </svg>
                </label>
                <label>Face Mask</label>
              </div>
            </div>
          </div>
          <div>
            <h4 className=" text-center ">
              <span className="border ps-3 py-3 fw-bold">
                Paym
                <span className="text-white fw-normal bg-black ms-1 ps-1 py-3 pe-3">
                  ent
                </span>
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookShop;
