import React from "react";

const ServicesList = ({ noImage }) => {
  return (
    <div className="row border-bottom pb-2 mt-2">
      <div className="col-3 col-sm-2">
        <img
          alt=""
          src={noImage}
          className="rounded shadow ripple w-100 serviceImg"
        />
      </div>
      <div className="col-7 col-sm-8 d-flex">
        <div>
          <li>Hair Cut name</li>
          <li>120 rs</li>
          <li>Description</li>
          {/* <h6>Title </h6>
          <h6>Price </h6>
          <h6>Description </h6>
        </div>
        <div className="ms-2">
          <h6> :- Haircut</h6>
          <h6> :- 150rs</h6>
          <h6> :- Details</h6> */}
        </div>
      </div>
      <div className="col-2 col-sm-2">
        <span class="material-icons-outlined py-1 px-1 bg-warning text-white ripple shadow rounded ms-2">
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
