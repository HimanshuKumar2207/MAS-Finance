import React from "react";
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
        heading="Investing in the Future"
        desc="MAS Financial offers personalized financial planning, investment strategies, and expert guidance to help you secure a brighter future. We assist with loans, insurance, and mutual fund investments."
        img={img}
      />
      
      <div className="container mx-auto p-6 max-w-full mt-20">
        {/* Main Service Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg shadow-2xl p-8 text-white mb-8"
        >
          {/* Service Image */}
          {/* <div className="mb-6">
            <img
              src={serData.img}
              alt={serData.serviceName}
              className="w-[60%] h- object-cover rounded-lg shadow-lg transition-transform duration-500 "
            />
          </div> */}

          {/* Service Overview */}
          <h2 className="text-2xl font-bold mb-4">{serData.serviceName}</h2>
          <p className="text-gray-200 mb-6">{serData.overview}</p>
        </motion.div>

        {/* Grid for Additional Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Key Features Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gradient-to-r from-[#1a9cae] to-teal-800 rounded-lg shadow-2xl p-6 text-white"
          >
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-200">Email: {serData.contactInfo.email}</p>
            <p className="text-gray-200">Phone: {serData.contactInfo.phone}</p>
          </motion.div>
        </div>
      </div>

      <ConnectBtn />
      <Footer />
      <FixedBottom />
    </>
  );
};

export default ServicesList;
