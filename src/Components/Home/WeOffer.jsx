import React from "react";
import { IoArrowRedoCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom for internal navigation

const services = [
  {
    title: "Personal Loans",
    description:
      "Whether you need funds for a home renovation, education, or an emergency, our personalized loan options help you achieve your financial goals without the stress. We offer flexible loan terms and competitive rates to make borrowing easier. Our team works with you to ensure you get the right loan, with manageable repayment options, to give you peace of mind and financial stability.",
    link: "/services/personalloans",

    bgColor: "bg-gradient-to-r from-red-600 to-red-800",
  },
  {
    title: "Health & Life Insurance",
    description:
      "In an unpredictable world, protecting yourself and your loved ones with the right insurance is essential. We provide a wide range of health and life insurance plans, tailored to your specific needs and budget. Whether you're looking for comprehensive health coverage or securing your family’s future, our team will help you select the best options that provide financial protection when you need it most.",
    link: "/services/healthinsurance", // Link to service details

    bgColor: "bg-gradient-to-r from-[#1a9cae] to-teal-800",
  },
  {
    title: "Mutual Funds",
    description:
      "Investing in mutual funds offers a smart way to build wealth over time with the help of professional management. Our mutual fund services are designed to diversify your investments across various asset classes, reducing risk while maximizing returns. We assess your financial goals and risk tolerance to create a customized investment portfolio that ensures you're on track for a stable and prosperous future.",
    link: "/services/mutualfunds", // Link to service details

    bgColor: "bg-gradient-to-r from-red-600 to-red-800",
  },
  {
    title: "Auto-mobile Insurance",
    description:
      "Auto insurance is essential to protect your vehicle, and more importantly, yourself and others on the road. Our automobile insurance services offer a variety of coverage options, including collision, comprehensive, and liability, ensuring you're protected against accidents, theft, and unforeseen events. We work with you to select a policy that suits your driving habits and provides the best coverage for your needs at a competitive rate",
    link: "/services/automobileinsurance", // Link to service details

    bgColor: "bg-gradient-to-r from-[#1a9cae] to-teal-800",
  },
  {
    title: "Share Investments",
    description:
      "Investing in stocks can be a great way to build wealth, but it requires a solid strategy. Our share investment services are designed to help you make informed decisions, whether you're a seasoned investor or just getting started. We help you understand market trends, select high-potential stocks, and diversify your portfolio to maximize returns while minimizing risks. Let us assist you in navigating the stock market with confidence and precision.",
    link: "/services/stockinvestment", // Link to service details

    bgColor: "bg-gradient-to-r from-red-600 to-red-800",
  },
];

const WeOffer = () => {
  return (
    <div className="py-20 bg-gray-100 font-montserrat">
      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:text-5xl text-3xl md:text-4xl text-gray-800 font-bold"
        >
          What We Offer
        </motion.h1>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`${service.bgColor} rounded-lg p-8 text-white hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105`}
          >
            {/* Icon */}
            <div className="mb-6">{service.icon}</div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Learn More Button */}
            <Link
              to={service.link}
              className="flex items-center text-white font-semibold "
            >
              Learn More
              <IoArrowRedoCircleSharp className="ml-2 text-2xl" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WeOffer;
