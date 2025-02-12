import React from "react";
import { Link } from "react-router-dom";

const ConnectBtn = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:mt-16 px-4 md:px-6">
      <div className="text-center lg:text-left">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-3">
          Need more details? Contact us
        </h2>
        <p className="text-sm sm:text-md lg:text-lg">
          We are here to assist. Contact us by phone, email or via our social
          media channels.
        </p>
      </div>
      <div>
        <Link to="/contact">
          <button className="text-white text-lg font-semibold bg-red-700 py-3 px-16 sm:px-14 md:px-16 lg:px-14 rounded-md hover:bg-red-800 transition-all duration-200">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ConnectBtn;
