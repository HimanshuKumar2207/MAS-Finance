import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 text-black py-12 lg:mt-16 lg:mb-10 mt-16 mb-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Link to="/">
            <img src={logo} alt="Logo" className="h-16" />
          </Link>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex space-x-6"
        >
          <Link
            to="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <FaInstagramSquare className="text-4xl text-pink-700" />
          </Link>

          <Link
            to="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <FaLinkedin className="text-4xl text-blue-700" />
          </Link>

          <Link
            to="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <FaTwitter className="text-4xl text-black" />
          </Link>

          <Link
            to="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <FaFacebook className="text-4xl text-blue-700" />
          </Link>
        </motion.div>

        {/* One-Line Text */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-lg mb-6"
        >
          MAS Financial—Investing in your future, securing your financial
          freedom.
        </motion.p>

        {/* Copyright Text */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-md mb-6"
        >
          &copy; {new Date().getFullYear()} MAS Financial. All rights reserved.
        </motion.p>

        {/* Terms and Privacy Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-4 text-md font-semibold"
        >
          <Link to="/TermsAndCondition">
            <button className="px-4 text-gray-800 hover:text-red-700 transition-colors duration-300">
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
