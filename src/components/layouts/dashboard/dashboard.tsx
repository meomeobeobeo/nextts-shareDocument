"use client";

import { Layout } from "@/model";
import React, { useState } from "react";
import "@style/global.scss";
import { FaCirclePlus } from "react-icons/fa6";
import styles from "./styles.module.scss";
import { FaMapLocationDot, FaChartArea } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { IoLibraryOutline } from "react-icons/io5";
import Link from "next/link";

type Props = {};

type ActiveNav = "Discover" | "MyLibrary" | "Report" | "Setting";
export default function Dashboard(props: Layout) {
  const [activeNav, setActiveNav] = useState<ActiveNav>("Discover");
  const handleSetActive = (activename: ActiveNav) => {
    setActiveNav(activename);
  };

  return (
    <div className="w-full h-[100vh] bg-white flex flex-row justify-center items-center">
      <div className="w-[12%] bg-white h-[100%] flex flex-col justify-start items-start border-r-[1px] border-gray-300">
        <div className="w-full py-2 px-1">
          <span className="ml-3 text-hight-violet-red text-3xl font-semibold">
            StudyDocs
          </span>
        </div>
        <div className="w-full py-2 px-4 flex justify-start items-center">
          <span className="text-hight-violet-red text-md font-semibold">
            Minh Nguyen
          </span>
        </div>
        <div className="w-full px-4 flex items-center justify-start">
          <div className="font-semibold text-[12px] p-1 rounded-[4px] bg-white-smoke">
            Tài khoản cơ bản
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-4">
          <button className="w-[80%] text-center bg-light-yellow text-medium-yellow font-semibold rounded-2xl text-sm px-2 py-1 hover:text-yellow-500">
            Nâng cấp ngay bây giờ
          </button>
        </div>
        <div className="flex items-center justify-center w-full mt-4">
          <Link
            href={"/dashboard/createNewDoc"}
            className="w-[80%] flex justify-center gap-3 items-center bg-qfw-lilac rounded-xl font-semibold text-sm px-2 py-2 border-b-4 border-lilac--dark hover:opacity-[0.7]  "
          >
            <FaCirclePlus size={32} className="text-white" />
            <span className="text-white text-md">Tạo mới</span>
          </Link>
        </div>
        <div className="mt-4 w-full flex flex-col justify-center items-center">
          <div
            onClick={() => {
              handleSetActive("Discover");
            }}
            className={`flex justify-start items-center w-full py-3 pl-4 navigation gap-3 ${
              activeNav === "Discover" ? "navigationActive" : ""
            }`}
          >
            <FaMapLocationDot
              size={20}
              className={`text-h-gray ${
                activeNav === "Discover" ? "activeNav" : ""
              }`}
            />
            <span
              className={`font-medium text-center text-sm text-h-gray ${
                activeNav === "Discover" ? "activeNav" : ""
              }`}
            >
              Khám phá
            </span>
          </div>

          {/*  */}
          <div
            onClick={() => {
              handleSetActive("MyLibrary");
            }}
            className={`flex justify-start items-center w-full py-3 pl-4 navigation gap-3 ${
              activeNav === "MyLibrary" ? "navigationActive" : ""
            }`}
          >
            <IoLibraryOutline
              size={20}
              className={`text-h-gray ${
                activeNav === "MyLibrary" ? "activeNav" : ""
              }`}
            />
            <span
              className={`font-medium text-center text-sm text-h-gray ${
                activeNav === "MyLibrary" ? "activeNav" : ""
              }`}
            >
              Thư viện của tôi
            </span>
          </div>
          {/*  */}
          <div
            onClick={() => {
              handleSetActive("Report");
            }}
            className={`flex justify-start items-center w-full py-3 pl-4 navigation gap-3 ${
              activeNav === "Report" ? "navigationActive" : ""
            }`}
          >
            <FaChartArea
              size={20}
              className={`text-h-gray ${
                activeNav === "Report" ? "activeNav" : ""
              }`}
            />
            <span
              className={`font-medium text-center text-sm text-h-gray ${
                activeNav === "Report" ? "activeNav" : ""
              }`}
            >
              Báo cáo
            </span>
          </div>

          {/*  */}
          <div
            onClick={() => {
              handleSetActive("Setting");
            }}
            className={`flex justify-start items-center w-full py-3 pl-4 navigation bg-black gap-3 ${
              activeNav === "Setting" ? "navigationActive" : ""
            }`}
          >
            <CiSettings
              size={20}
              className={`text-h-gray ${
                activeNav === "Setting" ? "activeNav" : ""
              }`}
            />
            <span
              className={`font-medium text-center text-sm text-h-gray ${
                activeNav === "Setting" ? "activeNav" : ""
              }`}
            >
              Cài đặt
            </span>
          </div>
        </div>
      </div>
      <div className="w-[88%] bg-thistle h-[100%]">{props.children} </div>
    </div>
  );
}
