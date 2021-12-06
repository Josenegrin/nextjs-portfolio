import User from '../../../public/User.svg'
import Image from 'next/image'
import Button from '../Button/Button'
const Hero = () => {
  return (
    <section className='bg-primary-black container grid auto-rows-max place-items-center px-6 pt-6 pb-16'>
      <Image
      className='pb-6'
      alt='User Picture'
      width={250}
      height={250}
      src={User}
      />
      <h4 className='text-primary-white pt-6 pb-4'>Hola ✋, Soy Mateo Martínez un Frontend, centrado en la creación de productos digitales durante los últimos 4 años.</h4>
      <p className='text-primary-grey pb-6'>Me encanta centrarme en los detalles de las experiencias de nuevos productos con una  implementación en código perfecta. Pero los grandes productos no comienzan ahí, comienzan con una sólida colaboración con los compañeros de equipo de investigación, ingeniería y productos para comprender los problemas y las circunstancias de los clientes.</p>
      <Button blue text='Descargar currículum'/>
    </section>
  )
}

export default Hero
