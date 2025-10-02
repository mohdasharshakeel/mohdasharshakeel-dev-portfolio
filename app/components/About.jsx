import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import {motion} from "motion/react";

const About = ({isDarkMode}) => {
  return (
    <motion.div id="about" className="w-full px-6 sm:px-12 lg:px-[12%] py-10 scroll-mt-20"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1 }}
    >
      <h4 className="text-center mb-2 text-lg sm:text-xl font-Ovo">Who I Am</h4>
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo mb-10">What I Do</h2>

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        {/* User Image */}
        <div className="w-48 sm:w-64 lg:w-80 rounded-3xl flex-shrink-0">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>

        {/* Description & Info */}
        <div className="flex-1 flex flex-col items-center lg:items-start">
          {/* Description */}
          <p className="mb-8 sm:mb-10 text-center lg:text-left max-w-xl sm:max-w-2xl font-Ovo text-sm sm:text-base">
            Full Stack Developer specializing in React, Next.js, Node.js & MongoDB. Built multiple live projects, developing scalable, high-performance web apps with responsive, modern UIs. Skilled in RESTful APIs, AI integration, and performance optimization.
          </p>

          {/* Info List */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-2xl mb-8">
            {infoList.map(({ icon, iconDark , title, description }, index) => (
              <li
                key={index}
                className="border border-gray-300 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-lightHover hover:translate-y-1 transition-transform duration-300 dark:border-white dark:hover:bg-darkHover/50 "
              >
                <Image src={ isDarkMode ? iconDark : icon} alt={title} className="w-6 sm:w-7 mt-2" />
                <h3 className="my-2 sm:my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm dark:text-white/80">{description}</p>
              </li>
            ))}
          </ul> 

          {/* Tools */}
          <h4 className="my-4 sm:my-6 text-gray-700 font-Ovo text-sm sm:text-base dark:text-white/80">Tools I Use</h4>
          <ul className="flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-10 sm:w-12 aspect-square border border-gray-300 rounded-lg cursor-pointer hover:translate-y-1 transition-transform duration-300"
              >
                <Image src={tool} alt="icon" className="w-4 sm:w-6" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

