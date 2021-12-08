import React from 'react'
import About from '../About/About'
import Hero from '../hero/Hero'
import Projects from '../Projects/Projects'
import Work from '../Work/Work'
import Footer from './Footer'
import NavBar from './NavBar'
import ThumbnailLanding from '../../../public/Thumbnail-Landing page pruebas remotas 1.svg'
import ThumbnailTiendita from '../../../public/Thumbnail-Tiendita.svg'
import ThumbnailSlacker from '../../../public/Thumbnail-slacker 1.svg'
import ThumbnailPrincipeFresco from '../../../public/Thumbnail-Principe Fresco.svg'

const Layout = () => {
  return (
    <div className='h-screen'>
      <NavBar />
      <Hero />
      <Projects
        alt='Thumbnail Landing Project'
        imageSource={ThumbnailLanding}
        title='Landing Page de Pruebas Remotas'
        description='Aprende a construir una eficiente y bonita Landing Page que puedes aplicar para todo tipo de proyecto personal.'
        gradientClass='gradient_lg_dark'
        first='white'
      />
      <Projects
        alt='Thumbnail Tiendita Project'
        imageSource={ThumbnailTiendita}
        title='Tiendita'
        description='Realiza la compra de tu despensa semanal de manera digital! Tiendita te ayuda a protegerte de los contagios y no extrañar ninguno de los productos del supermercado en tu hogar.'
        gradientClass='gradient_blue_to_green'
        titleColor='text-primary-black'
        descriptionColor='text-primary-black'
        right
        first='black'
        second='transparent-black'
      />
      <Projects
        alt='Thumbnail Slacker Project'
        imageSource={ThumbnailSlacker}
        title='Slacker'
        description='Trabaja de manera coordinada y toma decisiones más rápido al reunir toda la comunicación laboral en un solo lugar.'
        gradientClass='gradient_purple_to_pink'
        first='white'
      />
      <Projects
        alt='Thumbnail Principe Fresco Project'
        imageSource={ThumbnailPrincipeFresco}
        title='Principe Fresco'
        description='Toda la tienda se basa en ropa deportiva clásica con toques coloridos inspirados en la esencia del protagonista. Aparte de las prendas de vestir, podemos encontrar maletas, backpacks, calcetines, balones, cases para iPhone y hasta aromatizantes para auto.'
        gradientClass='gradient_coral'
        titleColor='text-primary-black'
        descriptionColor='text-primary-black'
        right
        first='black'
        second='transparent-black'
      />
      <About />
      <Footer />
    </div>
  )
}

export default Layout
