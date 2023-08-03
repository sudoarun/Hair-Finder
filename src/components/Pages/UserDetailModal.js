import { Modal } from "antd";
import { useState } from "react";

const UserDetailModal = ({ isModalOpen, setIsModalOpen, modalData }) => {
  const [value, setValue] = useState("");
  const handleOk = () => {
    // setIsModalOpen(false);
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
        <input placeholder={modalData.title} defaultValue={value} />
        <p>
          {modalData.state === undefined
            ? `${modalData.title} Not Found`
            : modalData.state}
        </p>
      </Modal>
    </>
  );
};

export default UserDetailModal;
