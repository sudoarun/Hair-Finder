import { Modal } from "antd";

const UserDetailModal = ({ isModalOpen, setIsModalOpen, modalData }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // console.log(modalData);

  return (
    <>
      <Modal
        title="Update User Details"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{modalData}</p>
      </Modal>
    </>
  );
};

export default UserDetailModal;
