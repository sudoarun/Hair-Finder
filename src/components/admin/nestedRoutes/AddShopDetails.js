import React, { useState } from "react";
import noImage from "../../../assets/noImage.jpg";
import ServicesList from "./Service component/ServicesList";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useSelector } from "react-redux";
import { getAuthSlice } from "../../../Redux/Slices/AuthSlice";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../Firebase/firebase";
const AddShopDetails = () => {
  const [image, setImage] = useState("");
  const [saveImage, setSaveImage] = useState("");
  const [state, setState] = useState({
    serviceName: "",
    price: "",
    description: "",
    serviceImage: "",
  });
  const authID = useSelector(getAuthSlice);
  const id = authID[0].id;
  const storage = getStorage();
  const storageRef = ref(
    storage,
    `Professional/${id}/Services/` + saveImage.name
  );
  const dbRef = collection(db, `ProfessionalDB/${id}/Services/`);
  const onFormChange = (e) => {
    const { name, value } = e.target;

    setState((data) => {
      return { ...data, [name]: value };
    });
  };
  const services = "s";
  const ImageHandler = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setSaveImage(e.target.files[0]);
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (state.serviceName === "") {
      alert("Enter Service Details Before Submit");
      return;
    }
    const metadata = {
      name: saveImage.name,
      contentType: "image",
    };
    uploadBytes(storageRef, saveImage, metadata)
      .then(() =>
        getDownloadURL(storageRef).then((imageURL) =>
          addDoc(dbRef, {
            ServiceName: state.serviceName,
            Price: state.price,
            Description: state.description,
            ServiceImage: imageURL,
          })
        )
      )
      .then(() => alert("Data Saved !!"));
    setState({
      serviceName: "",
      price: "",
      description: "",
      serviceImage: "",
    });
  };

  // console.log(image);
  return (
    <div className="bg-white p-2 h-sm-100">
      <div className="pt-3 overflow-auto mb-3 pb-5">
        <h2 className="text-center pb-3">
          <span className="border border-dark ps-2 py-2">
            Add{" "}
            <span className="text-white bg-black ps-1 pe-2 py-2">Services</span>
          </span>
        </h2>
        <form onSubmit={SubmitHandler}>
          <div className="row align-items-center">
            <div className="col-12 col-sm-6 col-md-5 mb-3">
              <div className="position-relative">
                <label
                  htmlFor="addServiceImg"
                  id=""
                  className="material-icons-outlined position-absolute bg-white text-black p-2 rounded-circle shadow bottom-0"
                >
                  add_a_photo
                </label>
                <img
                  src={image ? image : noImage}
                  value={image}
                  alt=""
                  className="w-100 rounded shadow"
                  style={{ backgroundSize: "contain" }}
                  height={250}
                />
                <input
                  id="addServiceImg"
                  type="file"
                  name="serviceImage"
                  value=""
                  alt=""
                  className="border d-none"
                  placeholder="Select image"
                  onChange={ImageHandler}
                />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-7">
              <div>
                <input
                  placeholder="Enter Service Name"
                  className="form-control"
                  name="serviceName"
                  value={state.serviceName}
                  onChange={onFormChange}
                />
                <input
                  placeholder="Enter Price"
                  type="number"
                  name="price"
                  value={state.price}
                  onChange={onFormChange}
                  className="form-control mt-2"
                />
                <textarea
                  placeholder="Enter description"
                  className="form-control mt-2"
                  name="description"
                  value={state.description}
                  onChange={onFormChange}
                />
                <button
                  type="submit"
                  className="py-2 bg-warning px-4 border-0 text-white rounded mt-2 shadow ripple"
                >
                  Add Service
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="mt-4">
          <h5>
            Recently{" "}
            <span className="text-decoration-custom">added services</span>
          </h5>
          <div className="mt-4 pb-3 overflow-auto" style={{ height: "200px" }}>
            {services ? (
              <div>
                <ServicesList noImage={noImage} />
                <ServicesList noImage={noImage} />
                <ServicesList noImage={noImage} />
                <ServicesList noImage={noImage} />
                <ServicesList noImage={noImage} />
              </div>
            ) : (
              <div>
                <h5>No Services Added Yet</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddShopDetails;
