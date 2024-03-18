import { MyIconProps } from '@/model'
import Image from 'next/image'
import React from 'react'
import icon from "@iconImg/google.png";


export default function GoogleIcon(props: MyIconProps) {
  return (
    <Image
      src={icon}
      alt="Picture of the author"
      width={props.width || 24}
      height={props.height || 24}
      className={props.styles || ''}
    />
  )
}