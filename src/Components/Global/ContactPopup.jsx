import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactPopup = ({ onClose }) => {
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center h-[60vh] sm:h-auto sm:top-0 top-24">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-2xl relative max-w-[90vw] md:max-w-lg lg:max-w-xl w-full ">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-red-700 text-3xl transition-all duration-300 hover:rotate-[360deg]"
        >
          &times;
        </button>

        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-red-700 to-red-600 bg-clip-text text-transparent">
          Contact Us
        </h2>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              id="name"
              placeholder="Name "
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-transparent focus:border-red-600 focus:ring-2 focus:ring-red-600 focus:outline-none peer transition-all duration-300 placeholder:font-semibold placeholder:text-gray-800"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder="Email "
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-transparent focus:border-red-600 focus:ring-2 focus:ring-red-600 focus:outline-none peer transition-all duration-300 placeholder:font-semibold placeholder:text-gray-800 "
            />
          </div>

          {/* Phone Field */}
          <div className="relative">
            <input
              type="text"
              id="phone"
              placeholder="Phone "
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-transparent focus:border-red-600 focus:ring-2 focus:ring-red-600 focus:outline-none peer transition-all duration-300 placeholder:font-semibold placeholder:text-gray-800"
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              id="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-transparent focus:border-red-600 focus:ring-2 focus:ring-red-600 focus:outline-none peer transition-all duration-300 resize-none placeholder:font-semibold placeholder:text-gray-800"
              rows="4"
            ></textarea>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-600 text-sm sm:text-base text-center">
              {error}
            </div>
          )}

          {/* Success Message */}
          {submitted && (
            <div className="text-green-600 text-sm sm:text-base text-center">
              Your message has been sent successfully!
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-700 to-red-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:from-red-800 hover:to-red-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;
