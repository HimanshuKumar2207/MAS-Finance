import React from "react";
import AboutBg from "../../assets/About-bg.jpg";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Our Story",
    content: `At MAS Financial, our mission is simple to make financial
               services accessible, transparent, and tailored to your needs. A
               team of experts came together to empower you to take control of
               your financial future through personalized loans, investments,
               mutual funds, and insurance. We build trust with clear advice,
               innovative tools, and unwavering support, guiding you through
               every financial decision. Whether you're just starting out or
               planning for retirement, we're here to help you make your
               financial dreams a reality.`,
  },
  {
    title: "Who We Are",
    content: `We are a passionate team of financial professionals dedicated to
              transforming the way you manage your money. At MAS Financial, we
              believe that financial security shouldn’t be complicated or out
              of reach. That's why we offer personalized services in loans,
              investments, mutual funds, and insurance, designed to fit your
              life. Our mission is to simplify financial decision-making,
              providing you with the tools, guidance, and support to make
              confident choices at every stage of your journey.`,
  },
  {
    title: "Our Vision",
    content: `At MAS Financial, our vision is to revolutionize the way people experience financial freedom. We are driven by the belief that everyone, no matter their background, should have access to the knowledge, tools, and resources needed to achieve financial success. Through innovative solutions, unwavering transparency, and personalized strategies, we aspire to be the trusted partner that guides you toward a future of financial empowerment, security, and limitless potential.`,
  },
];

const HAbout = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row  lg:py-24 mt-[150px] lg:mt-16 bg-gradient-to-r from-gray-100 to-gray-200 font-montserrat">
        {/* Left Section with Title */}
        <div className="w-full lg:w-1/3 relative lg:h-[875px]">
          {/* Background image container */}
          <div
            className="hidden lg:block absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${AboutBg})` }}
          ></div>

          {/* Gradient Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/30 to-transparent"></div>

          {/* Title with Animation */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10"
          >
            <h1 className="lg:text-white mb-24 decoration-red-700 underline underline-offset-8 font-bold text-4xl lg:text-7xl lg:mb-10 text-center transform hover:scale-105 transition-transform duration-300">
              About Us
            </h1>
          </motion.div>
        </div>

        {/* Right Section with Story */}
        <div className="w-full lg:w-2/3 bg-white px-6 lg:px-12 py-8 lg:py-10 shadow-xl ">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: index * 0.2 }}
              className="mb-8 lg:mb-10 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800">
                {section.title}
              </h1>
              <p className="text-sm lg:text-md text-gray-900 leading-relaxed mb-4">
                {section.content}
              </p>
              <div className="h-[2px] w-full bg-gradient-to-r from-red-700 to-red-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HAbout;
