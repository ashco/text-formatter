const Textarea = ({className, type, value, disabled = false, handleChange}) => {
  return (
      <textarea onChange={handleChange} value={value} disabled={disabled} className={`${type == 'output' ? 'border-4 border-black' : ''}  w-full h-48`} />
  )
}

export default Textarea