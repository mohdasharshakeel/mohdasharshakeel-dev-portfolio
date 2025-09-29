import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div
      id="work"
      className="w-full px-4 sm:px-8 md:px-[10%] lg:px-[12%] py-10 scroll-mt-20"
    >
      {/* Headings */}
      <h4 className="text-center mb-2 text-md sm:text-lg font-Ovo">
        Creative Showcase
      </h4>
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo">
        Latest Creations
      </h2>
      <p className="text-center max-w-xl sm:max-w-2xl mx-auto mt-5 mb-12 text-sm sm:text-base font-Ovo">
        Step into my web development realm! Explore innovative projects
        highlighting cutting-edge front-end solutions, interactive UIs, and
        performance-optimized designs.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 mt-1">
        {workData.map((projects, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${projects.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{projects.title}</h2>
                <p className="text-sm text-gray-700">{projects.description}</p>
              </div>

              {/* Send Icon as Link */}
              <a
                href={projects.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
              >
                <Image src={assets.send_icon} alt="sendIcon" className="w-5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500"
      >
        Show more
        <Image
          src={assets.right_arrow_bold}
          alt="right bold"
          className="w-4"
        />
      </a>
    </div>
  );
};

export default Work;
