import React from "react";

const InputField = ({ name, handleChange }) => {
  return (
    <input
      placeholder={name}
      name={name}
      onChange={handleChange}
      className="w-full h-12 p-2 placeholder-gray-800 rounded-none"
    />
  );
};

export default InputField;
