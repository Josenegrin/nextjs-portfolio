import React from 'react'
import Image from 'next/image'
import Landing1 from '../../../public/Thumbnail-Landing page pruebas remotas 1.svg'
import Button from '../Button/Button'
const Projects = () => {
  return (
    <section className='container container grid auto-rows-max place-items-center bg-primary-black'>
      <Image 
      className='top-0'
      alt='Thumbnail landing one'
      src={Landing1}
      height={270}
      width={360}
      />
      <div className='px-6 pt-6 pb-16'>
      <h4 className='text-primary-white pb-2'>Landing Page de Pruebas Remotas</h4>
      <p className='text-primary-grey pb-2'>Aprende a construir una eficiente y bonita Landing Page que puedes aplicar para todo tipo de proyecto personal.</p>
      <Button text='Ver proyecto'/>
      <Button black text='Ver código'/>
      </div>
    </section>
  )
}

export default Projects
