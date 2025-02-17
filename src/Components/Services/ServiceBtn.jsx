import React from "react";
import { motion } from "framer-motion";
import stock from "../../assets/StockBan.jpg";
import Register from "../../assets/Register.jpg";
import Calculator from "../../assets/Calculator.jpg";

const Card = ({ title, description, bgImage, link }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group h-96" // Increased height
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
        </div>

        {/* Card Content */}
        <div className="relative p-6 text-white h-full flex flex-col justify-end">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-80">{description}</p>
        </div>
      </a>
    </motion.div>
  );
};

const ServiceBtn = () => {
  const cardsData = [
    {
      title: "Apply for Stocks Investments",
      description:
        "Apply for stocks today with our easy-to-use platform, offering personalized investment strategies and real-time market insights for optimal growth.",
      bgImage: stock,
      link: "https://diy.sharekhan.com/app/Account/Register?ReturnUrl=%2Fapp%2FAccountApplication%2FStepReview%2F2237349",
    },
    {
      title: "Register for Mutual Funds",
      description:
        "Register for mutual funds today and start building a diversified portfolio with expert guidance to secure your financial future.",
      bgImage: Register,
      link: "https://www.simplifin.ai/CustomerRegister?dcode=943086",
    },
    {
      title: "Calculate and Apply for SIP ",
      description:
        "Calculate your SIP (Systematic Investment Plan) today to plan your investments and track your future wealth growth with ease.",
      bgImage: Calculator,
      link: "https://www.etmoney.com/tools-and-calculators/sip-calculator",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <h3 className="mb-10 lg:mb-24 md:text-4xl text-2xl sm:text-3xl font-semibold text-red-700 text-center">
        Register Yourself for Mutual Funds and Stock Investments
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            bgImage={card.bgImage}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceBtn;
