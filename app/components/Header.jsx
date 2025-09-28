import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div> 
        <Image src={assets.profile-img} alt='' className='rounded-full w-32 '/>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo '>Hi! I'm Mohd Ashar Shakeel  <Image src={assets.hand_icon } alt='' className='  w-6'/></h3>
      </div>
    </div>
  )
}

export default Header
