import UpLoadFileIcon from "@/components/icons/UpLoadFileIcon";
import React, { useRef, useState } from "react";
import * as api from "@api-client";
import FileUpLoadProgress from "@/components/item/FileUpLoadProgress";
import { AxiosProgressEvent } from "axios";
import { ProgressDownLoadAndUploadFileStatus } from "@/model";
type Props = {};

export default function UploadFileForm({}: Props) {
  const [fileName, setFileName] = useState<string>("");
  const [percentUpload, setPercentUpload] = useState<number>(0);
  const [fileSize, setFileSize] = useState<number>();
  const [progressStatus, setProgressStatus] =
    useState<ProgressDownLoadAndUploadFileStatus>("active");

  const [fileNameUploaded, setFileNameuploaded] = useState(undefined);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: any) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = async (files: any) => {
    // Handle dropped files here
    if (files && files[0]) {
      let fileName = files[0]?.name;
      let fileSize = files[0]?.size;
      setFileName(fileName);
      setFileSize(parseFloat((fileSize / (1024 * 1024)).toFixed(2)));
      try {
        setProgressStatus("active");
        const res = await api.uploadFile(files[0], onUploadProgress);
        setProgressStatus("success");

        let fileNameUploaded = res.data?.metaData?.fileName;
        setFileNameuploaded(fileNameUploaded);
      } catch (error) {
        setProgressStatus("exception");
        return;
      }
    }
  };

  const onUploadProgress = (event: AxiosProgressEvent) => {
    let percent = event.progress || 0;

    setPercentUpload(parseFloat((percent * 100).toFixed(2))); // Rounded to two decimal places
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div
        className="w-[90%] h-[240px] rounded-xl border-2 border-dashed border-light-blue bg-[#F1F7FE] flex flex-col justify-center cursor-pointer"
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
        <div className="w-full flex flex-col items-center justify-center mt-4">
          <UpLoadFileIcon className="mt-2" />
          <div className="font-semibold text-xl">Drag & Drop files</div>
          <button className="">Browse my files</button>
          <p className="font-semibold text-h-gray">
            Supported files: pdf, doc, docx, mp4, jpg, png
          </p>
        </div>
      </div>
      {/* progress */}
      <div className="w-full flex justify-start mt-2">
        {fileName !== "" ? (
          <FileUpLoadProgress
            fileName={fileName}
            progressStatus={progressStatus}
            percent={percentUpload}
            setFileName={setFileName}
            fileSize={fileSize}
            fileNameUploaded={fileNameUploaded}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
