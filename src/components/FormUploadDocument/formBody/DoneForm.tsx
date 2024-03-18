import DynamicForm from '@/components/item/DynamicForm'
import React from 'react'

type Props = {}

export default function DoneForm({}: Props) {
  return (
    <div className="w-[90%] h-[400px] rounded-xl border-2 border-solid border-light-grey bg-[#F1F7FE] flex flex-col justify-start cursor-pointer">
       <div className='w-full text-center mt-4 font-semibold text-lg '>Hoàn thiện các thông tin mô tả về tài liệu của bạn</div>

       <div className='w-full flex flex-col mt-4 p-2 '>
        < DynamicForm/>
       </div>
    </div>
  )
} 