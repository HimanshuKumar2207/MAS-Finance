import React, { useState } from "react";
import { RiHomeOfficeFill } from "react-icons/ri";
import { MdMarkEmailRead, MdAddIcCall } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import BgImage from "../../assets/LocationImg.jpg";
import emailjs from "emailjs-com";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields are filled
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      setError("Please fill out all fields.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "service_zwgb6yu", // Replace with your EmailJS service ID
        "template_be9wa53", // Replace with your EmailJS template ID
        formData,
        "rq17KEfytUz84NGBE" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setSubmitted(true);
          setError("");
          setFormData({ name: "", phone: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Failed to send email:", error);
          setError("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className="w-full mx-auto lg:mt-24 mt-24 py-14 bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden">
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-10 sm:mb-12 text-center"
      >
        Contact Us
      </motion.h3>

      {/* Contact Section */}
      <div className="mx-auto px-4 sm:px-6 lg:px-24 flex flex-col lg:flex-row justify-center gap-8 sm:gap-10">
        {/* Left Section with Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/3 p-6 sm:p-8 rounded-lg shadow-lg relative overflow-hidden"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-95"
            style={{ backgroundImage: `url(${BgImage})` }}
          ></div>

          {/* Content Overlay */}
          <div className="relative z-10">
            <div className="bg-white px-6 py-6 mb-6 rounded-md shadow-xl hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-800 font-semibold text-sm sm:text-base leading-relaxed text sm:text-left">
                MAS Financial builds trust, delivers exceptional value, and
                creates brighter futures with expert financial solutions. We
                empower individuals and businesses, turning dreams into reality
                while ensuring lasting success through personalized financial
                strategies and unmatched dedication.
              </p>
            </div>
            <div className="flex justify-start gap-4">
              <RiHomeOfficeFill className="mt-2 text-4xl text-[#3fc2f6]" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  Bangali Cottage behind Beltron bhawan
                </h3>
                <h3 className="text-base sm:text-lg font-semibold text-white ">
                  Shastri Nagar - 800023
                </h3>
                <h2 className="text-base sm:text-lg font-semibold text-white">
                  Patna, Bihar
                </h2>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <MdMarkEmailRead className="text-3xl text-[#3fc2f6]" />
              <h3 className="text-base sm:text-lg font-semibold text-white">
                random747@gmail.com
              </h3>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <MdAddIcCall className="text-3xl text-[#3fc2f6]" />
              <h3 className="text-base sm:text-lg font-semibold text-white">
                +91 1234567890
              </h3>
            </div>

            <div className="mt-6 flex  gap-4">
              <FaUserCheck className="text-3xl text-[#3fc2f6]" />

              <h3 className="text-base sm:text-lg font-semibold text-white">
                Ceo & Founder:
              </h3>
              <p className="text-base sm:text-lg font-semibold text-white">
                Mohit Raj
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Section with Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-6 w-full lg:w-2/3 bg-white p-6 sm:p-8 rounded-lg shadow-lg"
        >
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-base sm:text-lg font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 text-base sm:text-lg"
            />
          </div>

          {/* Phone Number Input */}
          <div>
            <label
              htmlFor="phone"
              className="block text-base sm:text-lg font-medium text-gray-700 mb-2"
            >
              Phone
            </label>
            <input
              type="number"
              id="phone"
              placeholder="Enter Your Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 text-base sm:text-lg"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-base sm:text-lg font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 text-base sm:text-lg"
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-base sm:text-lg font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write Your Message Here"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 min-h-[150px] text-base sm:text-lg"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-600 text-sm sm:text-base">{error}</div>
          )}

          {/* Success Message */}
          {submitted && (
            <div className="text-green-600 text-sm sm:text-base">
              Your message has been sent successfully!
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white text-base sm:text-lg py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 hover:from-red-700 hover:to-red-900 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Form;
