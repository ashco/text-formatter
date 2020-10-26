const InputField = ({placeholder, name, value, handleChange}) => {
  return (
      <input placeholder={placeholder} name={name} onChange={handleChange} value={value} className="w-full h-12 p-2 placeholder-gray-800" />
  )
}

export default InputField