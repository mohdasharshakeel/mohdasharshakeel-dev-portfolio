import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className="w-full px-4 sm:px-8 md:px-[10%] lg:px-[12%] py-10 scroll-mt-20">
      {/* Section Titles */}
      <h4 className="text-center mb-2 text-md sm:text-lg font-Ovo">What I Offer</h4>
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo">Value I Deliver</h2>
      <p className='text-center max-w-xl sm:max-w-2xl mx-auto mt-5 mb-12 text-sm sm:text-base font-Ovo'>
        Transforming ideas into powerful digital products — I design and develop full-stack solutions with precision, performance, and creativity. From concept to deployment, I deliver modern, scalable, and impactful experiences that truly stand out.
      </p>

      {/* Services Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 mt-1'>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className='border border-gray-400 rounded-lg px-6 py-8 sm:px-8 sm:py-10 cursor-pointer 
                       hover:bg-[#fcf4ff] hover:translate-y-1 transition-transform duration-500'
          >
            <div className='w-12 h-12 sm:w-14 sm:h-14 mx-auto'>
              <Image src={icon} alt='' className='w-full h-full object-contain' />
            </div>
            <h3 className='text-lg sm:text-xl my-4 text-gray-700 text-center'>{title}</h3>
            <p className='text-sm sm:text-base text-gray-600 leading-5 text-center'>
              {description}
            </p>
            <a href={link} className='flex items-center justify-center gap-2 text-sm sm:text-base mt-3 text-blue-600 font-Ovo'>
              Read more <Image src={assets.right_arrow} alt='' className='w-4 sm:w-5'/>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
