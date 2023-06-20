import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import BreadCrumb from "../BreadCrumbs/Breadcrumb";
import "react-day-picker/dist/style.css";
import Slider from "react-slick";

const BookShop = () => {
  const [selected, setSelected] = useState(Date);
  let today = new Date();
  let year = today.getFullYear();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className="">
      <div className="container">
        <BreadCrumb
          prevPage={"Shop"}
          link={"/shop"}
          activePage={"Booking"}
          text="white"
        />
      </div>
      <h4 className="text-white text-center ">
        <span className="border pe-4 py-2">
          <span className="py-2 ps-4 bg-white text-black">Book the</span> Shop
        </span>
      </h4>

      <div className="container">
        <div className="row mt-5  align-items-center">
          <div className="col-12 col-sm-6">
            <div className="text-white">
              <span className="d-block">Shop Name</span>
              <span className="d-block">Service Name</span>
              <span className="d-block">Shop Rating</span>
              <span className="d-block">Shop Time</span>
            </div>
          </div>
          <div className="col-12 col-sm-6 mt-3">
            <div className="text-white ">
              <div
                className="d-flex border justify-content-center p-2 text-center"
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
                <div className="h-100 responsiveTimeSchedule">
                  <h6 className="fw-bold">Pick Your Time</h6>
                  <div className="text-white scheduleTime h-100 mt-5">
                    <div className="overflow-auto h-75">
                      <li className="py-2 my-1 px-5">10:00 AM</li>
                      <li className="py-2 my-1 px-5">10:30 AM</li>
                      <li className="py-2 my-1 px-5">11:00 AM</li>
                      <li className="py-2 my-1 px-5">11:30 AM</li>
                      <li className="py-2 my-1 px-5">12:00 PM</li>
                      <li className="py-2 my-1 px-5">12:30 PM</li>
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
              <div className="container mt-4" id="mobileSchedlueMenu">
                <h6 className="fw-bold text-center mb-3">Pick Your Time</h6>
                <Slider {...settings} className="liStyle">
                  <li className="py-2 my-1 px-5">10:00&nbsp;AM</li>
                  <li className="py-2 my-1 px-5">10:30&nbsp;AM</li>
                  <li className="py-2 my-1 px-5">11:00&nbsp;AM</li>
                  <li className="py-2 my-1 px-5">11:30&nbsp;AM</li>
                  <li className="py-2 my-1 px-5">12:00&nbsp;PM</li>
                  <li className="py-2 my-1 px-5">12:30&nbsp;PM</li>
                  <li className="py-2 my-1 px-5">01:00&nbsp;PM</li>
                  <li className="py-2 my-1 px-5">01:30&nbsp;PM</li>
                  <li className="py-2 my-1 px-5">02:00&nbsp;PM</li>
                  <li className="py-2 my-1 px-5">02:30&nbsp;PM</li>
                  <li className="py-2 my-1 px-5">03:00&nbsp;PM</li>
                  <li className="py-2 my-1 px-5">03:30&nbsp;PM</li>
                  <li className="py-2 my-1 px-5">04:00&nbsp;PM</li>
                  <li className="py-2 my-1 px-5">04:30&nbsp;PM</li>
                  <li className="py-2 my-1 px-5">05:00&nbsp;PM</li>
                  <li className="py-2 my-1 px-5">05:30&nbsp;PM</li>
                  <li className="py-2 my-1 px-5">06:00&nbsp;PM</li>
                  <li className="py-2 my-1 px-5">06:30&nbsp;PM</li>
                  <li className="py-2 my-1 px-5">07:00&nbsp;PM</li>
                  <li className="py-2 my-1 px-5">07:30&nbsp;PM</li>
                  <li className="py-2 my-1 px-5">08:00&nbsp;PM</li>
                  <li className="py-2 my-1 px-5">08:30&nbsp;PM</li>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Payment Section */}
      <div className="mt-5 bg-white container-fluid">
        <h4 className=" text-center pt-4">
          <span className="border ps-3 py-3 fw-bold">
            Payment
            <span className="text-white fw-normal bg-black ms-1 ps-1 py-3 pe-3">
              Section
            </span>
          </span>
        </h4>
        <div className="row mt-5 align-items-center pb-3">
          <div className="col-5 col-sm-4 text-center">
            <div className="w-100">
              <img
                src="https://img.freepik.com/premium-vector/hand-drawn-barbershop-illustration_9829-82.jpg?size=626&ext=jpg&ga=GA1.2.1543915203.1685795707&semt=ais"
                alt=""
                className="w-100"
              />
            </div>
          </div>
          <div className="col-7 col-sm-4 d-flex justify-content-center">
            <div className="w-100">
              <h6 className="fw-bold">Additional Services</h6>
              <div className="d-block pt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Shampoo (80rs)
                </label>
              </div>
              <div className="d-block">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Head Massage (50rs)
                </label>
              </div>
              <div className="d-block">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Face Mask (80rs)
                </label>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4 mt-5 d-flex justify-content-center me-0 overflow-hidden">
            <div className="w-75">
              <h6 className="fw-bold text-center">Services Details</h6>
              <div className="pt-2">
                <div className="d-flex justify-content-between">
                  <span>Total Services :</span>
                  <span>Name of Services</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Book Time :</span>
                  <span>23/05/23 at 12pm</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Total Bill :</span>
                  <span className="fw-bold">3000rs</span>
                </div>
              </div>
              <button className="px-5 py-2 bg-black text-white border-0 mt-3">
                Paynow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookShop;
