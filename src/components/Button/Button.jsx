import React from 'react'

const Button = ({ buttonColor, text, otherClass }) => {
  const buttonStyles = `${otherClass} cursor-pointer min-w-full lg:min-w-min px-6 py-3 rounded-sm h-13 ${
    buttonColor === 'blue'
      ? ' bg-primary-blue'
      : buttonColor === 'black'
      ? 'bg-primary-black  text-primary-white border-primary-white mb-4 lg:mb-0 lg:py-3 lg:px-6 lg:h-12'
      : buttonColor === 'white'
      ? 'bg-primary-white border-primary-white mb-4 lg:mb-0 lg:py-3 lg:px-6 lg:h-12'
      : buttonColor === 'transparent-black'
      ? 'bg-transparent border-primary-black text-primary-black border-2 box-border lg:py-3 lg:px-6 lg:h-12'
      : 'bg-transparent border-primary-white text-primary-white border-2 box-border lg:py-3 lg:px-6 lg:h-12'
  }`

  return <button className={buttonStyles}>{text}</button>
}

export default Button
