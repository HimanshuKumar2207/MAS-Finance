import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Risk Management & Financial Safety",
    description:
      "We offer tools and resources to assess and manage your financial risks effectively. Use our risk profiling and tax planning calculators to secure your future with peace of mind.",
    bgColor: "bg-gradient-to-r from-[#1a9cae] to-teal-800",
  },
  {
    title: "Live Chat & 24/7 Support",
    description:
      "Get expert advice anytime via our live chat support. Our experienced financial advisors are available 24/7 to assist with any questions or concerns you may have",
    bgColor: "bg-gradient-to-r from-red-600 to-red-800",
  },
  {
    title: "Sustainability Focus",
    description:
      "Invest responsibly with our ESG (Environmental, Social, Governance) investment options. We provide sustainable financial products that contribute to environmental and social good.",
    bgColor: "bg-gradient-to-r from-[#1a9cae] to-teal-800",
  },
  {
    title: "Personal Doubt Session",
    description:
      "Have questions about your investments, insurance, or loans? Schedule a one-on-one session with one of our financial experts to get personalized guidance",
    bgColor: "bg-gradient-to-r from-red-600 to-red-800",
  },
];

const Expertise = () => {
  return (
    <div className="mt-20 p-6 sm:p-8 md:p-12 lg:p-16 bg-gray-50 font-montserrat mb-10">
      {/* Heading Section */}
      <div className="mb-12 text-center">
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-4xl md:text-4xl font-extrabold text-gray-800"
        >
          What Makes <span className="text-red-700">MAS Financial</span>{" "}
          Different
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-md text-gray-600 mt-4"
        >
          At MAS Financial, we are committed to providing personalized financial
          solutions that are as unique as you are. Unlike traditional financial
          service providers, we focus on building long-term relationships with
          our clients by offering innovative and customer-centric strategies.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
        {sections.map((service, index) => (
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
            <p className="text-sm sm:text-md leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;

// import React from "react";

// const Expertise = () => {
//   const sections = [
//     {
//       title: "Risk Management & Financial Safety",
//       description:
//         "We offer tools and resources to assess and manage your financial risks effectively. Use our risk profiling and tax planning calculators to secure your future with peace of mind.",
//       bgColor: "bg-gray-100",
//     },
//     {
//       title: "Live Chat & 24/7 Support",
//       description:
//         "Get expert advice anytime via our live chat support. Our experienced financial advisors are available 24/7 to assist with any questions or concerns you may have",
//       bgColor: "bg-green-100",
//     },
//     {
//       title: "Sustainability Focus",
//       description:
//         "Invest responsibly with our ESG (Environmental, Social, Governance) investment options. We provide sustainable financial products that contribute to environmental and social good.",
//       bgColor: "bg-blue-100",
//     },
//     {
//       title: "Personal Doubt Session",
//       description:
//         "Have questions about your investments, insurance, or loans? Schedule a one-on-one session with one of our financial experts to get personalized guidance",
//       bgColor: "bg-yellow-100",
//     },
//   ];

//   return (
//     <div className="container mx-auto px-6 py-12">
//       <h1 className="lg:text-4xl md:text-3xl text-3xl text-center lg:mb-20 mb-10 font-semibold decoration-red-700">
//         What makes <br className="sm:hidden" />{" "}
//         <span className="text-red-700">MAS Financial</span> Different ?
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
//         {sections.map((section, index) => (
//           <div
//             key={index}
//             className={`${section.bgColor} p-8 rounded-lg shadow-lg`}
//           >
//             <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
//             <p className="text-gray-700">{section.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Expertise;
