import React from "react";
import { motion } from "framer-motion";
import cardImage1 from "../assets/kotakImg1.jpg";
import cardImage2 from "../assets/kotak2.png";
import cardImage3 from "../assets/kotakImg3.png";
import ConnectBtn from "../Components/Global/ConnectBtn";
import Footer from "../Components/Global/Footer";
import FixedBottom from "../Components/Global/FixedBottom";
import Navbar from "../Components/Global/Navbar";
import img from "../assets/KotakBanner.jpg";
import HBanner from "../Components/Global/HBanner";

const KotakCreditCard = () => {
  return (
    <>
      <Navbar />
      <HBanner img={img} />

      {/* Main Content */}
      <div className="w-full bg-gray-50 min-h-screen py-24 font-montserrat px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl sm:text-4xl font-bold text-[#1a9cae] mb-4">
            Kotak Mahindra Bank Credit Card
          </h1>
          <p className="text-gray-600 text-sm sm:text-lg  mx-auto">
            Unlock a world of rewards, benefits, and exclusive offers with our premium credit cards.
          </p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {[cardImage1, cardImage2, cardImage3].map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Credit Card ${index + 1}`}
              className="rounded-lg shadow-lg w-full h-48 sm:h-64 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>

        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#1a9cae] mb-4">
            Overview
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            The Kotak Mahindra Bank Credit Card offers unparalleled benefits,
            including cashback, reward points, and exclusive discounts on
            dining, travel, and shopping. Whether you're a frequent traveler or
            a shopaholic, this card is designed to suit your lifestyle.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#1a9cae] mb-4">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
            <li>Earn 5x reward points on dining and entertainment.</li>
            <li>Complimentary airport lounge access.</li>
            <li>Zero foreign transaction fees.</li>
            <li>Contactless payments for faster checkouts.</li>
            <li>24/7 customer support.</li>
          </ul>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#1a9cae] mb-4">
            Benefits
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
            <li>Exclusive discounts on top brands.</li>
            <li>Travel insurance coverage up to ₹1 crore.</li>
            <li>Fuel surcharge waiver.</li>
            <li>Flexible EMI options.</li>
            <li>Complimentary golf lessons.</li>
          </ul>
        </motion.div>

        {/* Rewards Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#1a9cae] mb-4">
            Rewards
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            Earn exciting rewards every time you use your Kotak Mahindra Bank
            Credit Card:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
            <li>1 reward point for every ₹100 spent.</li>
            <li>Double points on weekends.</li>
            <li>Redeem points for flights, hotels, and merchandise.</li>
          </ul>
        </motion.div>

        {/* Eligibility Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#1a9cae] mb-4">
            Eligibility
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            To apply for the Kotak Mahindra Bank Credit Card, you must meet the
            following criteria:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
            <li>Minimum age: 21 years.</li>
            <li>Minimum monthly income: ₹25,000.</li>
            <li>Good credit score (750+).</li>
          </ul>
        </motion.div>

        {/* FAQs Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#1a9cae] mb-4">
            FAQs
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-700">
                How do I check my reward points?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                You can check your reward points by logging into your Kotak
                Mahindra Bank account or through the mobile app.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-700">
                What is the annual fee for this card?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                The annual fee is ₹1,000, which is waived off if you spend
                ₹50,000 in the first year.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mb-10"
        >
          <a href="/contact" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="bg-[#1a9cae] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg text-lg sm:text-xl font-semibold transition duration-300 transform hover:scale-105 hover:bg-[#168a9a]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.button>
          </a>
        </motion.div>
      </div>
      <ConnectBtn />
      <Footer />
      <FixedBottom />
    </>
  );
};

export default KotakCreditCard;
