import { Modal } from "antd";
import { useState } from "react";

const UserDetailModal = ({ isModalOpen, setIsModalOpen, modalData }) => {
  const [value, setValue] = useState("");
  const handleOk = () => {
    setValue("okay");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setValue("");
  };
  console.log(modalData);

  return (
    <>
      <Modal
        title={`Update User ${modalData.title}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="d-flex justify-content-between mx-2 mb-2">
          <span>{modalData.title}:</span>
          <span>
            {modalData.state === undefined ? `not found` : modalData.state}
          </span>
        </div>
        <input
          placeholder={`Please enter ${modalData.title}`}
          className="form-control"
          defaultValue={value}
        />
      </Modal>
    </>
  );
};

export default UserDetailModal;
