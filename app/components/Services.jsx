import { serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='servies'  className="w-full px-[12%] py-10 scroll-mt-20">
       <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
      <h2 className="text-center text-5xl font-Ovo ">Value I Deliver</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
       Transforming ideas into powerful digital products — I design and develop full-stack solutions with precision, performance, and creativity. From concept to deployment, I deliver modern, scalable, and impactful experiences that truly stand out.
      </p>
      <div className='grid grid-cols-4 gap-6 my-10 '>
        {serviceData.map(({icon, title, description, link}, index )=>( 
          <div key={index}>
          <Image src={icon} alt='' className='w-10'/>
          <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
          <p className='text-sm text-gray-600 leading-5'>
            {description}
          </p>

          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Services
