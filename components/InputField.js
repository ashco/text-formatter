const InputField = ({name, value, handleChange}) => {
  return (
      <input placeholder={name} name={name} onChange={handleChange} value={value} className="w-full h-12 p-2 placeholder-gray-800 rounded-none" />
  )
}

export default InputField