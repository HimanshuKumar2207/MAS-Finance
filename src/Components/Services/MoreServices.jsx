import React from "react";
import { motion } from "framer-motion";

const OthServices = [
  {
    title: "Financial Advisory",
    description:
      "Making the right financial decisions can often feel overwhelming, but with the right guidance, it becomes more manageable. Our team of expert financial advisors offers personalized advice tailored to your unique needs and goals. We specialize in helping you make informed choices regarding budgeting, debt management, investment strategies, and long-term wealth planning. Whether you're saving for retirement, managing daily expenses, or looking to grow your wealth, we provide clear and actionable strategies to ensure your financial success. ",
    bgColor: "bg-gradient-to-r from-[#1a9cae] to-teal-800",
  },
  {
    title: "Investment Planning",
    description:
      "Investing wisely is crucial for growing your wealth. Our investment planning services help you select the right mix of assets that align with your financial goals and risk tolerance. Whether you're interested in stocks, mutual funds, or bonds, we provide expert guidance to help you build a diversified portfolio. By considering your unique needs, time horizon, and risk preferences, we ensure that your investments work for you, paving the way for long-term financial growth and security.",
    bgColor: "bg-gradient-to-r from-red-600 to-red-800",
  },
  {
    title: "Insurance Advisory",
    description:
      "Life is unpredictable, and having the right insurance coverage offers peace of mind. We assist you in selecting the best insurance plans, whether for health, life, or property, to ensure that you and your loved ones are financially protected against unforeseen events. Our expert advisors assess your needs and guide you in choosing coverage that provides adequate protection. With our help, you can rest assured knowing that you're prepared for any unexpected challenges that may come your way.",
    bgColor: "bg-gradient-to-r from-[#1a9cae] to-teal-800",
  },
  {
    title: "Retirement Planning",
    description:
      "Your future begins now, and retirement planning is a crucial step toward achieving financial independence. We guide you in defining your retirement goals, creating a sustainable savings strategy, and selecting tax-efficient investment options. By understanding your unique needs, we provide a personalized plan that ensures you're on track to retire comfortably. Our expert approach gives you peace of mind, knowing that you’ll be financially secure in your later years, enabling you to enjoy a worry-free and confident retirement.",
    bgColor: "bg-gradient-to-r from-red-600 to-red-800",
  },
  {
    title: "Tax Planning",
    description:
      "Tax planning is essential for optimizing your financial resources and minimizing tax burdens. Our team of experts helps you navigate the complexities of tax laws to reduce your tax liability while ensuring full compliance. We work closely with you to develop strategies that minimize taxes on income, investments, and assets. By creating a tailored tax plan, we help you keep more of your hard-earned money, allowing you to allocate funds toward your financial goals and secure a more prosperous future.",
    bgColor: "bg-gradient-to-r from-[#1a9cae] to-teal-800",
  },
  {
    title: "Estate Planning",
    description:
      "Estate planning is vital for securing the future of your assets and ensuring they are distributed according to your wishes. By proactively planning, you can minimize potential tax burdens and protect your heirs from unnecessary financial strain. Our experts assist in creating wills, trusts, and other essential documents, providing a solid foundation for protecting your legacy. We guide you through the process to ensure your family is taken care of, offering peace of mind that your hard-earned wealth will be passed on smoothly after you're gone.",
    bgColor: "bg-gradient-to-r from-red-600 to-red-800",
  },
];

const MoreServices = () => {
  return (
    <div className="mt-20 p-6 sm:p-8 md:p-12 lg:p-16 bg-gray-50 font-montserrat mb-10">
      {/* Heading Section */}
      <div className="mb-12 text-center">
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-gray-800"
        >
          Our Additional Offerings
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 mt-4"
        >
          Explore our wide range of financial services tailored to your needs.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
        {OthServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`${service.bgColor} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-white`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {service.title}
            </h2>
            <p className="text-md sm:text-md leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MoreServices;
