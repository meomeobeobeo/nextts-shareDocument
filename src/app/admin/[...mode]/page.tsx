"use client";

import { notFound, useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GoogleIcon from "@/components/icons/GoogleIcon";
import { ArrowBack, EmailOutlined } from "@mui/icons-material";
import FacebookIcons from "@/components/icons/FacebookIcons";
import MicrosoftIcon from "@/components/icons/MicrosoftIcon";
import AppleIcon from "@/components/icons/AppleIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import ShieldIcon from "@/components/icons/ShieldIcon";
import EmptyLayout from "@/components/layouts/empty";

type Props = {};

export default function Auth({}: Props) {
    let mode ='login'
  const params = useParams();
  console.log(params)

//   useEffect(() => {
//     if (mode !== "login" && mode !== "signup") {
//       return notFound;
//     }
//   }, [mode]);
  return (
    
      <EmptyLayout>
        <div className="w-full h-[100vh] bg-thistle relative flex justify-center items-center">
          <div className="h-12 w-full bg-medium-violet-red shadow-lg absolute top-0 flex items-center justify-end">
            <Link href={"/"}>
              <button className="fixed left-2 top-2 py-1 px-2 font-[600] text-white bg-[#5D2056] rounded-[4px] h-8 mr-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
                <ArrowBack fontSize="medium" />
              </button>
            </Link>
            {mode === "login" ? (
              <Link href={"/auth?mode=signup"}>
                <button className="py-1 px-2 font-[600] text-white bg-[#5D2056] rounded-[4px] h-8 mr-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
                  Đăng kí
                </button>
              </Link>
            ) : (
              <Link href={"/auth?mode=login"}>
                <button className="py-1 px-2 font-[600] text-white bg-[#5D2056] rounded-[4px] h-8 mr-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
                  Đăng nhập
                </button>
              </Link>
            )}
          </div>
          <div className="w-[780px] h-[580px] bg-white rounded-2xl flex flex-row relative">
            <div className="w-[60%] flex flex-col px-8 py-8 relative">
              <div className="flex flex-col gap-1 w-full">
                <h1 className="text-[1.25rem] leading-[2rem] text-[#343434] font-semibold  ">
                  Chào mừng bạn đến với StudyDocs
                </h1>
                <p className="text-gray-400 mb-4">
                  Đăng nhập tài khoản của bạn
                </p>
              </div>
              {/* button for option login */}
              <div className="flex flex-col w-full justify-center items-center gap-2">
                <button className="flex justify-start items-center py-1 px-2 w-full relative border-[4px] border-gray-300 rounded-md gap-2 hover:shadow-md">
                  <GoogleIcon height={20} width={20} />
                  <span className="text-md">Tiếp tục với google</span>
                  <ArrowForwardIcon className="text-gray-400 text-md w-[10%] absolute right-1" />
                </button>
                <button className="flex justify-start items-center py-1 px-2 w-full relative border-[4px] border-gray-300 rounded-md gap-2 hover:shadow-md">
                  <EmailOutlined style={{ width: 20, height: 20 }} />
                  <span>Tiếp tục với email</span>
                  <ArrowForwardIcon className="text-gray-400 text-md w-[10%] absolute right-1" />
                </button>
                <button className="flex justify-start items-center py-1 px-2 w-full relative border-[4px] border-gray-300 rounded-md gap-2 hover:shadow-md">
                  <FacebookIcons width={20} height={20} />
                  <span>Tiếp tục với facebook</span>
                  <ArrowForwardIcon className="text-gray-400 text-md w-[10%] absolute right-1" />
                </button>
              </div>
              <p className="text-gray-400 my-4 text-center">
                hoặc tiếp tục với
              </p>
              {/* other auth choose button */}
              <div className="flex flex-row items-center w-full gap-4 justify-center">
                <div className="flex flex-col justify-center items-center">
                  <MicrosoftIcon
                    styles="shadow-sm p-1"
                    width={40}
                    height={40}
                  />
                  <span className="text-[10px] font-normal text-center text-gray-400">
                    Microsoft
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <AppleIcon
                    styles="shadow-sm p-1 bg-black"
                    width={40}
                    height={40}
                  />
                  <span className="text-[10px] font-normal text-center text-gray-400">
                    Apple
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <PhoneIcon styles="shadow-sm p-1" width={40} height={40} />
                  <span className="text-[10px] font-normal text-center text-gray-400">
                    Phone
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center ">
                  <ShieldIcon
                    styles="shadow-sm p-1 bg-orchid-purple"
                    width={40}
                    height={40}
                  />
                  <span className="text-[10px] font-normal text-center text-gray-400">
                    Khác
                  </span>
                </div>
              </div>

              {mode === "login" && (
                <p className="text-sm font-medium text-gray-400 mt-20">
                  Bằng cách đăng ký, bạn đồng ý với Điều khoản dịch vụ và Chính
                  sách quyền riêng tư của chúng tôi
                </p>
              )}

              {/* other choose */}
            </div>
            <div className="absolute bottom-0 py-5 rounded-bl-lg flex flex-row justify-center items-center gap-4 w-[60%]">
              {mode === "login" ? (
                <>
                  <p className="text-sm font-medium text-gray-400">
                    Bạn chưa có tài khoản ?
                  </p>
                  <Link href={"/auth?mode=signup"}>
                    <button className="rounded-md text-sm font-semibold bg-thistle text-medium-violet-red px-2 py-1 ">
                      Đăng ký
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <p className="text-sm font-medium text-gray-400">
                    Bạn đã có tài khoản ?
                  </p>

                  <Link href={"/auth?mode=login"}>
                    <button className="rounded-md text-sm font-semibold bg-thistle text-medium-violet-red px-2 py-1 ">
                      Đăng nhập
                    </button>
                  </Link>
                </>
              )}
            </div>
            <div className="w-[40%] bg-orchid-purple rounded-tr-2xl rounded-br-2xl"></div>
          </div>
        </div>
      </EmptyLayout>
    
  );
}
