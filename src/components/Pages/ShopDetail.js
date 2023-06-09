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
      <h3 className="text-white text-center">
        <span className=" border  py-2 ps-4">
          Shop <span className="bg-white text-black py-2 pe-4">Details</span>
        </span>
      </h3>
      <div className="mt-5">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img
              alt=""
              src="https://img.freepik.com/premium-photo/beauty-saloon-eyebrow-care_524291-978.jpg?size=626&ext=jpg&ga=GA1.2.1543915203.1685795707&semt=ais"
              className=" w-50"
            />
          </div>
          <div className="w-50">
            <div className="text-white">
              <span className="d-block">Shop Name</span>
              <span className="d-block">Shop Timing</span>
              <span className="d-block">Shop Number</span>
              <span className="d-block">Shop Rating</span>
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
        <div className="mt-5">
          <h3 className="text-white mb-3">
            Services by{" "}
            <span className="text-decoration-underline">Professional</span>
          </h3>
          <div className="row">
            <div className="col">
              <div className=" ">
                <StyleCard price={120} book="/booking" />
              </div>
            </div>
            <div className="col">
              <div className=" ">
                <StyleCard price={250} book="/booking" />
              </div>
            </div>
            <div className="col">
              <div className="">
                <StyleCard price={430} book="/booking" />
              </div>
            </div>
            <div className="col">
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
        <div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;
