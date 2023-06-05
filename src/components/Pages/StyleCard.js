import React from "react";

const StyleCard = () => {
  return (
    <div>
      <div className="card">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
          className="card-img-top"
          alt="Fissure in Sandstone"
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">Style Name</h5>
          <p className="card-text">
            <span className="fw-bold">
              Price: <span className="text-primary">399</span>
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
