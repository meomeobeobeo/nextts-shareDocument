import { Layout } from "@/model";
import React from "react";
import "@style/global.scss";
import Link from "next/link";

const MainLayout = (props: Layout) => {
  return (
    <div className="w-full flex items-center flex-col h-[100vh]">
      <div className="w-full justify-center items-center flex fixed bg-white z-20">
        <div className="h-20 flex items-center w-[90%] relative ">
          {/* Logo */}
          <div className="mr-8 text-medium-violet-red text-xl font-semibold">
            StudyDocs
          </div>
          {/* left controll */}
          <div className="w-50% flex flex-row items-center gap-2">
            <div className="p-3 cursor-pointer rounded-md h-10 text-md hover:bg-white-smoke hover:text-medium-violet-red text-darktext flex justify-center items-center">
              For schools
            </div>
            <div className="p-3 cursor-pointer rounded-md h-10 text-md hover:bg-white-smoke hover:text-medium-violet-red text-darktext flex justify-center items-center">
              Plans
            </div>
            <div className="p-3 cursor-pointer rounded-md h-10 text-md hover:bg-white-smoke hover:text-medium-violet-red text-darktext flex justify-center items-center">
              Solutions
            </div>
            <div className="p-3 cursor-pointer rounded-md h-10 text-md hover:bg-white-smoke hover:text-medium-violet-red text-darktext flex justify-center items-center">
              For Bussiness
            </div>
          </div>
          {/* right controll */}
          <div className="flex justify-between items-center right-2 absolute gap-2">
            <Link href={"/auth/login"}>
              <div className="p-4 cursor-pointer text-md font-normal hover:bg-white-smoke rounded-md w-[100px] flex justify-center items-center h-10 bg-lilac-faded hover:bg-[#e1cdde] text-medium-violet-red">
                Login
              </div>
            </Link>

            <Link href={"/auth/signup"}>
              <div className="p-4 cursor-pointer text-md font-normal hover:bg-white-smoke rounded-md w-[100px] flex justify-center items-center h-10 bg-medium-violet-red hover:bg-[#5d2057] text-white">
                Sign up
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full mt-20">{props.children}</div>
      <div className="w-full mt-20 flex justify-center items-center relative h-[400px] mb-10">
        <p className="absolute bottom-5">@Production 2024 by Nguyen Minh Duc</p>
      </div>
    </div>
  );
};
export default MainLayout;
