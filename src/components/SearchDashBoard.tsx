"use client";
import React, { use, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import SearchResultPopup from "./SearchResultPopup";
type Props = {};

export default function SearchDashBoard({}: Props) {
  const [isFocusSearch, setIsFocusSearch] = useState(false);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);

  const handleUnFocusSearch = ()=>{
    setIsFocusSearch(false)
  }
  const handleFocusSearch = ()=>{
    setIsFocusSearch(true)
  }

  return (
    <div className="w-full h-[60px] fixed bg-white flex items-center justify-center box-border z-50 ">
      {/* search */}
      <div className="flex justify-start items-center w-[64%] bg-white-smoke px-2 py-2 rounded-xl h-[48px]">
        {/* search icon */}
        <div className="flex p-1 mr-1">
          <FaSearch size={14} className="text-hight-violet-red" />
        </div>
        <div className="w-[80%] bg-transparent relative ">
          <input
            onFocus={()=>{handleFocusSearch()}}
           
            placeholder="Tìm trong kho lưu trữ"
            className="w-full bg-transparent focus:outline-none placeholder:font-semibold focus:font-semibold "
          ></input>
          {
            isFocusSearch && <SearchResultPopup onOutsideClick={()=>{setIsFocusSearch(false)}} className="w-full bg-white absolute h-52 rounded-xl top-9 left-[-8px]" />
          }
        </div>
        {/* menu choosen */}
        <div className="flex w-[20%] border-l-[1px] border-s-black px-2 justify-center items-center gap-2 hover:cursor-pointer ">
          <div className=" font-semibold text-md  text-center">
            Thư viện
          </div>
          <div className="">
            <FaCaretDown size={18} />
          </div>
        </div>
      </div>

      {/* other option */}
      <div className="w-[34%] flex justify-center items-center relative">
        <button className="bg-white-smoke rounded-full p-2 absolute right-[13rem] ">
          <FiBell size={18} />
        </button>
      </div>
    </div>
  );
}
