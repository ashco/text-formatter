const SelectField = ({name, value, handleChange}) => {
  const options = name.substring(1, name.length - 1).split('&');
  console.log(value, options)

  return (
      <select name={name} onChange={handleChange} value={value} className="w-full h-12 p-2 placeholder-gray-800 rounded-none">
        <option val=''></option>
        {options.map(opt => <option key={opt} val={opt}>{opt}</option>)}
      </select>
  )
}

export default SelectField