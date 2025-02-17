import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Risk Management & Financial Safety",
    description:
      "We offer comprehensive tools and resources designed to assess and manage your financial risks effectively. Utilize our risk profiling and tax planning calculators to make informed choices for a secure, worry-free future.",
    bgColor: "bg-gradient-to-r from-[#1a9cae] to-teal-800",
  },
  {
    title: "Live Chat & 24/7 Support",
    description:
      "Connect with expert financial advisors anytime through our live chat support. Available 24/7, we provide prompt assistance to address your questions or concerns, ensuring you receive the best guidance whenever you need it.",
    bgColor: "bg-gradient-to-r from-red-600 to-red-800",
  },
  {
    title: "Sustainability Focus",
    description:
      "Invest with purpose through our ESG (Environmental, Social, Governance) investment options. We offer sustainable financial products that not only help grow your wealth but also contribute to positive environmental and social impact.",
    bgColor: "bg-gradient-to-r from-[#1a9cae] to-teal-800",
  },
  {
    title: "Personal Doubt Session",
    description:
      "Have questions about your investments, insurance, or loans? Schedule a one-on-one session with our financial experts for personalized guidance and tailored solutions to help you make informed decisions.",
    bgColor: "bg-gradient-to-r from-red-600 to-red-800",
  },
];

const Expertise = () => {
  return (
    <div className="mt-20 p-6 sm:p-8 md:p-12 lg:px-16 lg:py-0 bg-white font-montserrat mb-10 lg:mb-5 ">
      {/* Heading Section */}
      <div className="mb-12 text-center">
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-4xl md:text-4xl font-extrabold text-gray-800"
        >
          What Makes <span className="text-red-700">MAS Financial</span>{" "}
          Different
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-md text-gray-600 mt-4"
        >
          At MAS Financial, we are committed to providing personalized financial
          solutions that are as unique as you are. Unlike traditional financial
          service providers, we focus on building long-term relationships with
          our clients by offering innovative and customer-centric strategies.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
        {sections.map((service, index) => (
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
            <p className="text-smd sm:text-md leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;

