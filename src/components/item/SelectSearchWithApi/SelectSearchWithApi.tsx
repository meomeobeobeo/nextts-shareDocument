import { SelectSearchComponentProps } from "@/model";
import React from "react";
import makeAnimated from "react-select/animated";
import Select, { StylesConfig } from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const animatedComponents = makeAnimated();

const styles: StylesConfig = {
  control: (styles) => ({
    ...styles,

    ":focus": {
      outline: "none",
    },
    borderRadius: 12,
  }),
};
export default function SelectSearchWithApi({
  className,
  action,
  apiName,
}: SelectSearchComponentProps) {
  return (
    <Select
      styles={styles}
      components={animatedComponents}
      onInputChange={(e) => {
        console.log(e);
      }}
      className="w-[60%]"
      options={options}
    />
  );
}
