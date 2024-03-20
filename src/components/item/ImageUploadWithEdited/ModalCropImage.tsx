import { Button, Modal } from "antd";
import React from "react";

type Props = {
    isModalOpen : boolean,
    handleOk : ()=>void,
    handleCancel : ()=>void,
    
};

export default function ModalCropImage({handleOk , handleCancel  , isModalOpen}: Props) {

  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back"  className="font-semibold hover:text-medium-violet-red" style={{
          
        }} onClick={handleCancel}>Cancel</Button>,
        <Button key="submit" className="bg-medium-violet-red text-white font-semibold " type="primary" onClick={handleOk}>Upload</Button>
      ]}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}
