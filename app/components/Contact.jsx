"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", `${process.env.NEXT_PUBLIC_EMAIL_KEY}`);


    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message || "Something went wrong!");
    }
  };

  return (
    <div
      id="contact"
      className='w-full px-4 sm:px-8 md:px-[10%] lg:px-[12%] py-10 scroll-mt-20 
                 bg-[url("/header-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none  '
    >
      {/* Heading */}
      <h4 className="text-center mb-2 text-md sm:text-lg font-Ovo">
        Connect With Me
      </h4>
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo">
        Get In Touch
      </h2>
      <p className="text-center max-w-xl sm:max-w-2xl mx-auto mt-5 mb-12 text-sm sm:text-base font-Ovo">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      {/* Form */}
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        {/* Inputs in grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className="flex-1 p-3 outline-none border border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90 "
          />
          <input
            type="email"
            placeholder="Enter your Email"
            required
            name="email"
            className="flex-1 p-3 outline-none border border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90 "
          />
        </div>

        {/* Textarea */}
        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          name="message"
          className="w-full p-4 outline-none border border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 
                     bg-black/80 text-white rounded-full mx-auto 
                     hover:bg-black duration-500 font-Ovo dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover  "
        >
          Submit <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </button>

        {/* Result Message */}
        {result && (
          <p className="mt-4 text-center font-Ovo">
            {result}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
