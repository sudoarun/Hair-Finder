import React from "react";

const About = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="container">
          <h3 className="text-center pt-4 fw-bold mb-3">
            <span className="border px-3 py-2 text-primary border-primary">
              Who We Are
            </span>
          </h3>
          <div className="row align-items-center mt-2">
            <div className="col-12 col-sm-6 order-1 order-sm-0">
              <p>
                Welcome to <strong className="text-primary">HairFinder</strong>,
                your one-stop-shop for finding the perfect hair salon near you!
                Our mission is to connect you with the best hair salons in your
                area and make booking an appointment a breeze. With our
                easy-to-use platform, you can browse through a variety of
                salons, read reviews from real customers, and book your
                appointment in just a few clicks. We understand the importance
                of finding a hair salon that meets your unique needs, which is
                why we offer a range of filters to help you find the perfect
                match. Whether you're looking for a salon that specializes in
                curly hair, a barber shop that offers straight razor shaves, or
                a salon that uses only organic products, we've got you covered.
                Our team is dedicated to making your hair salon experience as
                seamless as possible, so you can sit back, relax, and let us
                take care of the rest. Thank you for choosing{" "}
                <strong className="text-primary">HairFinder!</strong>
              </p>
            </div>

            <div className="col-12 col-sm-6 order-0 order-sm-1">
              <img
                src="https://img.freepik.com/free-vector/barber-concept-illustration_114360-1872.jpg?w=740&t=st=1685893273~exp=1685893873~hmac=7bd13055e19a9431d2ae316b1846b1f22943640ce382f91136230238423be00a"
                alt="saloon"
                className="w-100"
              />
            </div>
          </div>
          <div className="container ">
            <div className="d-flex justify-content-between text-center aboutRating">
              <div>
                <span className="text-primary fw-bold fs-1">2K+</span>
                <p>Customers</p>
              </div>
              <div>
                <span className="text-primary fw-bold fs-1">#1</span>
                <p>Ranking in World Wide</p>
              </div>
              <div>
                <span className="text-primary fw-bold fs-1">500+</span>
                <p>Registered Shops</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
