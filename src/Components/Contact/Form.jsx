import React from "react";
import { RiHomeOfficeFill } from "react-icons/ri";
import { MdMarkEmailRead, MdAddIcCall } from "react-icons/md";
import { motion } from "framer-motion";

const Form = () => {
  return (
    <div className="w-full mx-auto lg:mt-24 px-4 py-12 bg-gradient-to-r from-gray-100 to-gray-200 ">
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:text-5xl text-4xl md:text-4xl font-semibold text-gray-900 mb-16 text-center "
      >
        Contact Us
      </motion.h3>

      {/* Contact Section */}
      <div className=" w-[80vw] mx-auto flex flex-col lg:flex-row justify-center gap-10">
        {/* Left Section with Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/3 bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="flex justify-start gap-4">
            <RiHomeOfficeFill className="mt-2 text-3xl text-red-700" />
            <div>
              <h3 className="text-lg text-gray-800">
                Bangali Cottage behind Beltron bhawan
              </h3>
              <h3 className="text-lg text-gray-800">Shastri Nagar - 800009</h3>
              <h2 className="text-lg font-semibold text-gray-800">
                Patna, Bihar
              </h2>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <MdMarkEmailRead className="text-3xl text-red-700" />
            <h3 className="text-lg text-gray-800">random747@gmail.com</h3>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <MdAddIcCall className="text-3xl text-red-700" />
            <h3 className="text-lg text-gray-800">+91 1234567890</h3>
          </div>
        </motion.div>

        {/* Right Section with Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          action=""
          className="space-y-6 w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-lg"
        >
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          {/* Phone Number Input */}
          <div>
            <label
              htmlFor="phone"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Phone
            </label>
            <input
              type="number"
              id="phone"
              placeholder="Enter Your Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write Your Message Here"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 min-h-[150px]"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white text-lg py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 hover:from-red-700 hover:to-red-900 transition-all duration-300"
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