import React from "react";
import Navbar from "./Navbar";
import HBanner from "./HBanner";
import Footer from "./Footer";
import FixedBottom from "./FixedBottom";
import ConnectBtn from "./ConnectBtn";
import img from "../../assets/T$C (1).jpg";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <HBanner
        heading=" Investing in the Future"
        desc=" MAS Financial offers personalized financial planning, investment
            strategies, and expert guidance to help you secure a brighter
            future. We assist with loans, insurance, and mutual fund
            investments."
        img={img}
      />
      <div className="container mx-auto px-4 py-8 lg:mt-16 mt-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-red-700">
          Terms and Conditions
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            Welcome to <span className="font-semibold">MAS Financila</span>. By
            accessing or using our services, you agree to comply with and be
            bound by the following terms and conditions. Please read them
            carefully, as they govern your use of our website, applications, and
            services.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4 text-red-700">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 mb-4">
            By using our services, including but not limited to personal loans,
            insurance, mutual funds, stock investments, and health insurance,
            you agree to these terms and conditions. If you do not agree with
            any of the terms outlined below, you must immediately cease using
            our platform. These terms apply to both registered users and guests.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4 text-red-700">
            2. Services Offered
          </h2>
          <p className="text-gray-700 mb-4">
            YourFinTech offers a comprehensive range of financial services to
            assist you in managing your financial well-being. These services
            include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Personal Loans for individuals</li>
            <li>Health Insurance coverage, including hospitalization</li>
            <li>Automobile Insurance for various vehicle types</li>
            <li>
              Mutual Fund investments, including equity, debt, and hybrid funds
            </li>
            <li>
              Stock Investments in a wide range of companies and industries
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            All services are subject to eligibility criteria, local laws, and
            applicable regulatory guidelines. We may update or modify the
            services we offer at any time.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4 text-red-700">
            3. Eligibility
          </h2>
          <p className="text-gray-700 mb-4">
            To use our services, you must meet the following eligibility
            criteria:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              You must be at least 18 years of age to register for or use our
              services.
            </li>
            <li>
              You must provide accurate and complete information when
              registering for our services, including your personal, contact,
              and financial details.
            </li>
            <li>
              You must comply with all applicable laws, regulations, and rules
              that apply in your jurisdiction.
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4 text-red-700">
            4. User Responsibilities
          </h2>
          <p className="text-gray-700 mb-4">
            As a user, you are responsible for:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              Providing accurate and up-to-date personal and financial
              information.
            </li>
            <li>
              Using our services only for lawful purposes and not engaging in
              fraudulent activities.
            </li>
            <li>
              Maintaining the confidentiality of your account information and
              password. If you suspect unauthorized access, you must notify us
              immediately.
            </li>
            <li>
              Not using the platform to promote illegal activities, including
              fraud, identity theft, and money laundering.
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4 text-red-700">
            5. Privacy Policy
          </h2>
          <p className="text-gray-700 mb-4">
            Your privacy is important to us. We are committed to protecting your
            personal information. Please refer to our{" "}
            <a href="/privacy-policy" className="text-red-700 hover:underline">
              Privacy Policy
            </a>{" "}
            to learn more about how we collect, use, and safeguard your personal
            data. By agreeing to these terms, you also agree to our Privacy
            Policy.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4 text-red-700">
            6. Fees and Charges
          </h2>
          <p className="text-gray-700 mb-4">
            Some services provided by YourFinTech may involve fees or charges.
            These will be communicated to you clearly before you proceed with
            any service request. By using our services, you agree to pay any
            fees associated with the service, including taxes, transaction fees,
            and any other charges as specified.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4 text-red-700">
            7. Limitation of Liability
          </h2>
          <p className="text-gray-700 mb-4">
            YourFinTech is not liable for any damages, losses, or expenses
            incurred by you as a result of using our services. This includes but
            is not limited to, any errors, omissions, or delays in the service,
            as well as any damage to your computer or device that arises from
            using our platform.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4 text-red-700">
            8. Amendments
          </h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to modify or amend these terms and conditions
            at any time. All changes will be posted on our website, and it is
            your responsibility to review these terms periodically. Your
            continued use of our services after such changes are posted will be
            considered as your acceptance of the modified terms.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4 text-red-700">
            9. Governing Law
          </h2>
          <p className="text-gray-700 mb-4">
            These terms and conditions are governed by the laws of India. Any
            disputes, claims, or legal proceedings shall be subject to the
            exclusive jurisdiction of the courts in Mumbai, Maharashtra.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4 text-red-700">
            10. Contact Us
          </h2>
          <p className="text-gray-700 mb-4">
            If you have any questions or concerns regarding these terms and
            conditions, please reach out to us through the following contact
            details:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              Email:{" "}
              <a
                href="mailto:support@yourfintech.com"
                className="text-red-700 hover:underline"
              >
                support@yourfintech.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:18001234567"
                className="text-red-700 hover:underline"
              >
                1800-123-4567
              </a>
            </li>
          </ul>

          <p className="text-gray-700 mt-6">
            By using our services, you acknowledge that you have read,
            understood, and agree to these terms and conditions.
          </p>
        </div>
      </div>
      <ConnectBtn />
      <Footer />
      <FixedBottom />
    </>
  );
};

export default TermsAndConditions;
