import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import ServicesList from "../pages/ServiceList";
import PrivacyPolicy from "../Components/Global/PrivacyPolicy";
import TermsAndCondition from "../Components/Global/TermsAndCondition";
import stock from "../assets/stock.jpg";
import Loan from "../assets/loanBanner.jpg";

const servicesArr = [
  {
    id: "health-insurance",
    serviceName: "Health Insurance",
    overview:
      "Comprehensive health coverage plans for individuals and families with flexible options, ensuring you receive the best care when you need it most.",
    keyFeatures: [
      "Coverage for hospitalization expenses",
      "Pre & post hospitalization coverage",
      "Cashless treatment network across top hospitals",
      "Critical illness coverage including cancer, heart diseases, etc.",
      "Annual health check-ups for early detection",
      "Ambulance cover to ensure quick access to healthcare facilities",
      "Maternity and new born care under selected plans",
    ],
    benefits: [
      "Tax benefits under Section 80D of the Income Tax Act",
      "24/7 customer support and assistance",
      "Quick claim settlement for faster reimbursements",
      "Coverage for alternative treatments like Ayurveda and Homeopathy",
      "No claim bonus rewards for claim-free years",
      "Lifetime renewability of policies",
    ],
    eligibility: [
      "Age: 18 years to 65 years for individual plans",
      "Family floater options available for up to 5 members",
      "Coverage for pre-existing conditions after waiting period (2-4 years)",
      "Indian residents and NRIs eligible for coverage",
      "No medical examination required for basic plans",
    ],
    howToApply: [
      "Fill online application form on the website",
      "Choose coverage amount based on needs and budget",
      "Upload necessary documents (Aadhaar, PAN, etc.)",
      "Make payment via credit/debit card or net banking",
      "Instant policy issuance and download the policy document",
    ],

    contactInfo: {
      email: "health@yourfintech.com",
      phone: "1800-HEALTH-INS",
    },
  },
  {
    id: "personal-loans",
    serviceName: "Personal Loans",
    overview:
      "Instant personal loans with easy approval, no collateral required, and competitive interest rates. Get the funds you need to meet your personal financial goals.",
    keyFeatures: [
      "Loan amount ranging from ₹50,000 to ₹25 lakh",
      "Flexible loan tenure: 12 to 60 months",
      "Competitive interest rates starting at 10%",
      "No collateral or guarantor required",
      "Instant approval process with minimal documentation",
      "Online loan tracking and account management",
    ],
    benefits: [
      "Funds disbursed within 24 hours of approval",
      "Minimal documentation including income proof and identity verification",
      "EMI flexibility based on your repayment capacity",
      "Online account management for convenience",
      "Top-up loan facility for existing borrowers",
      "No prepayment penalties after 6 months",
    ],
    eligibility: [
      "Minimum age: 21 years to 58 years",
      "Minimum monthly income: ₹25,000 or more",
      "Good credit score (650+) to improve chances of approval",
      "Salaried professionals, self-employed individuals, and business owners",
    ],
    howToApply: [
      "Check eligibility online through our website or app",
      "Submit income documents (Salary slips, bank statements, etc.)",
      "Get instant loan approval after verification",
      "E-sign agreement through email or app",
      "Receive funds directly into your account",
    ],

    contactInfo: {
      email: "loans@yourfintech.com",
      phone: "1800-PERSONAL",
    },
    img: Loan,
  },
  {
    id: "automobile-insurance",
    serviceName: "Automobile Insurance",
    overview:
      "Comprehensive automobile insurance to protect your vehicle from accidents, natural disasters, and theft, with the added benefit of cashless repairs.",
    keyFeatures: [
      "Third-party liability coverage for legal protection",
      "Own damage protection for repairs and accidents",
      "24/7 roadside assistance for emergency services",
      "No Claim Bonus (NCB) retention for claim-free years",
      "Cashless repair network across hundreds of service centers",
      "Personal accident cover for the policyholder",
      "Coverage for theft and damage due to natural disasters",
    ],
    benefits: [
      "Instant policy issuance with no paperwork",
      "Coverage for natural disasters like floods and earthquakes",
      "Personal accident cover for the driver and passengers",
      "Emergency towing service to the nearest workshop",
      "Online claim registration for convenience",
      "Premium discounts for safe driving records",
    ],
    eligibility: [
      "All types of private vehicles eligible",
      "New and used vehicles (up to 15 years old)",
      "Commercial vehicles optional",
      "Valid Registration Certificate (RC) required",
    ],
    howToApply: [
      "Enter vehicle details like make, model, and year of manufacture",
      "Select the coverage type: Comprehensive or Third-party",
      "Upload documents like RC book, driver's license, and insurance history",
      "Make payment using credit/debit card or net banking",
      "Download the policy document instantly via email or app",
    ],

    contactInfo: {
      email: "auto@yourfintech.com",
      phone: "1800-AUTO-INS",
    },
  },
  {
    id: "mutual-funds",
    serviceName: "Mutual Funds",
    overview:
      "Expertly curated mutual fund investment options designed to help individuals grow wealth and achieve their long-term financial goals.",
    keyFeatures: [
      "Wide range of fund categories: Equity, Debt, Hybrid, etc.",
      "SIP options starting from ₹500/month",
      "Expert portfolio management to suit your risk profile",
      "Tax-saving ELSS options for additional tax benefits",
      "Real-time portfolio tracking and rebalancing",
      "Regular fund reviews and updates from financial experts",
    ],
    benefits: [
      "Diversified investment portfolio with low risk exposure",
      "Systematic Investment Plans (SIPs) for disciplined investing",
      "Automated portfolio rebalancing to maintain the optimal risk-return ratio",
      "Liquidity with multiple exit options",
      "Detailed performance reports for better decision-making",
    ],
    eligibility: [
      "KYC-compliant investors (for both residents and NRIs)",
      "Minors can invest through their legal guardians",
      "Corporate investments also available",
      "Minimum investment amount for SIP: ₹500",
    ],
    howToApply: [
      "Complete KYC verification online",
      "Take a risk assessment to determine your investment profile",
      "Select the right investment plan based on your financial goals",
      "Set up payment method (e.g., bank transfer or auto-debit for SIP)",
      "Start investing and track your investments via app or online portal",
    ],

    contactInfo: {
      email: "invest@yourfintech.com",
      phone: "1800-MUTUAL-FD",
    },
  },
  {
    id: "stock-investment",
    serviceName: "Stock Investment",
    overview:
      "Start investing in the stock market with zero brokerage charges on equity delivery and advanced tools for real-time market analysis.",
    keyFeatures: [
      "Zero brokerage charges on equity delivery",
      "Access to real-time market data and stock charts",
      "Advanced charting tools and technical analysis features",
      "Participate in IPOs and new market offerings",
      "Margin trading facilities for increased leverage",
    ],
    benefits: [
      "Demat account integration for seamless trading",
      "AI-powered stock recommendations for better decisions",
      "Customizable watchlists to track your favorite stocks",
      "Alerts for corporate actions like dividends and stock splits",
      "Portfolio diversification tools for risk mitigation",
    ],
    eligibility: [
      "PAN card mandatory for all investors",
      "Completed KYC (Know Your Customer) verification",
      "Valid bank account for fund transfers",
      "Resident Indian status required for account opening",
    ],
    howToApply: [
      "Open a Demat and trading account with our platform",
      "Link your bank account for easy fund transfers",
      "Deposit funds to your trading account",
      "Start trading and monitor your investments",
      "Stay updated with market trends through real-time data and alerts",
    ],

    contactInfo: {
      email: "stocks@yourfintech.com",
      phone: "1800-STOCK-IN",
    },
    img: stock,
  },
];

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/termsandcondition" element={<TermsAndCondition />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />

        <Route
          path="/services/healthinsurance"
          element={<ServicesList serData={servicesArr[0]} />}
        />
        <Route
          path="/services/personalloans"
          element={<ServicesList serData={servicesArr[1]} />}
        />

        <Route
          path="/services/automobileinsurance"
          element={<ServicesList serData={servicesArr[2]} />}
        />
        <Route
          path="/services/mutualfunds"
          element={<ServicesList serData={servicesArr[3]} />}
        />
        <Route
          path="/services/stockinvestment"
          element={<ServicesList serData={servicesArr[4]} />}
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
