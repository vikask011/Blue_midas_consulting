import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [collabOpen, setCollabOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) setNavHeight(navRef.current.offsetHeight);
  }, []);

  const handleMobileLinkClick = () => setIsMenuOpen(false);

  return (
    <>
      <header
        ref={navRef}
        className="fixed top-0 left-0 w-full bg-white text-gray-900 shadow-lg z-50 font-[Poppins]"
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-5">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Blue Midas Consulting Logo"
              className="h-14 w-14 object-contain rounded-full"
            />
            <h1 className="ml-4 text-2xl md:text-3xl font-extrabold text-blue-700 tracking-wide">
              BLUE MIDAS CONSULTING
            </h1>
          </div>

          {/* Contact + Socials */}
          <div className="hidden md:flex items-center space-x-8 text-lg font-medium text-gray-700">
            <span>📍 India</span>
            <span>✉️ info@bluemidasconsulting.com</span>
            <span>📞 +91-8532619973</span>
            <div className="flex items-center space-x-4 ml-6">
              <a
                href="https://www.linkedin.com/company/blue-midas-consulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                <FaLinkedin size={34} />
              </a>
              <a
                href="https://www.facebook.com/people/Blue-Midas-Consulting/61565770170202/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                <FaFacebook size={34} />
              </a>
            </div>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-blue-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-9 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:justify-between bg-blue-50 md:bg-transparent px-6 py-5 md:py-3 rounded-lg transition-all duration-300`}
        >
          <nav className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-10 text-lg md:text-xl font-semibold w-full md:w-auto text-gray-800">
            <Link
              to="/"
              className="hover:text-blue-700 transition-colors"
              onClick={handleMobileLinkClick}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-700 transition-colors"
              onClick={handleMobileLinkClick}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
<div
  className="relative md:cursor-pointer"
  onMouseEnter={() => setServicesOpen(true)}
  onMouseLeave={() => setServicesOpen(false)}
>
  <span className="flex items-center hover:text-blue-700 transition-colors w-full md:w-auto">
    Services
    <svg
      className="w-6 h-6 ml-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </span>

  {/* Dropdown */}
  <div
    className={`absolute left-0 top-full mt-3 w-full md:w-72 bg-white text-gray-800 rounded-xl shadow-xl py-3 z-20 transition-all duration-200
      ${servicesOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
  >
    {[
      ["Marketing Strategy", "/services/marketing-strategy"],
      ["Data Analytics", "/services/data-analytics"],
      ["Operations Consulting", "/services/operations-consulting"],
      ["Digital Transformation", "/services/digital-transformation"],
      ["Project Management Guidance", "/services/project-management-guidance"],
      ["Supply Chain Management", "/services/supply-chain-management"],
    ].map(([label, link]) => (
      <Link
        key={link}
        to={link}
        className="block px-6 py-2 hover:bg-blue-100 text-lg transition-colors"
        onClick={handleMobileLinkClick}
      >
        {label}
      </Link>
    ))}
  </div>
</div>


           {/* Collaboration Dropdown */}
<div
  className="relative md:cursor-pointer"
  onMouseEnter={() => setCollabOpen(true)}
  onMouseLeave={() => setCollabOpen(false)}
>
  <span className="flex items-center hover:text-blue-700 transition-colors w-full md:w-auto">
    Collaboration Models
    <svg
      className="w-6 h-6 ml-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </span>

  {/* Dropdown */}
  <div
    className={`absolute left-0 top-full mt-3 w-full md:w-72 bg-white text-gray-800 rounded-xl shadow-xl py-3 z-20 transition-all duration-200
      ${collabOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
  >
    {[
      ["Business Consulting Methodology", "/collaboration/business"],
      ["Other Engagement Models", "/collaboration/other"],
    ].map(([label, link]) => (
      <Link
        key={link}
        to={link}
        className="block px-6 py-2 hover:bg-blue-100 text-lg transition-colors"
        onClick={handleMobileLinkClick}
      >
        {label}
      </Link>
    ))}
  </div>
</div>

            <Link
              to="/case-studies"
              className="hover:text-blue-700 transition-colors"
              onClick={handleMobileLinkClick}
            >
              Case Studies
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-700 transition-colors"
              onClick={handleMobileLinkClick}
            >
              Contact
            </Link>
            <Link
              to="/refer"
              className="hover:text-blue-700 transition-colors"
              onClick={handleMobileLinkClick}
            >
              Refer Us
            </Link>

            {/* Mobile Social Icons */}
            <div className="flex md:hidden space-x-5 mt-5">
              <a
                href="https://www.linkedin.com/company/blue-midas-consulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-500 transition-colors"
                onClick={handleMobileLinkClick}
              >
                <FaLinkedin size={26} />
              </a>
              <a
                href="https://www.facebook.com/people/Blue-Midas-Consulting/61565770170202/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-500 transition-colors"
                onClick={handleMobileLinkClick}
              >
                <FaFacebook size={26} />
              </a>
            </div>

            {/* Mobile Brochure Button */}
            <a
              href="/files/Blue-Midas-Consulting-Brochure.pdf"
              download
              className="mt-5 md:hidden bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-center block"
              onClick={handleMobileLinkClick}
            >
              Download Brochure
            </a>
          </nav>

          {/* Desktop Brochure Button */}
          <a
            href="/files/Blue-Midas-Consulting-Brochure.pdf"
            download
            className="hidden md:inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Download Brochure
          </a>
        </div>
      </header>

      {/* Spacer */}
      <div style={{ height: navHeight }}></div>

      {/* Tailwind Animation for dropdown fade-in */}
      <style>
        {`
          @keyframes fade-in {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fade-in 0.2s ease forwards;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
