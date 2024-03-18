import React, { useState } from "react";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
type Props = {
    mode : string
};

export default function FormLoginEmail({mode}: Props) {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
 
  const handleSetShowPassword = ()=>{
    setIsShowPassword(!isShowPassword)
  }
  return (
    <div className="w-full flex flex-col gap-4 ">
      <div className="w-full flex flex-col gap-2">
        <div className="text-gray-500 text-sm font-semibold">Email</div>
        <input
          placeholder="Please enter the email"
          className="w-full h-8 leading-7 focus:outline-none placeholder:text-sm bg-white-smoke px-2 py-2 rounded-md"
        ></input>
      </div>

      <div className="w-full flex flex-col gap-2">
        <div className="text-gray-500 text-sm font-semibold">Password</div>
        <div className="flex relative items-center bg-white-smoke rounded-md">
          <input
            
            placeholder="Please enter password"
            type={isShowPassword ? 'text' : "password"}
            className="w-[90%] h-8 leading-7 focus:outline-none placeholder:text-sm bg-white-smoke px-2 py-2 rounded-md"
          ></input>
          {!isShowPassword ? (
            <BiShow onClick={handleSetShowPassword} size={24} className="absolute right-2 cursor-pointer" />
          ) : (
            <BiHide onClick={handleSetShowPassword} size={24} className="absolute right-2 cursor-pointer" />
          )}
        </div>
        {
            mode === 'login' ? <div className="text-center bg-thistle rounded-lg py-1 mt-4 cursor-pointer text-medium-violet-red font-semibold hover:opacity-[0.8]">Đăng nhập</div> : <div className="text-center bg-thistle rounded-lg py-1 mt-4 cursor-pointer text-medium-violet-red font-semibold hover:opacity-[0.8]">Đăng kí</div>
        }
      </div>
    </div>
  );
}
