import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FixedBottom = () => {
  const [activeTab, setActiveTab] = useState("call");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCallClick = () => {
    window.location.href = "tel:917479867857";
  };

  const handleWhatsAppClick = () => {
    const phone = "917479867857";
    const message = `Let's Connect with MAS Financial`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`
    );
  };

  return (
    <div className="w-full fixed bottom-0 left-0 right-0 bg-gradient-to-r from-red-700 to-red-600 h-[70px] z-10">
      <div className="flex sm:flex-row gap-5 justify-around items-center px-4">
        {/* Call Button */}
        <button
          className="flex items-center text-white gap-1 p-3 rounded-lg transition-all duration-200"
          onClick={() => {
            handleTabClick("call");
            handleCallClick();
          }}
        >
          <FaPhoneAlt className="text-xl sm:text-2xl md:text-3xl" />
          <div>
            <span className="md:text-xl sm:text-base lg:text-xl font-medium mr-20">
              Call
            </span>
            <h1 className="text-xs sm:text-sm md:text-base mr-5">
              +91 7479867857
            </h1>
          </div>
        </button>

        {/* WhatsApp Button */}
        <button
          className="flex items-center gap-2 p-3 rounded-lg text-white transition-all duration-200"
          onClick={() => {
            handleTabClick("whatsapp");
            handleWhatsAppClick();
          }}
        >
          <FaWhatsapp className="text-xl sm:text-2xl md:text-3xl" />
          <div>
            <span className="md:text-xl sm:text-base lg:text-xl font-medium lg:mr-24 mr-20 ">
              WhatsApp
            </span>
            <h1 className="text-xs sm:text-sm md:text-base mr-6">
              Chat with Representative
            </h1>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FixedBottom;
