import React from "react";

const ServicesList = ({ noImage }) => {
  return (
    <div className="row border-bottom pb-2 mt-2">
      <div className="col-2">
        <img
          alt=""
          src={noImage}
          height={50}
          className="rounded shadow ripple w-100"
        />
      </div>
      <div className="col-8 d-flex">
        <div>
          <h6>Title </h6>
          <h6>Price </h6>
          <h6>Description </h6>
        </div>
        <div className="ms-2">
          <h6> :- Haircut</h6>
          <h6> :- 150rs</h6>
          <h6> :- Details</h6>
        </div>
      </div>
      <div className="col-2">
        <span class="material-icons-outlined py-1 px-1 bg-warning text-white ripple shadow rounded">
          edit_note
        </span>
        <span class="material-icons-outlined py-1 px-1 bg-danger text-white ripple shadow rounded ms-2">
          delete
        </span>
      </div>
    </div>
  );
};

export default ServicesList;
