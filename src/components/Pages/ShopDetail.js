import React from "react";
import StyleCard from "./StyleCard";
import Slider from "react-slick/lib/slider";

const ShopDetail = () => {
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
    <div>
      <h1 className="text-white text-center">Shop Details</h1>
      <div className="container">
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
          <div className="container">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;
