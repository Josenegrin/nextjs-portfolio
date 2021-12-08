import React from 'react'
import Image from 'next/image'

import Button from '../Button/Button'
const Projects = ({ alt, imageSource, title, description, gradientClass, descriptionColor, titleColor, right, first, second }) => {
  const bgClass = `grid auto-rows-max place-items-center bg-primary-black lg:grid-cols-2 lg:grid-flow-col lg:h-600 lg:auto-rows-auto ${gradientClass}`

  const titleClass = `pb-2 ${titleColor ? titleColor : 'text-primary-white'}`

  const descriptionClass = `pb-2 ${descriptionColor ? descriptionColor : 'text-primary-grey'}`

  const imageClass = `relative top-0 h-64 w-screen lg:h-full lg:w-full ${right ? 'lg:col-start-2 lg:col-end-3' : ''}`

  const textContainerClass = `px-6 pt-6 pb-16 lg:pt-44 lg:pb-44 ${right ? 'lg:pl-36' : 'lg:pr-36'}`
  return (
    <section className={bgClass}>
      {imageSource && (
        <div className={imageClass}>
          <Image alt={alt} src={imageSource} layout='fill' objectFit='cover' />
        </div>
      )}
      <div className={textContainerClass}>
        <h4 className={titleClass}>{title}</h4>
        <p className={descriptionClass}>{description}</p>
        <div className='lg:flex'>
          <Button buttonColor={first} otherClass='lg:mr-4' text='Ver proyecto' />
          <Button buttonColor={second} text='Ver código' />
        </div>
      </div>
    </section>
  )
}

export default Projects
