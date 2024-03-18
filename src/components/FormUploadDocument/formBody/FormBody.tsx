import React from 'react'
import UploadFileForm from './UploadFileForm'
import DetailForm from './DetailForm'
import DoneForm from './DoneForm'

type Props = {
    formName : string
}

export default function FormBody({formName}: Props) {
  return (
    <div className='w-full h-[320px] mt-8 flex justify-center'>
        {
            formName === 'Upload' && <UploadFileForm/>
        }
        {
            formName === 'Detail' && <DetailForm/>
        }
        {
            formName === 'Done' && <DoneForm/>
        }
    </div>
  )
}