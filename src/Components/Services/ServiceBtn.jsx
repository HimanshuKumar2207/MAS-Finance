import React from "react";
import { Link } from "react-router-dom";

const ServiceBtn = () => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-evenly gap-8 mb-16 font-semibold lg:mt-20 md:mt-20 mt-20">
      <div>
        <Link to="/services/healthinsurance">
          <button className="sm:text-lg border-4 border-black bg-transparent text-white first-line:text-md  py-1 px-1 max-w-xs hover:scale-105 rounded-lg ">
            Health Insurance
          </button>
        </Link>
      </div>
      <div>
        <Link to="/services/personalloans">
          <button className="sm:text-lg border-2 border-white text-white first-line:text-md  py-1 px-1 max-w-xs hover:scale-105 ">
            Personal Loans
          </button>
        </Link>
      </div>
      <div>
        <Link to="/services/automobileinsurance">
          <button className="sm:text-lg border-2 border-white text-white first-line:text-md  py-1 px-1 max-w-xs hover:scale-105 ">
            Automobile Insurance
          </button>
        </Link>
      </div>

      <div>
        <Link to="/services/mutualfunds">
          <button className="sm:text-lg border-2 border-white text-white first-line:text-md  py-1 px-1 max-w-xs hover:scale-105 ">
            Mutual Funds
          </button>
        </Link>
      </div>
      <div>
        <Link to="/services/stockinvestment">
          <button className="sm:text-lg border-2 border-white text-white first-line:text-md  py-1 px-1 max-w-xs hover:scale-105 ">
            Stock Investment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceBtn;
