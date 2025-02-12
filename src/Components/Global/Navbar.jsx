import React, { useState, useEffect, useRef } from "react";
import MainLogo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";

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
      { name: "Personal Loans", pathName: "/services/personalloans" },
      { name: "Health Insurance", pathName: "/services/healthinsurance" },
      { name: "Mutual Funds", pathName: "/services/mutualfunds" },
      { name: "Stock Investments", pathName: "/services/stockinvestment" },
      {
        name: "Automobile Insurance",
        pathName: "/services/automobileinsurance",
      },
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
  const { pathname } = useLocation();

  // Refs for mobile menu and services dropdown
  const mobileMenuRef = useRef(null);
  const servicesDropdownRef = useRef(null);

  useEffect(() => {
    setActiveNav(pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle services dropdown
  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  // Close mobile menu and dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the mobile menu
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }

      // Check if the click is outside the services dropdown
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 z-30 w-full">
      <nav className="bg-white w-full flex flex-wrap justify-between px-6 md:px-12 lg:px-24 items-center py-4 shadow-xl border-4 border-b-skyCustom">
        {/* Logo */}
        <Link to="/">
          <img src={MainLogo} alt="Logo" className="w-[90px] md:w-[100px]" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-6 text-black text-lg">
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
                      ref={servicesDropdownRef} // Reference for the services dropdown
                      className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-48"
                    >
                      {dropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.pathName}
                          className="block px-2 py-2 text-black  hover:bg-red-700 hover:text-white rounded-md"
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
        <Link to="/contact">
          <button className="text-lg border-2 border-red-500 rounded-lg px-3 py-1 hover:border-none hover:bg-red-700 hover:text-white hidden md:block">
            Connect
          </button>
        </Link>
      </nav>

      {/* Mobile Nav Links (Hamburger menu) */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef} // Reference for the mobile menu
          className="md:hidden bg-white w-full py-4 shadow-lg flex flex-col items-center"
        >
          {NavData.map(({ name, pathName, dropdown }, index) => (
            <div key={index} className="w-full text-center text-lg py-1.5">
              {dropdown ? (
                <div
                  className="cursor-pointer hover:bg-gradient-to-r from-red-700 to-red-600 transition-all hover:text-white duration-200 py-2 px-6 rounded-md"
                  onClick={toggleServicesDropdown}
                >
                  {name}
                  {isServicesDropdownOpen && (
                    <div
                      ref={servicesDropdownRef} // Reference for the services dropdown
                      className="mt-1 text-sm bg-white shadow-lg rounded-lg w-full"
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
                  onClick={() => setIsMobileMenuOpen(false)} // Close the mobile menu when a link is clicked
                >
                  {name}
                </Link>
              )}
            </div>
          ))}
          <Link to="/contact">
            <button className="w-full text-md border-2 border-red-500 rounded-lg px-8 py-1 hover:border-none hover:bg-red-700 hover:text-white mt-4">
              Connect
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
