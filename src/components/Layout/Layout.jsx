import React from 'react'
import About from '../About/About'
import Hero from '../hero/Hero'
import Projects from '../Projects/Projects'
import Work from '../Work/Work'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = () => {
  return (
    <div className='h-screen'>
      <NavBar />
      <Hero />
      <Projects />
      <About />
      <Work />
      <Footer />
    </div>
  )
}

export default Layout
