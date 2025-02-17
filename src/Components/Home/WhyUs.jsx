import React from "react";
import AboutBg from "../../assets/whyus.jpg";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Deep Industry Knowledge",
    content:
      "At MAS Financial, we offer in-depth industry knowledge in the financial services sector. Our expertise spans loans, mutual funds, stocks, and insurance, ensuring personalized advice for each client. We track market trends and regulatory changes to provide strategic insights, whether it’s for loan options, investment choices, or insurance plans. Our team specializes in asset allocation, tax-efficient planning, and risk management to help clients make informed decisions.",
  },
  {
    title: "Years of Experience",
    content:
      "With years of experience in the financial services industry, MAS Financial has developed a deep understanding of loans, mutual funds, stocks, insurance, and more. Our seasoned team brings decades of combined expertise, helping clients navigate complex financial landscapes with confidence. Whether it’s securing a personal loan, planning investments, or finding the right insurance, we leverage our extensive experience to deliver tailored, strategic solutions.",
  },
  {
    title: "In-house Research Teams",
    content:
      "At MAS Financial, our in-house research teams are focused on analyzing financial markets, investment opportunities, and industry developments. Our skilled analysts track market fluctuations, economic trends, and regulatory updates to offer informed, data-backed recommendations. This allows us to provide customized, real-time guidance on loans, mutual funds, stocks, and insurance, ensuring that our clients receive the most relevant and timely advice to support their financial goals.",
  },
];

const WhyUs = () => {
  return (
    <div className="mt-24 bg-gradient-to-r from-gray-100 to-gray-200 font-montserrat ">
      {/* Left Section with Background Image */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="relative w-full lg:w-1/3 lg:h-[830px]">
          {/* Background image */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
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
            <h1 className="lg:text-white mb-16 decoration-red-700 underline underline-offset-8 font-bold text-4xl lg:text-7xl lg:mb-10 text-center transform hover:scale-105 transition-transform duration-300">
              Why Us
            </h1>
          </motion.div>
        </div>

        {/* Right Section with Content */}
        <div className="w-full lg:w-2/3 bg-white px-6 lg:px-12 py-8 lg:py-10 shadow-lg">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-8 lg:mb-10 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800">
                {section.title}
              </h2>
              <p className="text-sm lg:text-md text-gray-600 leading-relaxed">
                {section.content}
              </p>
              <div className="h-[2px] w-full bg-gradient-to-r from-red-700 to-red-500 mt-4"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
