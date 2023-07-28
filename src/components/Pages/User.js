import React from "react";
import "./User.css";
import Slider from "react-slick";
import { Rate } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";

const User = () => {
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [value, setValue] = useState(5);
  const getState = useSelector((state) => state);
  console.log(getState);
  const Slide = {
    infinite: false,
    arrows: false,
    speed: 500,
    useTransform: true,
    slidesToShow: 3.2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3.2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2.5,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.3,
          arrows: false,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <div className="container mb-5">
        <h3 className="text-center text-white mt-3 mb-3">
          <span className="border py-2 ps-3">
            Profile <span className="py-2 pe-3 bg-white text-black">Page</span>
          </span>
        </h3>
        <div className="profile-page">
          <div className="row">
            <div className="col-4 col-sm-3">
              <img
                src="https://img.freepik.com/premium-vector/realistic-sunbed-illustration_23-2149443982.jpg?size=626&ext=jpg"
                alt=""
                className="w-100 w-sm-50"
              />
            </div>

            <div className="col-8 col-sm-9">
              <div className="text-white">
                <h3>Name : User name </h3>
                <p>Mobile : 9993335555</p>
                <p>Email : yourmail@gmail.com</p>
                <p>Age : 25</p>
                <p>Location : India </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black mb-4 mt-5">
        <div className=" container">
          <h4 className="text-center text-white mt-4 mb-5">
            <span className="border py-2 pe-2">
              <span className="py-2 px-2 bg-white text-black">Shops</span> You{" "}
              <span className="text-decoration-underline">Visited Before</span>
            </span>
          </h4>
          <div className="">
            <Slider {...Slide}>
              <div className="">
                <img
                  src="https://img.freepik.com/premium-vector/vintage-logo-barber-shop-vector-illustration_831416-112.jpg?size=626&ext=jpg&ga=GA1.1.1107865039.1686587964&semt=sph"
                  alt=""
                  className="w-75"
                ></img>
                <div className="">
                  <div className="">
                    <Rate tooltips={desc} onChange={setValue} value={value} />
                  </div>
                </div>
              </div>
              <div className="">
                <img
                  src="https://img.freepik.com/premium-vector/vintage-logo-barber-shop-vector-illustration_831416-112.jpg?size=626&ext=jpg&ga=GA1.1.1107865039.1686587964&semt=sph"
                  alt=""
                  className="w-75"
                ></img>
                <div className="">
                  <div className="">
                    <Rate tooltips={desc} onChange={setValue} value={value} />
                  </div>
                </div>
              </div>
              <div className="">
                <img
                  src="https://img.freepik.com/premium-vector/vintage-logo-barber-shop-vector-illustration_831416-112.jpg?size=626&ext=jpg&ga=GA1.1.1107865039.1686587964&semt=sph"
                  alt=""
                  className="w-75"
                ></img>
                <div className="">
                  <div className="">
                    <Rate tooltips={desc} onChange={setValue} value={value} />
                  </div>
                </div>
              </div>
              <div className="">
                <img
                  src="https://img.freepik.com/premium-vector/vintage-logo-barber-shop-vector-illustration_831416-112.jpg?size=626&ext=jpg&ga=GA1.1.1107865039.1686587964&semt=sph"
                  alt=""
                  className="w-75"
                ></img>
                <div className="">
                  <div className="">
                    <Rate tooltips={desc} onChange={setValue} value={value} />
                  </div>
                </div>
              </div>
              <div className="">
                <img
                  src="https://img.freepik.com/premium-vector/vintage-logo-barber-shop-vector-illustration_831416-112.jpg?size=626&ext=jpg&ga=GA1.1.1107865039.1686587964&semt=sph"
                  alt=""
                  className="w-75"
                ></img>
                <div className="">
                  <div className="">
                    <Rate tooltips={desc} onChange={setValue} value={value} />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
