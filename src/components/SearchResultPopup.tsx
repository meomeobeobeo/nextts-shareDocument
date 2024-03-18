import React, { useEffect, useRef } from "react";
import "@style/global.scss";
type Props = {
  className?: React.ComponentProps<"div">["className"];
  onOutsideClick?: any;
};

export default function SearchResultPopup({
  className,
  onOutsideClick,
}: Props) {
  
    const wrapperRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event:any) => {
          if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            onOutsideClick();
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);



  return (
    <div
      ref={wrapperRef}
      className={`${className} border-b-2 border-h-gray shadow-sm'`}
    >
      <div className="w-full font-semibold text-sm py-4 mt-1 pl-8  border-b-[1px] border-h-gray  ">
        Gần đây
      </div>
      <div className="w-full flex flex-col justify-start items-center max-h-32 overflow-y-auto pb-1  ">
        <div className="w-full py-2 px-2 font-semibold text-sm cursor-pointer hover:bg-lilac-faded ">
          Toán cao cấp
        </div>
        <div className="w-full py-2 px-2 font-semibold text-sm cursor-pointer hover:bg-lilac-faded ">
          Toán cao cấp
        </div>
        <div className="w-full py-2 px-2 font-semibold text-sm cursor-pointer hover:bg-lilac-faded ">
          Toán cao cấp
        </div>
        <div className="w-full py-2 px-2 font-semibold text-sm cursor-pointer hover:bg-lilac-faded ">
          Toán cao cấp
        </div>
        <div className="w-full py-2 px-2 font-semibold text-sm cursor-pointer hover:bg-lilac-faded ">
          Toán cao cấp
        </div>
      </div>
    </div>
  );
}
