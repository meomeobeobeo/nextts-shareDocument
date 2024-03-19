"use client";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import StatusForm from "./StatusForm";
import FormBody from "./formBody/FormBody";
import * as api from "@api-client";
type Props = {};

const formView = [
  {
    id: 1,
    formName: "Upload",
  },
  {
    id: 2,
    formName: "Detail",
  },
  {
    id: 3,
    formName: "Done",
  },
];

export default function FormUploadDocument({}: Props) {
  // step for form upload
  const [step, setStep] = useState<number>(1);
  const [formName, setFormName] = useState<string>("Upload");
  const handleIncreaseStep = () => {
    setStep((prev) => prev + 1);
  };
  const handleSetFormBody = useCallback((formName: string) => {
    setFormName(formName);
  }, []);
  useEffect(() => {
    api.testRequest().then((res) => {
      console.log(res.data);
    });
  }, []);

  //
  useLayoutEffect(() => {
    if (step > formView.length) {
      setStep(1);
    }
  }, [step]);

  return (
    <div className="w-[80%] h-[600px] bg-white rounded-2xl p-2 flex flex-col items-center">
      {/* header process */}
      <div className="w-full flex items-center mt-10">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-row justify-between items-center relative">
            {formView.map((format, index) => {
              return (
                <StatusForm
                  formChange={handleSetFormBody}
                  stepFomat={format}
                  key={index}
                  stepName="Upload"
                  stepNumber={step}
                />
              );
            })}
          </div>
          <FormBody formName={formName} />
          <div
            onClick={handleIncreaseStep}
            className="p-2 bg-purple-400 rounded-lg cursor-pointer mt-1 absolute bottom-12 "
          >
            Next step
          </div>
        </div>
      </div>
    </div>
  );
}
