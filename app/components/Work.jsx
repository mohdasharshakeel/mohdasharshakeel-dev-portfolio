import { workData } from '@/assets/assets'
import React from 'react'

const Work = () => {
  return (
    <div id='work' className="w-full px-4 sm:px-8 md:px-[10%] lg:px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-md sm:text-lg font-Ovo">Creative Showcase</h4>
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo">Latest Creations</h2>
      <p className='text-center max-w-xl sm:max-w-2xl mx-auto mt-5 mb-12 text-sm sm:text-base font-Ovo'>
        Step into my web development realm! Explore innovative projects highlighting cutting-edge front-end solutions, interactive UIs, and performance-optimized designs.
      </p>
      <div>
        {workData.map((projects, index)=>(
            <div key={index} style={{backgroundImage: `url(${projects.bgImage})`}}>
                
            </div>
        ))}
      </div>
    </div>  
  )
}

export default Work
