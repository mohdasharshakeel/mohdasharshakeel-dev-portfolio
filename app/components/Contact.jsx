 import React from 'react'
 
 const Contact = () => {
   return (
     <div  id="contact"
      className=' w-full px-4 sm:px-8 md:px-[10%] lg:px-[12%] py-10 scroll-mt-20 bg-[url("/header-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto ] '>
       <h4 className="text-center mb-2 text-md sm:text-lg font-Ovo">
        Connect With Me
      </h4>
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo">
        Get In Touch
      </h2>
      <p className="text-center max-w-xl sm:max-w-2xl mx-auto mt-5 mb-12 text-sm sm:text-base font-Ovo">
        I'd Love to hear from you! if you have any questions, comments, or feedback, please use the form below
      </p>
      <form className='max-w-2xl mx-auto' >
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <input type="text" placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
          <input type="email" placeholder='Enter your Email' required />

        </div>
        <textarea rows='6' placeholder='Enter your message' required></textarea>
        <button type='submit'>Submit now</button>
      </form>
     </div>
   )
 }
 
 export default Contact
 