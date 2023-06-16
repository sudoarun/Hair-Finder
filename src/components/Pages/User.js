import React from "react";
import "./User.css";
import Slider from "react-slick";

const User = () => {
  const Slide = {
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
      <div className="container">
        <div class="profile-page">
          <div className="row">
            <div className="col">
              <img
                src="https://img.freepik.com/premium-vector/realistic-sunbed-illustration_23-2149443982.jpg?size=626&ext=jpg"
                alt=""
                className="w-50"
              />
            </div>

            <div className="col">
              <div class="text-white">
                <h1>Name : Arun </h1>
                <p>Mobile : 9993335555</p>
                <p>Email : yourmail@gmail.com</p>
                <p>Age : 25</p>
                <p>Location : India </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div class=" container">
          <h2 className="">Recently Visited Saloons</h2>
          <Slider {...Slide}>
          
          <img
            src="https://img.freepik.com/premium-vector/vintage-logo-barber-shop-vector-illustration_831416-112.jpg?size=626&ext=jpg&ga=GA1.1.1107865039.1686587964&semt=sph"
            alt=""
          ></img>

          <img
            src="https://img.freepik.com/premium-vector/vintage-logo-barber-shop-vector-illustration_831416-112.jpg?size=626&ext=jpg&ga=GA1.1.1107865039.1686587964&semt=sph"
            alt=""
          ></img>
          
        

          </Slider>
        </div>

        <div class="review-info">
          <h3>""</h3>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default User;
