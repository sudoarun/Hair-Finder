import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div
      id="carouselControls"
      className="carousel slide"
      data-mdb-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item ">
          <img
            src="https://img.freepik.com/free-photo/young-man-barbershop-trimming-hair_1303-26256.jpg?w=740&t=st=1685797048~exp=1685797648~hmac=f9b9c20fc316a49d67f648d5bfadac7eec8c201f83856227eb751b05cbb5da82"
            className="d-block w-100 carouselImg"
            alt="Wild Landscape"
          />
        </div>
        <div className="carousel-item active">
          <img
            src="https://img.freepik.com/free-photo/handsome-man-cutting-beard-barber-salon_1303-20972.jpg?t=st=1685775631~exp=1685776231~hmac=7a8968346ec56f61fcf4914efbde491665a5c9e639ab805e7d203ea8bf6e4e06"
            className="d-block w-100 carouselImg "
            alt="Camera"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/free-photo/handsome-man-barbershop-shaving-beard_1303-26257.jpg"
            className="d-block w-100 carouselImg"
            alt="Exotic Fruits"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselControls"
        data-mdb-slide="prev"
      >
        <span className="material-icons">arrow_back_ios</span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-mdb-target="#carouselControls"
        data-mdb-slide="next"
      >
        <span className="material-icons">arrow_forward_ios</span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
