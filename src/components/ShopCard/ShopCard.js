import React from "react";
import { Link } from "react-router-dom";
import "./ShopCard.css";
import Slider from "react-slick/lib/slider";
import Loader from "../Loader/loader";

const ShopCard = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    // eslint-disable-next-line no-dupe-keys
    dots: false,
    speed: 500,
    useTransform: true,
    draggable: true,
    centerMode: false,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: true,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="d-flex justify-content-center">
      <div
        className=" responsiveWidth mt-n5 px-4 card pt-3 pb-3"
        style={{ backgroundColor: "#2D2727" }}
      >
        <div className="mb-2">
          <h6 className="text-white text-center">
            <span className="border py-2 ps-2">
              Top 10{" "}
              <span className="py-2 px-2 bg-white text-black">Shops</span>
            </span>
          </h6>
        </div>
        {data.length === 0 ? (
          <Loader />
        ) : (
          <Slider className="" {...settings}>
            {data.map((doc) => (
              <div className="" key={doc.id}>
                <Link to={`/shop/${doc.id}`}>
                  <div className="d-flex card mx-2 ">
                    <div className="w-100 position-relative ">
                      <img
                        src="https://img.freepik.com/premium-photo/portrait-stylish-bearded-man-with-hair-scissors_265223-2028.jpg?w=740"
                        className="w-100 rounded"
                        alt=""
                      />
                    </div>
                    <div className="position-absolute text-white bottom-0 start-0">
                      <div className="px-2">
                        <div>
                          <h6 className="fw-semibold">{doc.shopName}</h6>
                          <p className="fs-6">{doc.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default ShopCard;
