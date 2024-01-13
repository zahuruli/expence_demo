import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { Button, Modal } from "antd";

const HomePage = () => {
  //==========Modal function==========:
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Layout>
      <div className="filters">
        <div className="range-filters">Range-filters</div>
        <div>
          <button className="btn btn-primary" onClick={showModal}>
            Add transection
          </button>
        </div>
      </div>
      <div className="content"></div>

      <div className="modal">
        <Modal
          title=""
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <h3>Hello</h3>
        </Modal>
      </div>
    </Layout>
  );
};

export default HomePage;
