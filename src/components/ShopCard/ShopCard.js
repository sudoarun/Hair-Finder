import React from "react";
import { Link } from "react-router-dom";
import "./ShopCard.css";
import Slider from "react-slick/lib/slider";
// import { Rate } from "antd";
// import { useState } from "react";

const ShopCard = () => {
  // const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  // const [value, setValue] = useState(5);
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
        <Slider className="" {...settings}>
          <div className="">
            <Link to={"/shop"}>
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
                      <h6>Shop 1</h6>
                      <p>Rating</p>
                      {/* <div>
                        <span>
                          Ratings :
                          <Rate
                            tooltips={desc}
                            onChange={setValue}
                            value={value}
                          />
                        </span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="">
            <Link to={"/shop"}>
              <div className="d-flex card mx-2">
                <div className="w-100 position-relative">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-bearded-urban-male-isolated-with-contrast-illumination-grey-vignette-background_613910-1277.jpg?w=740&t=st=1685810987~exp=1685811587~hmac=0b844fa06182eb2381989f4266ae503b547751fba703bb9243778989e7a28061"
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
            </Link>
          </div>

          <div className="">
            <Link to={"/shop"}>
              <div className="d-flex card mx-2">
                <div className="w-100 position-relative">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-serious-bearded-male-sunglasses-cylinder-hat_613910-1612.jpg?w=740&t=st=1685811034~exp=1685811634~hmac=c8af15682c138e720b31ebf5a2be9a24f969b6790038613669b6da77aa687b2f"
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
            </Link>
          </div>

          <div className="">
            <Link to={"/shop"}>
              <div className="d-flex card mx-2">
                <div className="w-100 position-relative">
                  <img
                    src="https://img.freepik.com/premium-photo/young-handsome-bearded-man-with-long-beard-moustache_120494-1.jpg?w=740"
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
            </Link>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ShopCard;
