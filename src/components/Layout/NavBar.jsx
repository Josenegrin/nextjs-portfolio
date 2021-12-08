import Link from 'next/link'
const NavBar = () => {
  return (
    <nav className='-mr-px -mb-px grid grid-cols-2 sm:grid-cols-2 p-6 gap-8 bg-primary-black text-primary-white lg:px-36'>
      <span className='text-xl'>Jose Negrin</span>
      <div className='hidden sm:flex'>
        <ul className='hidden sm:flex justify-around items-center w-96'>
          <li>
            <Link href='/'>
              <a>Proyectos</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Experiencia</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Contacto</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className=' flex justify-end cursor-pointer sm:hidden'>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
        </svg>
      </div>
    </nav>
  )
}

export default NavBar
