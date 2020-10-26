import React from 'react'

const Button = ({type, children, onClick}) => {
  return (
    <button onClick={onClick} className={`${type == 'primary' ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-black hover:text-white'} flex items-center justify-around w-full h-12 border-4 font-medium text-lg border-black`}>
      {children}
    </button>
  )
}

export default Button
