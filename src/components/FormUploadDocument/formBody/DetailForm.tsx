import SchoolIcon from "@/components/icons/SchoolIcon";
import SelectSearchWithApi from "@/components/item/SelectSearchWithApi/SelectSearchWithApi";
import React from "react";
import { FaSchool } from "react-icons/fa6";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { CiBookmark, CiCalendar } from "react-icons/ci";
type Props = {};

export default function DetailForm({}: Props) {
  




  return (
    <div className="w-[90%] h-[320px] rounded-xl border-2 border-solid border-light-grey bg-white flex flex-col justify-center items-center cursor-pointer">
      <div className="w-full flex flex-col gap-4">

        {/* name document */}
        <div className="w-full flex flex-row gap-8">
          <div className="w-[20%] pl-8 flex items-center gap-4">
            <MdOutlineDriveFileRenameOutline size={24} />
            <div className="font-semibold text-h-gray">Tên</div>
          </div>
          <input  className="w-[60%] border-white-smoke border-2 outline-none focus:outline-light-blue focus:border-none  p-2 rounded-[12px]" />
        </div>

        {/* school */}
        <div className="w-full flex flex-row gap-8">
          <div className="w-[20%] pl-8 flex items-center gap-4">
            <FaSchool size={24} />
            <div className="font-semibold text-h-gray">Trường</div>
          </div>
          <SelectSearchWithApi />
        </div>
        {/* specialized */}
        <div className="w-full flex flex-row gap-8">
          <div className="w-[20%] pl-8 flex items-center gap-4">
            <CiBookmark size={24} />
            <div className="font-semibold text-h-gray">Lĩnh vực</div>
          </div>
          <SelectSearchWithApi />
        </div>

         {/* specialized */}
         <div className="w-full flex flex-row gap-8">
          <div className="w-[20%] pl-8 flex items-center gap-4">
            <CiCalendar  size={24} />
            <div className="font-semibold text-h-gray">Năm học</div>
          </div>
          <SelectSearchWithApi />
        </div>

      </div>
    </div>
  );
}
