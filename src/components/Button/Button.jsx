import React from 'react'

const Button = ({blue, black, white, text}) => {

  const buttonStyles = blue ? 'cursor-pointer bg-primary-blue w-full px-6 py-3 rounded-sm h-13': black ? 'cursor-pointer py-3 px-6  bg-primary-black rounded-sm border-primary-white text-primary-white border-2 w-full' : 'cursor-pointer mb-4 py-3 px-6 bg-primary-white rounded-sm border-primary-white w-full'

  return (
    <button className={buttonStyles}>
      {text}
    </button>
  )
}

export default Button
