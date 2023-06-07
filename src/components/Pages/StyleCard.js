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
        <div className="card-body" style={{ backgroundColor: "#222222" }}>
          <h5 className="card-title fw-semibold text-white">Style Name</h5>
          <p className="card-text">
            <span className="fw-bold text-white">
              Price: <span className="text-primary">{price}</span>
            </span>
          </p>
          <a href="#!" className="border px-4 py-2 fw-bold text-success">
            Buy
          </a>
        </div>
      </div>
    </div>
  );
};

export default StyleCard;
