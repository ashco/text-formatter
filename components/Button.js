import React from 'react'

const Button = ({children, onClick}) => {
  return (
    <button onClick={onClick} className='bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 text-white flex items-center justify-around w-full h-12 font-medium text-lg'>
      {children}
    </button>
  )
}

export default Button
