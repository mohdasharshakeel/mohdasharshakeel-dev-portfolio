import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <> 
          <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4  flex items-center justify-between z-50 '>
              <a href="">
                  <Image src={assets.logo} alt='nameWhite'  className='w-28 cursor-pointer mr-14 '/>
              </a>
              <ul>
                  <li><a href="#top">Home</a></li>
                  <li><a href="#top">ABout me</a></li>
                  <li><a href="#top">servies</a></li>
                  <li><a href="#top">My Work</a></li>
                  <li><a href="#top">Contant me</a></li>
              </ul>
              <div>
                  <a href="#contact">Contact <Image src={assets.arrow_icon} alt='logo' className='w-3 '/></a>
              </div>
      </nav>
    </>
  )
}

export default Navbar
