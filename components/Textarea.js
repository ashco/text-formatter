const Textarea = ({type, value, disabled = false, handleChange, placeholder}) => {
  return (
      <textarea onChange={handleChange} value={value} disabled={disabled} placeholder={placeholder} className={`${type == 'output' ? 'border-4 border-black' : ''}  w-full h-full p-2 disabled:bg-white placeholder-gray-800`} />
  )
}

export default Textarea