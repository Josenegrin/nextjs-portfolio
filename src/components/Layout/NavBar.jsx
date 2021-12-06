const NavBar = () => {
  return (
    <nav className='grid grid-cols-2 p-6 gap-8 bg-primary-black text-primary-white'>
      <div >Jose Negrin</div>
      <div className=' flex justify-end cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg></div>
    </nav>
  )
}

export default NavBar
