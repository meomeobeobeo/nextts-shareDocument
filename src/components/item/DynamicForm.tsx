import React, { useEffect, useState } from "react";

type Props = {};
export type InputField = {
  key: string;
  value: string;
};

type InputFieldProps = {
  handleRemoveField?: (index: number) => void;
  handleFieldChange: (index: number, inputField: InputField) => void;
  index: number;
};

function InputField({
  handleRemoveField,
  index,
  handleFieldChange,
}: InputFieldProps) {
  const [inputField, setInputField] = useState<InputField>({
    key: "",
    value: "",
  });

  const handleInputFieldChange = (
    valueChange: string,
    type: "key" | "value"
  ) => {
    const newInputField = {
      ...inputField,
      [type]: valueChange,
    };

    setInputField(newInputField);
    handleFieldChange(index, newInputField);
  };

  return (
    <div className="w-full flex flex-row justify-start items-center relative gap-1">
      {/* for key */}
      <div className="w-[40%] m-4">
        <label
          htmlFor="key"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Key
        </label>
        <input
          value={inputField["key"]}
          type="text"
          id="key"
          className="p-2 w-full  rounded-md border-gray-400 border-2 focus:outline-light-blue "
          required
          onChange={(e) => {
            handleInputFieldChange(e.target.value, "key");
          }}
        />
      </div>

      {/* for value */}
      <div className="w-[40%] m-4">
        <label
          htmlFor="value"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Value
        </label>
        <input
          value={inputField["value"]}
          type="text"
          id="value"
          className="p-2 w-full  rounded-md border-gray-400 border-2 focus:outline-light-blue "
          required
          onChange={(e) => {
            handleInputFieldChange(e.target.value, "value");
          }}
        />
      </div>
      <button
        onClick={() => {
          if (handleRemoveField) handleRemoveField(index);
        }}
        className="px-2 py-1 font-semibold bg-red-400 hover:opacity-[0.8] text-white rounded-md"
      >
        Remove
      </button>
    </div>
  );
}

export default function DynamicForm({}: Props) {
  const [listKeyAndValue, setListKeyAndValue] = useState<Array<InputField>>([
    {
      key: "",
      value: "",
    },
  ]);
  console.log(listKeyAndValue);

  const handleAddField = () => {
    setListKeyAndValue([
      ...listKeyAndValue,
      {
        key: "",
        value: "",
      },
    ]);
  };

  const handleRemoveField = (index: number) => {
    const newList = [...listKeyAndValue];
    newList.splice(index, 1);
    setListKeyAndValue(newList);
  };

  const handleFieldChange = (index: number, newInputField: InputField) => {
    setListKeyAndValue((prev) => {
      prev[index] = newInputField;
      return prev;
    });
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full max-h-60 flex flex-col justify-between overflow-auto p-1">
        {listKeyAndValue.map((value, index) => {
          return (
            <InputField
              index={index}
              handleFieldChange={handleFieldChange}
              handleRemoveField={handleRemoveField}
              key={index}
            />
          );
        })}
      </div>
      <div className="w-full flex justify-start m-4">
        <button
          onClick={() => {
            handleAddField();
          }}
          className="py-1 px-8 border-dashed border-2 rounded-lg border-light-blue bg-white font-semibold hover:opacity-[0.7] hover:text-h-gray"
        >
          Add new field
        </button>
      </div>
    </div>
  );
}
