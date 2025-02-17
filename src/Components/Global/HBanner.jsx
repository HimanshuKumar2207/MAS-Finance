import React from "react";
import { motion } from "framer-motion";

const HBanner = ({ heading, desc, img, children }) => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src={img}
        alt="home_banner"
        loading="lazy"
        className="w-full h-[420px] sm:h-[500px] md:h-[600px] lg:h-[850px] object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[420px] sm:h-[500px] md:h-[600px] lg:h-[850px] bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[850px] flex flex-col justify-center items-center">
        {/* Heading with Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-center font-montserrat mb-6 sm:mb-8 md:mb-10 lg:mb-4"
        >
          {heading}
        </motion.h1>

        {/* Description with Animation */}
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-white text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-center w-[90%] sm:w-[80%] md:w-[70%] lg:w-[70%] xl:w-[70%]"
        >
          {desc}
        </motion.h3>

        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};

export default HBanner;
