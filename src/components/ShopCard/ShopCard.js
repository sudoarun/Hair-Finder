import React from "react";
import "./ShopCard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";

const ShopCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    // eslint-disable-next-line no-dupe-keys
    dots: false,
    speed: 500,
    useTransform: true,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  return (
    <div className="d-flex justify-content-center">
      <div className=" w-85 mt-n5 px-4 card pt-3 pb-3">
        <Slider {...settings}>
          <div className="">
            <div className="d-flex card mx-2 ">
              <div className="w-100 position-relative ">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                  className="w-100 rounded"
                  alt=""
                />
              </div>
              <div className="position-absolute text-white bottom-0 start-0">
                <div className="px-2">
                  <h6>Shop 1</h6>
                  <p>Rating</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="d-flex card mx-2">
              <div className="w-100 position-relative">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                  className="w-100 rounded"
                  alt=""
                />
              </div>
              <div className="position-absolute text-white bottom-0 start-0">
                <div className="px-2">
                  <h6>Shop 2</h6>
                  <p>Rating</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="d-flex card mx-2">
              <div className="w-100 position-relative">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                  className="w-100 rounded"
                  alt=""
                />
              </div>
              <div className="position-absolute text-white bottom-0 start-0">
                <div className="px-2">
                  <h6>Shop 3</h6>
                  <p>Rating</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="d-flex card mx-2">
              <div className="w-100 position-relative">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                  className="w-100 rounded"
                  alt=""
                />
              </div>
              <div className="position-absolute text-white bottom-0 start-0">
                <div className="px-2">
                  <h6>Shop 4</h6>
                  <p>Rating</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ShopCard;
