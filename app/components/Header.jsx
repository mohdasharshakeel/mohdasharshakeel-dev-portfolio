import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div> 
        <Image src={assets.profile-img} alt='' className='rounded-full w-32 '/>
      </div>
    </div>
  )
}

export default Header
