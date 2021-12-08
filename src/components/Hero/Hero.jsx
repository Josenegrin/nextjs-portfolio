import User from '../../../public/User.svg'
import Image from 'next/image'
import Button from '../Button/Button'
const Hero = () => {
  return (
    <section className='bg-primary-black grid auto-rows-max place-items-center px-6 pt-6 pb-16 lg:grid-cols-2 lg:grid-flow-col lg:py-20 lg:px-36 lg:-mb-0.5'>
      <div className='relative w-60 h-60 pb-6 lg:col-start-2 lg:col-end-3 lg:row-span-3 lg:w-80 lg:h-80'>
        <Image alt='User Picture' layout='fill' objectFit='cover' src={User} />
      </div>
      <h4 className='text-primary-white pt-6 pb-4 lg:col-start-1 lg:col-end-2'>
        Hola ✋, Soy Mateo Martínez un Frontend, centrado en la creación de productos digitales durante los últimos 4 años.
      </h4>
      <p className='text-primary-grey pb-6 lg:col-start-1 lg:col-end-2'>
        Me encanta centrarme en los detalles de las experiencias de nuevos productos con una implementación en código perfecta. Pero los
        grandes productos no comienzan ahí, comienzan con una sólida colaboración con los compañeros de equipo de investigación, ingeniería
        y productos para comprender los problemas y las circunstancias de los clientes.
      </p>
      <Button otherClass='lg:col-start-1 lg:col-end-2' buttonColor='blue' text='Descargar currículum' />
    </section>
  )
}

export default Hero
