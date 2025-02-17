import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Global/Navbar";
import img from "../assets/serBanner.jpg";
import HBanner from "../Components/Global/HBanner";
import Footer from "../Components/Global/Footer";
import ConnectBtn from "../Components/Global/ConnectBtn";
import FixedBottom from "../Components/Global/FixedBottom";
import { motion } from "framer-motion";

const ServicesList = ({ serData }) => {
  const ServicesData = serData;

  return (
    <>
      <Navbar />
      <HBanner
        heading="Innovative Fintech Solutions for Your Business"
        desc="Transform your business with our innovative fintech solutions for secure transactions, financial management, and growth strategies in the digital era."
        img={img}
      />

      <div className="container mx-auto p-6 max-w-full mt-20 overflow-hidden">
        {/* Main Service Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg shadow-2xl p-6 sm:p-8 text-white mb-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {serData.serviceName}
          </h2>
          <p className="text-gray-200 text-sm sm:text-lg">{serData.overview}</p>
        </motion.div>

        <div
          className="flex flex-col sm:flex-row justify-center gap-4 w-full mb-4"
          style={{
            display:
              serData.serviceName === "Automobile Insurance" ||
              serData.serviceName === "Health Insurance" ||
              serData.serviceName === "Personal Loans"
                ? "none"
                : "block",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg p-6 sm:p-8 py-0 text-white  flex flex-col sm:flex-row lg:gap-6 w-full gap-2"
          >
            {/* "More" Button */}
            <a
              href={serData.More.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-full md:w-full lg:w-full"
            >
              <button className="w-full px-6 py-3 text-white md:text-xl font-semibold bg-gradient-to-r from-[#1a9cae] to-teal-800 rounded-lg shadow-lg hover:from-[#168a9a] hover:to-teal-700 transition-all duration-300">
                {serData.More.text}
              </button>
            </a>

            {/* "Apply" Button */}
            <a
              href={serData.Apply.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-full md:w-full lg:w-full"
            >
              <button className="w-full px-6 py-3 text-white md:text-xl font-semibold bg-gradient-to-r from-red-600 to-red-800 rounded-lg shadow-lg hover:from-red-700 hover:to-red-900 transition-all duration-300">
                {serData.Apply.text}
              </button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Key Features Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="bg-gradient-to-r from-[#1a9cae] to-teal-800 rounded-lg shadow-2xl p-6 text-white"
          >
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="list-disc list-inside text-gray-200">
              {serData.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.div>

          {/* Benefits Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg shadow-2xl p-6 text-white"
          >
            <h3 className="text-xl font-semibold mb-4">Benefits</h3>
            <ul className="list-disc list-inside text-gray-200">
              {serData.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </motion.div>

          {/* Eligibility Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="bg-gradient-to-r from-[#1a9cae] to-teal-800 rounded-lg shadow-2xl p-6 text-white"
          >
            <h3 className="text-xl font-semibold mb-4">Eligibility</h3>
            <ul className="list-disc list-inside text-gray-200">
              {serData.eligibility.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* How to Apply Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg shadow-2xl p-6 text-white"
          >
            <h3 className="text-xl font-semibold mb-4">How to Apply</h3>
            <ul className="list-disc list-inside text-gray-200">
              {serData.howToApply.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-gradient-to-r from-[#1a9cae] to-teal-800 rounded-lg shadow-2xl p-6 text-white"
          >
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-200">Email: {serData.contactInfo.email}</p>
            <p className="text-gray-200">Phone: {serData.contactInfo.phone}</p>
          </motion.div>
        </motion.div>
      </div>

      <ConnectBtn />
      <Footer />
      <FixedBottom />
    </>
  );
};

export default ServicesList;
