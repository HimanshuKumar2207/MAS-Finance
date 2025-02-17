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
    <div className="w-full fixed bottom-0 left-0 right-0 bg-gradient-to-r from-red-700 to-red-600 h-[70px] z-50 shadow-lg">
      <div className="flex sm:flex-row gap-5 justify-around items-center px-4 h-full">
        {/* Call Button */}
        <button
          className={`flex items-center justify-center text-white gap-2 p-3 rounded-lg transition-all duration-200 ${
            activeTab === "call" ? "h" : "hover:text-blue-600"
          }`}
          onClick={() => {
            handleTabClick("call");
            handleCallClick();
          }}
        >
          <FaPhoneAlt className="text-xl sm:text-2xl md:text-3xl" />
          <div>
            <span className="text-lg sm:text-base md:text-lg font-medium">
              Call
            </span>
          </div>
        </button>

        {/* WhatsApp Button */}
        <button
          className={`flex items-center justify-center gap-2 p-3 rounded-lg text-white transition-all duration-200 ${
            activeTab === "whatsapp" ? " shadow-md" : " "
          }`}
          onClick={() => {
            handleTabClick("whatsapp");
            handleWhatsAppClick();
          }}
        >
          <FaWhatsapp className="text-2xl sm:text-2xl md:text-3xl " />
          <div>
            <span className="text-lg sm:text-base md:text-lg font-medium">
              WhatsApp
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FixedBottom;
