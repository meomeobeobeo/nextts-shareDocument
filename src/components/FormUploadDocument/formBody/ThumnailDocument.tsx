import SchoolIcon from "@/components/icons/SchoolIcon";
import SelectSearchWithApi from "@/components/item/SelectSearchWithApi/SelectSearchWithApi";
import React from "react";
import { FaSchool } from "react-icons/fa6";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { CiBookmark, CiCalendar } from "react-icons/ci";
import ImageUploadWithEdited from "@/components/item/ImageUploadWithEdited/ImageUploadWithEdited";
import { Space, Typography } from "antd";
type Props = {};

export default function ThumnailDocument({}: Props) {
  return (
    <div className="w-[90%] h-[320px] rounded-xl border-2 border-solid border-light-grey bg-white flex flex-col justify-center items-center cursor-pointer gap-2">
      <div>Upload thumnail tài liệu của bạn</div>
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        
          <ImageUploadWithEdited />
       
      </div>
    </div>
  );
}
