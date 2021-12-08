import Image from 'next/image'
import facebook from '../../../public/facebook.svg'
import twitter from '../../../public/twitter.svg'
import instagram from '../../../public/instagram.svg'
import github from '../../../public/github.svg'
import sandbox from '../../../public/sandbox.svg'
import dribble from '../../../public/dribble.svg'

const Footer = () => {
  return (
    <footer className=' -m-px grid auto-rows-max text-primary-white bg-primary-black text-center place-items-center lg:flex lg:flex-row lg:justify-between lg:px-36 lg:py-20 lg:items-center'>
      <p>© Copyright 2021 | Mateo Martínez</p>
      <div className='grid grid-cols-3 gap-y-6 py-10 w-56 lg:flex lg:flex-row lg:justify-around lg:w-80'>
        <Image className='cursor-pointer' alt='facebook' src={facebook} weight={40} height={40} />
        <Image className='cursor-pointer' alt='twitter' src={twitter} weight={40} height={40} />
        <Image className='cursor-pointer' alt='instagram' src={instagram} weight={40} height={40} />
        <Image className='cursor-pointer' alt='sandbox' src={sandbox} weight={40} height={40} />
        <Image className='cursor-pointer' alt='github' src={github} weight={40} height={40} />
        <Image className='cursor-pointer' alt='dribble' src={github} weight={40} height={40} />
      </div>
    </footer>
  )
}

export default Footer
