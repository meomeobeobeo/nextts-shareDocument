import React, { useEffect, useState } from "react";

import styles from './styles.module.scss'



type Props = {
  stepNumber : number,
  stepName : string,
  stepFomat? : stepFomat,
  formChange? : any // function to change form
};

interface stepFomat {
  id : number,
  formName : string
}

export default function StatusForm({ stepName , stepNumber , stepFomat , formChange}: Props) {
  
  
  const [isActive , setIsActive] = useState(false)
  useEffect(()=>{

    if(stepNumber === stepFomat?.id){
      setIsActive(true)
      formChange(stepFomat.formName)
    }
    else{
      setIsActive(false)
    }
  },[stepNumber])

  
  return (
    <div className="w-[240px] flex justify-center items-center gap-2 relative">
      <div className= {`rounded-[100%]  w-[20px] h-[20px] flex justify-center items-center text-sm font-semibold ${isActive ? 'text-light-blue bg-more-light-blue' : "text-[#D3D9E0] bg-[#EDF0F2]" } `} >
        {stepFomat?.id}
      </div>
      <div className= {`font-semibold ${isActive ? 'text-light-blue' : "text-[#D3D9E0]" }`} >{stepFomat?.formName}</div>
      <div className={`absolute w-[200px] h-2 rounded-3xl top-8 ${isActive ? 'bg-light-blue' : 'bg-[#D3D9E0]'} `}></div>
    </div>
  );
}
