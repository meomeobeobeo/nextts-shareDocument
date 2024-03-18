import FormUploadDocument from "@/components/FormUploadDocument/FormUploadDocument";
import Dashboard from "@/components/layouts/dashboard/dashboard";
import React from "react";

type Props = {};

export default function CreateNewDoc({}: Props) {
  return <Dashboard>
    <div className="flex w-[100%] h-[100%] justify-center items-center">
      <FormUploadDocument/>
    </div>
  </Dashboard>;
}
