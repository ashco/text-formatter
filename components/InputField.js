﻿const InputField = ({placeholder, value, handleChange}) => {
  return (
    <div className="w-vw">
      <input placeholder={placeholder} onChange={handleChange} value={value} className="border-4 border-black w-full h-12" />
    </div>
  )
}

export default InputField