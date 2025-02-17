import React from "react";
import { motion } from "framer-motion";
import kotakCardImage from "../../assets/kotakHbanner.jpg";

const Kotak = () => {
  return (
    <div className="bg-gray-100 py-16 mt-[-40px] ">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-red-700">
          We Offer Kotak Mahindra <br className="lg:hidden" /> Bank Credit Cards
        </h2>
        <p className="text-gray-600 sm:text-xl mt-2">
          Discover exclusive benefits and rewards <br className="sm:hidden" />{" "}
          tailored for you.
        </p>
      </motion.div>

      {/* Image with Link */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center mt-10"
      >
        <a href="/KotakCreditCard" target="_blank" rel="noopener noreferrer">
          <img
            src={kotakCardImage}
            alt="Kotak Credit Card"
            className="rounded-lg shadow-lg lg:max-w-5xl max-w-[90vw] hover:shadow-xl transition-shadow duration-300"
          />
        </a>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-8"
      >
        <a
          href="/KotakCreditCard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gradient-to-r from-red-600 to-red-800 text-white sm:px-8 sm:py-3 px-2 py-1 rounded-lg shadow-lg text-lg font-semibold">
            Learn More
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default Kotak;
