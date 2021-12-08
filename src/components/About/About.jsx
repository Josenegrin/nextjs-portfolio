import React from 'react'
import Work from '../Work/Work'
import AboutHabilities from './AboutHabilities'
import AboutProjects from './AboutProjects'

const About = () => {
  return (
    <section className='grid auto-rows-max pt-10 pb-20 px-6 bg-primary-black text-primary-white lg:py-20 lg:px-80'>
      <h3 className='pb-4 lg:hidden'>Experiencia</h3>
      <h1 className='hidden lg:pb-4 lg:block'>Experiencia</h1>
      <h4>Tengo más de 3 años de experiencia en Frontend.</h4>
      <div className='border-2 mb-4'></div>
      <AboutProjects
        title='Marvol'
        area='Frontend'
        year='2018'
        description='¡Marvol.com es el sitio oficial de Marvol Entertainment! Explore películas, personajes, cómics, programas de televisión, videos y más oficiales de Marvel.'
      />
      <AboutProjects
        title='Niko'
        area='Frontend'
        year='2019'
        description='Encuentra lo mejor de Niko, con productos nuevos cada semana y disfruta del envío gratis. ¡Únete a nosotros! y accede como miembro a productos y beneficios exclusivos. '
      />
      <AboutProjects
        title='Netnet'
        area='Frontend'
        year='2020'
        description='Netnet es una de las plataformas de entretenimiento con más ranking a nivel mundial y detrás de las películas y series que nos ofrece, hay un diseño con el que está estructurada y organizada cada sección de la plataforma.'
      />
      <AboutHabilities
        title='Habilidades principales'
        subTitle_1='Diseño de interfaz de usuario y web'
        description_1='Websites, web experiences.'
        subTitle_2='Front-end Development'
        description_2='Html, CSS, JavaScript'
      />
      <AboutHabilities
        title='Herramientas'
        subTitle_1='Diseño'
        description_1='Sketch, Abstract, Zeplin, Figma.'
        subTitle_2='Programación'
        description_2='VSCode, Sketch, SourceTree, Slack, Evernote, Spark, Todoist, Asana, Google Drive Google Calendar.'
      />
      <Work />
    </section>
  )
}

export default About
