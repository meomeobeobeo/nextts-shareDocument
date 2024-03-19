import React, { useEffect, useState } from "react";
import { Progress, Space, Typography } from "antd";
import { IoClose, IoFileTrayOutline } from "react-icons/io5";
import { FileOutlined } from "@ant-design/icons";
import { ProgressDownLoadAndUploadFileStatus } from "@/model";
import * as api from "@api-client"


type Props = {
  percent?: number;
  fileName: string;
  progressStatus?: ProgressDownLoadAndUploadFileStatus;
  setFileName?: any;
  fileSize?: number;
  fileNameUploaded?: string | undefined
};

export default function FileUpLoadProgress({
  percent,
  progressStatus,
  fileName,
  setFileName,
  fileSize,
  fileNameUploaded
}: Props) {
  const handleDeleteFile = async () => {
   
    try {
      if(fileNameUploaded){ 
        let res = await api.deleteFile(fileNameUploaded)
        console.log(res)
      }
      setFileName("");
    } catch (error) {
      console.error(error)
    }
    
  };

  return (
    <div className="w-[90%] ml-[5%] p-2 bg-white-smoke rounded-md flex flex-col justify-center relative">
      <Space className="flex gap-2 items-center">
        <FileOutlined />
        <Typography>{fileName}</Typography>
        <Typography className="text-light-blue">{fileSize} MB</Typography>
      </Space>
      <Progress
        strokeColor={"#9a4292"}
        trailColor="#e1cdde"
        className="w-[400px]"
        percent={percent}
        status={progressStatus}
      />
      <IoClose
        onClick={() => {
          handleDeleteFile();
        }}
        className="absolute right-4 p-1 rounded-lg text-medium-violet-red cursor-pointer hover:bg-thistle"
        size={32}
      />
    </div>
  );
}
