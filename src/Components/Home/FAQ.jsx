import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of loans do you offer?",
      answer:
        "We provide a wide range of loan options including personal loans for individual financial needs, home loans for purchasing or refinancing homes, education loans for tuition and related expenses, and business loans designed to help you grow your business. All our loans come with competitive interest rates and flexible repayment options.",
    },
    {
      question: "How can I apply for an insurance policy?",
      answer:
        "Our insurance policies can be applied for both online and offline. You can visit our website to fill out an online application form for life, health, or vehicle insurance. Alternatively, you can book an appointment with one of our certified agents who will assist you throughout the application process. We offer a variety of plans tailored to meet your specific needs.",
    },
    {
      question: "What are mutual funds, and how do they work?",
      answer:
        "Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other assets. When you invest in a mutual fund, you own a portion of the fund and share in its profits or losses. Mutual funds are managed by professionals and are a great way for beginner investors to access a diversified investment strategy without the need for active management of individual stocks or bonds.",
    },
    {
      question: "Do you offer health and life cover insurance?",
      answer:
        "Yes, we offer a variety of health and life cover insurance plans. Our health insurance plans cover medical expenses such as hospitalization, surgeries, doctor consultations, and preventive care. Our life insurance policies provide financial protection for your loved ones in the event of your untimely passing, including term life, whole life, and universal life insurance options.",
    },
    {
      question: "What are the eligibility criteria for loans?",
      answer:
        "Eligibility for loans varies depending on the type of loan you're applying for. Generally, you must be a resident of the country, at least 21 years old, have a steady source of income, and meet the minimum credit score requirements. Specific criteria may vary for personal loans, home loans, or business loans, so it's important to review the requirements for each loan type before applying.",
    },
    {
      question: "What is the process for getting a personal loan?",
      answer:
        "To get a personal loan, first, you'll need to submit a loan application along with necessary documents such as proof of identity, income, and your credit score. Once your application is received, we will evaluate your creditworthiness and, if approved, provide you with a loan offer detailing the terms, including the interest rate, loan amount, and repayment schedule. After signing the agreement, the loan funds are typically disbursed within a few business days.",
    },
    {
      question: "What should I consider before buying health insurance?",
      answer:
        "Before purchasing health insurance, it's important to assess your healthcare needs. Consider factors like your age, pre-existing conditions, family medical history, and preferred doctors or hospitals. Review the coverage options to ensure that the policy covers the types of healthcare services you need, such as hospitalization, prescription drugs, or mental health support. Compare different plans to find one that fits your budget while providing adequate coverage.",
    },
    {
      question: "How do mutual fund fees work?",
      answer:
        "Mutual funds typically charge management fees for the professionals who manage the fund's portfolio. These fees can range from 0.5% to 2% of the assets under management (AUM) annually. There may also be additional fees, such as front-end or back-end load fees when buying or selling the fund. It's important to review the fee structure of any mutual fund before investing, as high fees can significantly affect your returns over time.",
    },
  ];

  const [selectedFAQ, setSelectedFAQ] = useState(null);

  const handleToggle = (index) => {
    setSelectedFAQ(selectedFAQ === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 rounded-lg mt-20">
      <h1 className="lg:text-4xl text-2xl md:text-3xl font-semibold text-left lg:mb-10 mb-8 text-black">
        Frequently Asked Questions
      </h1>
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md">
            <div
              className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-gray-100 transition-all duration-300 border-b"
              onClick={() => handleToggle(index)}
              aria-expanded={selectedFAQ === index ? "true" : "false"}
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h2>
              <svg
                className={`transform transition-transform duration-300 ${
                  selectedFAQ === index ? "rotate-180" : ""
                }`}
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  d="M12 8V16M16 12L12 16L8 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            {selectedFAQ === index && (
              <div className="py-4 px-6 bg-gray-50 text-gray-800">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
