import React from "react";

const ServicesList = ({ noImage, data }) => {
  const { ServiceImage, ServiceName, Price, Description, id } = data;
  const UpdateHandle = () => {
    alert(`Service ID : ${id}`);
  };
  const DeletHandler = () => {
    alert(`Delete ID : ${id}`);
  };
  return (
    <div className="row border-bottom pb-2 mt-2">
      <div className="col-3 col-sm-2">
        <img
          alt=""
          src={ServiceImage || noImage}
          className="rounded shadow ripple w-100 serviceImg"
        />
      </div>
      <div className="col-7 col-sm-8 d-flex">
        <div>
          <li className="fw-semibold">{ServiceName}</li>
          <li>{Price}</li>
          <li>{Description}</li>
        </div>
      </div>
      <div className="col-2 col-sm-2">
        <span
          className="material-icons-outlined py-1 px-1 bg-warning text-white ripple shadow rounded ms-2 servicebtn"
          onClick={UpdateHandle}
        >
          edit_note
        </span>
        <span
          className="material-icons-outlined py-1 px-1 bg-danger text-white ripple shadow rounded ms-2 servicebtn"
          onClick={DeletHandler}
        >
          delete
        </span>
      </div>
    </div>
  );
};

export default ServicesList;
