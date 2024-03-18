import Image from "next/image";
import React from "react";

type Props = {};

export default function IntroCard({}: Props) {
  return (
    <div className="cardIntro">
      <p className="leading-8 text-[22px] font-semibold">Intro</p>
      <div className="overflow-hidden rounded-br-xl flex flex-1">
        <img
          loading="lazy"
          className="object-contain flex-1 block rounded-br-xl max-w-[800px] "
          src="https://quizizz.com/wf/assets/657aeb1801fdaf8893523684_Card_Visual.webp"
        />
      </div>
    </div>
  );
}
