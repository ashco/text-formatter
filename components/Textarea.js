const Textarea = ({value, disabled = false, handleChange, placeholder}) => {
  return (
      <textarea onChange={handleChange} value={value} disabled={disabled} placeholder={placeholder} className={`w-full h-full sm:h-full p-2 disabled:bg-white placeholder-gray-800 rounded-none bg-transparent resize-none`} />
  )
}

export default Textarea

