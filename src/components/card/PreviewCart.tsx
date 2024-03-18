import Image from "next/image";
import React from "react";
import test from "@image/test.jpg";
type Props = {
  className?: React.ComponentProps<"div">["className"];
};

export default function PreviewCart({ className }: Props) {
  return (
    <div className="w-[308px] min-h-[320px] flex flex-col rounded-lg bg-white justify-start items-start relative hover:scale-110 transition-transform duration-300 ease-in-out transform cursor-pointer">
      <Image className="rounded-t-lg" src={test} alt="test" />

      {/* tag */}
      <div className="w-full flex flex-col justify-start items-start mt-5 ml-2 gap-1">
        <div className="bg-light-purple rounded-md border-[2px] border-middle-purple box-border p-[2px] font-semibold text-xs text-orchid-purple  ">
          QUIZZ
        </div>
        <div className="text-lg font-semibold text-black">Trò chơi con mực</div>
      </div>

      <div className="absolute bottom-4 p-1 ml-1">
        <span className="text-sm font-semibold text-h-gray ">
          12 câu hỏi .{" "}
        </span>
        <span className="text-sm font-semibold text-h-gray">
          198,8k lượt chơi
        </span>
      </div>
    </div>
  );
}
