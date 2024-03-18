import { MyIconProps } from "@/model";
import React from "react";
import icon from "@iconImg/facebook.png";
import Image from "next/image";

export default function FacebookIcons(props: MyIconProps) {
  return (
    <Image
      src={icon}
      alt="Picture of the author"
      width={props.width || 24}
      height={props.height || 24}
      className={props.styles || ''}
    />
  );
}
