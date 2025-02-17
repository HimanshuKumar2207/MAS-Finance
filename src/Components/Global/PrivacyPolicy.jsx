import React from "react";
import Navbar from "./Navbar";
import HBanner from "./HBanner";
import Footer from "./Footer";
import FixedBottom from "./FixedBottom";
import ConnectBtn from "./ConnectBtn";
import img from "../../assets/Policy.jpg";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <HBanner
        heading="Review our privacy, and policy"
        desc="By using MAS Financial services, you accept our terms, privacy policies, and agree to comply with all relevant laws and regulations, ensuring responsible usage and adherence to our service agreements."
        img={img}
      />
      <div className="w-full text-black py-16 px-4 lg:mt-16">
        <div className="mx-auto border-2 border-white shadow-lg px-4 sm:px-6 lg:px-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-red-700 mb-8 text-center">
            Privacy Policy
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-md text-gray-600 mb-8">
            At MAS Financial, we are committed to protecting your privacy. This
            Privacy Policy outlines how we collect, use, and safeguard your
            personal information when you use our services, including personal
            loans, insurance, mutual funds, stock investments, and health
            insurance.
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold text-red-700 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-md text-gray-600 mb-6">
            We collect personal information in order to provide you with the
            best possible service. This information may include:
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>
                Your name, contact information, and identification details.
              </li>
              <li>
                Your financial details, including income, employment, and credit
                history.
              </li>
              <li>
                Information regarding your health for health insurance purposes.
              </li>
              <li>
                Investment preferences for mutual fund and stock investments.
              </li>
            </ul>
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold text-red-700 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-md text-gray-600 mb-6">
            We use the information we collect to:
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>
                Provide you with the financial services you request, including
                loans, insurance, mutual funds, and investments.
              </li>
              <li>
                Assess your eligibility for products such as loans, insurance
                plans, and investment strategies.
              </li>
              <li>
                Communicate with you about your account or service requests.
              </li>
              <li>
                Enhance the services we provide based on your preferences and
                financial goals.
              </li>
            </ul>
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold text-red-700 mb-4">
            3. Information Security
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-md text-gray-600 mb-6">
            We take the security of your personal information seriously and have
            implemented physical, electronic, and procedural safeguards to
            protect it. These include:
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>Encryption of sensitive data.</li>
              <li>Access controls to limit who can view your information.</li>
              <li>
                Regular audits to ensure compliance with security protocols.
              </li>
            </ul>
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold text-red-700 mb-4">
            4. Sharing Your Information
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-md text-gray-600 mb-6">
            We do not sell or rent your personal information to third parties.
            However, we may share your information with trusted service
            providers or regulatory authorities to help us:
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>
                Process transactions related to your loans, insurance, or
                investments.
              </li>
              <li>Comply with legal or regulatory requirements.</li>
              <li>Improve the quality of the services we provide.</li>
            </ul>
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold text-red-700 mb-4">
            5. Your Rights
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-md text-gray-600 mb-6">
            You have the right to access, update, or delete your personal
            information at any time. If you would like to make any changes or
            have questions regarding the use of your information, please contact
            us at:
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>Email: support@masfinancial.com</li>
              <li>Phone: +1 234-567-890</li>
            </ul>
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold text-red-700 mb-4">
            6. Cookies and Tracking
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-md text-gray-600 mb-6">
            Our website uses cookies and tracking technologies to enhance your
            experience and gather information about your usage patterns. This
            helps us improve our services and tailor them to your needs.
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold text-red-700 mb-4">
            7. Changes to This Privacy Policy
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-md text-gray-600 mb-6">
            We may update this Privacy Policy from time to time. When we do, we
            will post the revised policy on this page and update the effective
            date at the top of the policy. We encourage you to review this
            policy periodically to stay informed about how we are protecting
            your information.
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold text-red-700 mb-4">
            8. Contact Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-md text-gray-600 mb-6">
            If you have any questions or concerns about this Privacy Policy,
            please feel free to contact us:
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>Email: support@masfinancial.com</li>
              <li>Phone: +1 234-567-890</li>
            </ul>
          </p>
        </div>
      </div>

      <ConnectBtn />
      <Footer />
      <FixedBottom />
    </>
  );
};

export default PrivacyPolicy;
