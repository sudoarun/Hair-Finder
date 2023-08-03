import React, { useEffect } from "react";
import "./User.css";
import Slider from "react-slick";
import { Rate } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import UserDetailModal from "./UserDetailModal";

const User = () => {
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [state, setState] = useState("");
  const [value, setValue] = useState(5);
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userID = useSelector((state) => state.auth[0]);
  const getUserData = async () => {
    await getDoc(doc(db, "UserDB", `${userID.id}`)).then((res) =>
      setState(res.data())
    );
  };
  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(state);

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
          <div className="row ">
            <div className="col-12 col-sm-6 d-flex justify-content-center">
              <img
                src="https://img.freepik.com/premium-vector/realistic-sunbed-illustration_23-2149443982.jpg?size=626&ext=jpg"
                alt=""
                className="w-50 w-sm-50 rounded-circle"
              />
            </div>
            <div className="col-12 col-sm-6">
              <UserDetailModal
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen}
                modalData={modalData}
              />
              <div className="d-flex align-items-center text-white position-relative">
                <span className="material-icons-outlined">person_outline</span>
                <div className="ms-3">
                  <label className="d-block text-secondary">Name</label>
                  <label className="fw-semibold">{state.name}</label>
                </div>
                <span
                  className="material-icons-outlined position-absolute py-2 px-2 bg-warning rounded-circle end-0"
                  id="userEdit"
                  onClick={() =>
                    setIsModalOpen(true) ||
                    setModalData({ state: state.name, title: "Name" })
                  }
                >
                  edit
                </span>
              </div>
              <div className="d-flex align-items-center text-white position-relative mt-2">
                <span className="material-icons-outlined">email</span>
                <div className="ms-3">
                  <label className="d-block text-secondary">Email</label>
                  <label className="fw-semibold">{state.email}</label>
                </div>
                <span
                  className="material-icons-outlined position-absolute py-2 px-2 bg-warning rounded-circle end-0"
                  id="userEdit"
                  onClick={() =>
                    setIsModalOpen(true) ||
                    setModalData({ state: state.email, title: "Email" })
                  }
                >
                  edit
                </span>
              </div>
              <div className="d-flex align-items-center text-white position-relative mt-2">
                <span className="material-icons-outlined">call</span>
                <div className="ms-3">
                  <label className="d-block text-secondary">Number</label>
                  <label className="fw-semibold">{state.number}</label>
                </div>
                <span
                  className="material-icons-outlined position-absolute py-2 px-2 bg-warning rounded-circle end-0"
                  id="userEdit"
                  onClick={() =>
                    setIsModalOpen(true) ||
                    setModalData({ state: state.number, title: "Number" })
                  }
                >
                  edit
                </span>
              </div>
              <div className="d-flex align-items-center text-white position-relative mt-2">
                <span className="material-icons-outlined">home</span>
                <div className="ms-3">
                  <label className="d-block text-secondary">Address</label>
                  <label className="fw-semibold">not available</label>
                </div>
                <span
                  className="material-icons-outlined position-absolute py-2 px-2 bg-warning rounded-circle end-0"
                  id="userEdit"
                  onClick={() =>
                    setIsModalOpen(true) ||
                    setModalData({ state: state.address, title: "Address" })
                  }
                >
                  edit
                </span>
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
