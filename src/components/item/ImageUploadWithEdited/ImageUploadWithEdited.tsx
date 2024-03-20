import React, { useEffect, useRef, useState } from "react";

import { FaPlus } from "react-icons/fa";
import ModalCropImage from "./ModalCropImage";

interface ImageUploadWithEditedProps {
  imgLink?: string;
  setImgLink?: React.Dispatch<React.SetStateAction<string>>;
}

const ImageUploadWithEdited: React.FC<ImageUploadWithEditedProps> = ({
  imgLink,
  setImgLink,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isShowModalCrop, setIsShowModalCrop] = useState<boolean>(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = async (files: FileList) => {
    if (files && files[0]) {
      setFile(files[0]);
      setIsShowModalCrop(true);
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      handleFiles(event.target.files);
    }
  };

  const handleOkForModalCropImage = () => {
    // You can perform any other necessary actions here before closing the modal
    setIsShowModalCrop(false);
  };

  return (
    <>
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className="w-[300px] h-[200px] flex justify-center items-center bg-thistle rounded-lg gap-2 border-dashed border-2 border-light-blue"
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept=".png,.jpg"
          onChange={onChange}
        />
        <FaPlus />
        <span>Upload</span>
      </div>
      {/* write hello in div here */}
      <ModalCropImage
        handleCancel={() => {
          setFile(null);
          setIsShowModalCrop(false);
        }}
        handleOk={handleOkForModalCropImage}
        isModalOpen={isShowModalCrop}
      />
    </>
  );
};

export default ImageUploadWithEdited;
