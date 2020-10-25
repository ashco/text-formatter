const Textarea = ({value, disabled = false, handleChange}) => {
  return (
    <div className="w-vw">
      <textarea onChange={handleChange} value={value} disabled={disabled} className="border-4 border-black w-full h-48" />
    </div>
  )
}

export default Textarea