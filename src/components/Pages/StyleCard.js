import React from "react";

const StyleCard = ({ price }) => {
  return (
    <div>
      <div className="card">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
          className="card-img-top"
          alt="Fissure in Sandstone"
        />
        <div className="card-body" style={{ backgroundColor: "white" }}>
          <h5 className="card-title fw-semibold">Style Name</h5>
          <p className="card-text">
            <span className="fw-bold">
              Price: <span className="text-primary fw-bold">{price} /-</span>
            </span>
          </p>
          <a href="#!" className="px-5 py-2 fw-bold text-white bg-black">
            Buy
          </a>
        </div>
      </div>
    </div>
  );
};

export default StyleCard;
