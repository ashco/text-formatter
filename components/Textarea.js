import React from 'react';

const Textarea = React.forwardRef(({value, disabled = false, handleChange, placeholder, handleScroll}, ref) => {
  return (
      <textarea ref={ref} onChange={handleChange} onScroll={handleScroll} value={value} disabled={disabled} placeholder={placeholder} className={`w-full h-full sm:h-full p-2 disabled:bg-white placeholder-gray-800 rounded-none bg-transparent resize-none`} style={{scrollbarWidth: 'none'}} />
  )
});

export default Textarea

