import React, { useState, useEffect, useRef } from "react";
import MainLogo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import ContactPopup from "./ContactPopup";

const NavData = [
  {
    name: "Home",
    pathName: "/",
  },
  {
    name: "About",
    pathName: "/about",
  },
  {
    name: "Services ",
    pathName: "/services",
    dropdown: [
      { name: "Mutual Funds", pathName: "/services/mutualfunds" },
      { name: "Stock Investments", pathName: "/services/stockinvestment" },
      { name: "Health Insurance", pathName: "/services/healthinsurance" },
      {
        name: "Automobile Insurance",
        pathName: "/services/automobileinsurance",
      },
      { name: "Personal Loans", pathName: "/services/personalloans" },
    ],
  },
  {
    name: "Contact Us",
    pathName: "/contact",
  },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false); // State for popup visibility
  const { pathname } = useLocation();

  // Refs for mobile menu, services dropdown, and popup
  const mobileMenuRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const popupRef = useRef(null);

  // Refs for the initial visit check
  const isFirstVisit = useRef(true); // Ref to track first visit

  // Disable scrolling when popup is open
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPopupOpen]);

  useEffect(() => {
    setActiveNav(pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Show popup after 5 seconds only on the first visit
  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisited");

    // If it's the first visit, show the popup
    if (!hasVisitedBefore) {
      const timer = setTimeout(() => {
        if (isFirstVisit.current) {
          setPopupOpen(true); // Show popup after 5 seconds
          localStorage.setItem("hasVisited", "true"); // Mark as visited
          isFirstVisit.current = false; // Mark first visit as done
        }
      }, 5000);

      // Cleanup timer if the component unmounts before 5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle services dropdown
  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  // Handle outside clicks to close mobile menu, dropdown, and popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close mobile menu
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }

      // Close services dropdown
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setIsServicesDropdownOpen(false);
      }

      // Close popup
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 z-30 w-full">
      <nav className="bg-white w-full flex flex-wrap  justify-evenly md:justify-between px-[10vw] md:px-12 lg:px-24 items-center py-4 shadow-xl border-4 border-b-skyCustom">
        {/* Logo */}
        <Link to="/">
          <img src={MainLogo} alt="Logo" className="w-[90px] md:w-[100px]" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-6 md:gap-2 text-black text-lg md:text-md">
          {NavData.map(({ name, pathName, dropdown }, index) => (
            <div key={index} className="relative">
              {dropdown ? (
                <div
                  className="cursor-pointer hover:bg-gradient-to-r from-red-700 to-red-600 transition-all hover:text-white duration-200 p-1 px-2 rounded-md "
                  onClick={toggleServicesDropdown}
                >
                  {name}
                  <MdArrowDropDown className="inline-block" />
                  {isServicesDropdownOpen && (
                    <div
                      ref={servicesDropdownRef}
                      className="absolute top-full left-0 mt-4 bg-white shadow-lg rounded-lg w-52"
                    >
                      {dropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.pathName}
                          className="block px-3 py-2 text-black  hover:text-red-700 hover:font-semibold rounded-md"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={pathName}
                  className={
                    activeNav === pathName
                      ? "bg-gradient-to-r cursor-pointer from-red-700 to-red-600 text-white p-1 px-2 rounded-md"
                      : "hover:bg-gradient-to-r cursor-pointer from-red-700 to-red-600 transition-all hover:text-white duration-200 p-1 px-2 rounded-md"
                  }
                >
                  {name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Hamburger Menu (Mobile view) */}
        <button
          className="md:hidden flex items-center justify-center text-black text-3xl ml-auto"
          onClick={toggleMobileMenu}
        >
          <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        {/* Connect Button (Desktop view) */}
        <button
          onClick={() => setPopupOpen(true)} // Open popup on click
          className="text-lg border-2 border-red-500 rounded-lg px-3 py-1 hover:border-none hover:bg-red-700 hover:text-white hidden md:block"
        >
          Connect
        </button>
      </nav>

      {/* Mobile Nav Links (Hamburger menu) */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-white w-full py-3 shadow-lg flex flex-col items-center"
        >
          {NavData.map(({ name, pathName, dropdown }, index) => (
            <div key={index} className="w-full text-center text-lg py-2">
              {dropdown ? (
                <div
                  className="cursor-pointer hover:bg-gradient-to-r from-red-700 to-red-600 transition-all hover:text-white duration-200 py-2 px-4 rounded-md"
                  onClick={toggleServicesDropdown}
                >
                  {name}
                  {isServicesDropdownOpen && (
                    <div
                      ref={servicesDropdownRef}
                      className="mt-2 text-sm bg-white shadow-lg rounded-lg w-full "
                    >
                      {dropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.pathName}
                          className="block px-4 py-2 text-black hover:bg-red-700 hover:text-white rounded-md"
                          onClick={() => {
                            setIsServicesDropdownOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={pathName}
                  className={
                    activeNav === pathName
                      ? "bg-gradient-to-r cursor-pointer from-red-700 to-red-600 text-white p-1.5 px-2 rounded-md my-2 w-full text-center"
                      : "hover:bg-gradient-to-r cursor-pointer from-red-700 to-red-600 transition-all hover:text-white duration-200 p-1 px-2 rounded-md my-2 w-full text-center"
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {name}
                </Link>
              )}
            </div>
          ))}
          <button
            onClick={() => setPopupOpen(true)} // Open popup on click
            className="w-auto text-md  border-2 border-red-500 rounded-lg px-8 py-1 hover:border-none hover:bg-red-700 hover:text-white mt-4"
          >
            Connect
          </button>
        </div>
      )}

      {/* Popup */}
      {isPopupOpen && (
        <div ref={popupRef}>
          <ContactPopup onClose={() => setPopupOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
