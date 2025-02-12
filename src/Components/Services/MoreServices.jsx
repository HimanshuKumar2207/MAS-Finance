import React from "react";
import { motion } from "framer-motion";

const OthServices = [
  {
    title: "Financial Advisory",
    description:
      "Making the right financial decisions can be challenging. Our expert financial advisors provide personalized guidance, helping you navigate complex financial choices. Whether it's budgeting, debt management, or long-term wealth planning, we ensure you're on the path to financial success and security.",
    bgColor: "bg-gradient-to-r from-[#1a9cae] to-teal-800",
  },
  {
    title: "Investment Planning",
    description:
      "Investing wisely is key to growing your wealth over time. Our investment planning services help you choose the right mix of assets, tailored to your goals and risk tolerance. From stocks to mutual funds and bonds, we guide you to build a diversified portfolio that works for you.",
    bgColor: "bg-gradient-to-r from-red-600 to-red-800",
  },
  {
    title: "Insurance Advisory",
    description:
      "Life is unpredictable, and the right insurance coverage can provide peace of mind. We help you select the best insurance plans, whether it’s health, life, or property, ensuring you and your loved ones are financially protected against unexpected events.",
    bgColor: "bg-gradient-to-r from-[#1a9cae] to-teal-800",
  },
  {
    title: "Retirement Planning",
    description:
      "Your future starts today. Retirement planning is essential for achieving financial independence in your later years. We help you define your retirement goals, create a sustainable savings strategy, and select tax-efficient investment options. Our tailored approach ensures you can retire comfortably and confidently.",
    bgColor: "bg-gradient-to-r from-red-600 to-red-800",
  },
  {
    title: "Tax Planning",
    description:
      "Tax planning is crucial for maximizing your financial resources. Our team helps you navigate complex tax laws to reduce your tax liability while ensuring compliance. We work with you to create strategies that minimize taxes on income, investments, and assets, helping you keep more of your hard-earned money.",
    bgColor: "bg-gradient-to-r from-[#1a9cae] to-teal-800",
  },
  {
    title: "Estate Planning",
    description:
      "Planning for the future of your estate ensures your assets are distributed according to your wishes, minimizing potential tax burdens for your heirs. We help you create wills, trusts, and other essential documents that protect your legacy, providing peace of mind that your family will be cared for after you're gone.",
    bgColor: "bg-gradient-to-r from-red-600 to-red-800",
  },
];

const MoreServices = () => {
  return (
    <div className="mt-20 p-6 sm:p-8 md:p-12 lg:p-16 bg-gray-50 font-montserrat mb-10">
      {/* Heading Section */}
      <div className="mb-12 text-center">
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-gray-800"
        >
          Our Additional Offerings
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 mt-4"
        >
          Explore our wide range of financial services tailored to your needs.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
        {OthServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`${service.bgColor} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-white`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {service.title}
            </h2>
            <p className="text-sm sm:text-md leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MoreServices;
