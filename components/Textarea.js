const Textarea = ({value, disabled = false, handleChange, placeholder}) => {
  return (
      <textarea onChange={handleChange} value={value} disabled={disabled} placeholder={placeholder} className={`w-full h-35 sm:h-full p-2 disabled:bg-white placeholder-gray-800`} />
  )
}

export default Textarea

