import UpLoadFileIcon from '@/components/icons/UpLoadFileIcon'
import React, { useRef } from 'react'
import * as api from "@api-client"
type Props = {}

export default function UploadFileForm({}: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e : any) => {
    e.preventDefault();
  };

  const handleDragEnter = (e : any) => {
    e.preventDefault();
  };

  const handleDragLeave = (e : any) => {
    e.preventDefault();
  };

  const handleDrop = (e : any ) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = async (files : any) => {
    // Handle dropped files here
    console.log(files[0]);
    const res = await api.uploadFile(files[0])

    


  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className='w-[90%] h-[320px] rounded-xl border-2 border-dashed border-light-blue bg-[#F1F7FE] flex flex-col justify-center cursor-pointer'
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept=".pdf,.doc,.docx,.png,.mp4,.jpg"
        onChange={(e) => handleFiles(e.target.files)}
      />
      <div className='w-full flex flex-col items-center justify-center mt-4'>
        <UpLoadFileIcon className='mt-2' />
        <div className='font-semibold text-xl'>Drag & Drop files</div>
        <button className=''>Browse my files</button>
        <p className='font-semibold text-h-gray'>Supported files: pdf, doc, docx</p>
      </div>
    </div>
  );
}