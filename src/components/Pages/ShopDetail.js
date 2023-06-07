import React from "react";
import StyleCard from "./StyleCard";
import Breadcrumb from "../BreadCrumbs/Breadcrumb";
// import Slider from "react-slick/lib/slider";

const ShopDetail = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   // eslint-disable-next-line no-dupe-keys
  //   dots: false,
  //   speed: 500,
  //   useTransform: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 2,
  // };
  return (
    <div className="container">
      <div className="mt-3">
        <Breadcrumb path="Shop Details" />
      </div>
      <h1 className="text-white text-center">Shop Details</h1>
      <div className="">
        <div className="d-flex justify-content-between">
          <div>
            <img
              alt=""
              src="https://img.freepik.com/premium-photo/beauty-saloon-eyebrow-care_524291-978.jpg?size=626&ext=jpg&ga=GA1.2.1543915203.1685795707&semt=ais"
              className="border w-50"
            />
          </div>
          <div>
            <div className="text-white">
              <span className="d-block">Shop Name</span>
              <span className="d-block">Shop Name</span>
              <span className="d-block">Shop Name</span>
              <span className="d-block">Shop Name</span>
            </div>
          </div>
        </div>
        {/* <Slider {...settings}>
          <div className="px-2">
            <StyleCard />
          </div>
          <div className="px-2">
            <StyleCard />
          </div>
          <div className="px-2">
            <StyleCard />
          </div>
          <div className="px-2">
            <StyleCard />
          </div>
        </Slider> */}
        <div className="row">
          <div className="col">
            <StyleCard />
          </div>
          <div className="col">
            <StyleCard />
          </div>
          <div className="col">
            <StyleCard />
          </div>
          <div className="col">
            <StyleCard />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-white text-center">
          Free Offers are you eligible ?
        </h1>
        <div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;
