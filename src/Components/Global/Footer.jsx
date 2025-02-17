import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 text-black py-8 lg:py-12 lg:mt-16 lg:mb-10 mt-16 mb-10 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12 sm:h-16" />
          </Link>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex space-x-4 sm:space-x-6"
        >
          <Link
            to="https://www.instagram.com/mas.financial?igsh=MWY2cHV2YW1yMHdxNQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-all duration-300 hover:rotate-[360deg]"
          >
            <FaInstagramSquare className="text-3xl sm:text-4xl text-pink-700" />
          </Link>

          <Link
            to="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-all duration-300 hover:rotate-[360deg]"
          >
            <FaLinkedin className="text-3xl sm:text-4xl text-blue-700" />
          </Link>

          <Link
            to="https://www.youtube.com/@mas2101a?si=p9HMdfnaZCNS5mUi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-all duration-300 hover:rotate-[360deg]"
          >
            <FaYoutube className="text-3xl sm:text-4xl text-red-700" />
          </Link>

          <Link
            to="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110  transition-all duration-300 hover:rotate-[360deg]"
          >
            <FaFacebook className="text-3xl sm:text-4xl text-blue-700" />
          </Link>
        </motion.div>

        {/* One-Line Text */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-sm sm:text-lg mb-4 sm:mb-6 px-4"
        >
          MAS Financial—Investing in your future, securing your financial
          freedom.
        </motion.p>

        {/* Copyright Text */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-md sm:text-md mb-4 sm:mb-6"
        >
          &copy; {new Date().getFullYear()} MAS Financial. All rights reserved.
        </motion.p>

        {/* Terms and Privacy Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-row sm:flex-row justify-center pb-5 sm:space-y-0 sm:space-x-4 text-md sm:text-md font-semibold"
        >
          <Link to="/TermsAndCondition">
            <button className="px-4 sm:px-2 text-gray-800 hover:text-red-700 transition-colors duration-300">
              Terms and Conditions
            </button>
          </Link>
          <Link to="/PrivacyPolicy">
            <button className="px-4 text-gray-800 hover:text-red-700 transition-colors duration-300">
              Privacy Policy
            </button>
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
