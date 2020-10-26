import React from 'react'

const Button = ({children, onClick}) => {
  return (
    <button onClick={onClick} className='bg-black text-white hover:bg-white hover:text-black flex items-center justify-around w-full h-12 border-4 font-medium text-lg border-black'>
      {children}
    </button>
  )
}

export default Button
