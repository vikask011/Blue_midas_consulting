import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [collabOpen, setCollabOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);
  const servicesRef = useRef(null);
  const collabRef = useRef(null);

  useEffect(() => {
    if (navRef.current) setNavHeight(navRef.current.offsetHeight);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      if (collabRef.current && !collabRef.current.contains(event.target)) {
        setCollabOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Helper for closing mobile menu on link click
  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
    setServicesOpen(false);
    setCollabOpen(false);
  };

  return (
    <>
      <header
        ref={navRef}
        className="fixed top-0 left-0 w-full bg-white text-gray-900 shadow-md z-50"
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Blue Midas Consulting Logo"
              className="h-12 w-12 object-contain rounded-full"
            />
            <h1 className="ml-3 text-xl md:text-2xl font-extrabold text-blue-700">
              BLUE MIDAS CONSULTING
            </h1>
          </div>

          {/* Contact + Socials */}
          <div className="hidden md:flex items-center space-x-6 text-base font-medium text-gray-700">
            <span>📍 India</span>
            <span>✉️ info@bluemidasconsulting.com</span>
            <span>📞 +91-8532619973</span>
            <div className="flex items-center space-x-3 ml-4">
              <a
                href="https://www.linkedin.com/company/blue-midas-consulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.facebook.com/people/Blue-Midas-Consulting/61565770170202/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                <FaFacebook size={30} />
              </a>
            </div>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-blue-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-8 h-8"
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
          } md:flex md:items-center md:justify-between bg-blue-50 md:bg-transparent px-6 py-4 md:py-2 rounded-lg`}
        >
          <nav className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-8 text-lg font-medium w-full md:w-auto">

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
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center hover:text-blue-700 transition-colors w-full md:w-auto"
              >
                Services
                <svg
                  className="w-5 h-5 ml-1"
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
              </button>
              <div
                className={`${
                  servicesOpen ? "block" : "hidden"
                } md:absolute md:left-0 md:top-full mt-2 w-full md:w-64 bg-white text-gray-800 rounded-md shadow-lg py-3 z-20`}
              >
                <Link
                  to="/services/marketing-strategy"
                  className="block px-5 py-2 hover:bg-blue-100"
                  onClick={handleMobileLinkClick}
                >
                  Marketing Strategy
                </Link>
                <Link
                  to="/services/data-analytics"
                  className="block px-5 py-2 hover:bg-blue-100"
                  onClick={handleMobileLinkClick}
                >
                  Data Analytics
                </Link>
                <Link
                  to="/services/operations-consulting"
                  className="block px-5 py-2 hover:bg-blue-100"
                  onClick={handleMobileLinkClick}
                >
                  Operations Consulting
                </Link>
                <Link
                  to="/services/digital-transformation"
                  className="block px-5 py-2 hover:bg-blue-100"
                  onClick={handleMobileLinkClick}
                >
                  Digital Transformation
                </Link>
                <Link
                  to="/services/project-management-guidance"
                  className="block px-5 py-2 hover:bg-blue-100"
                  onClick={handleMobileLinkClick}
                >
                  Project Management Guidance
                </Link>
                <Link
                  to="/services/supply-chain-management"
                  className="block px-5 py-2 hover:bg-blue-100"
                  onClick={handleMobileLinkClick}
                >
                  Supply Chain Management
                </Link>
              </div>
            </div>

            {/* Collaboration Dropdown */}
            <div className="relative" ref={collabRef}>
              <button
                onClick={() => setCollabOpen(!collabOpen)}
                className="flex items-center hover:text-blue-700 transition-colors w-full md:w-auto"
              >
                Collaboration Models
                <svg
                  className="w-5 h-5 ml-1"
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
              </button>
              <div
                className={`${
                  collabOpen ? "block" : "hidden"
                } md:absolute md:left-0 md:top-full mt-2 w-full md:w-64 bg-white text-gray-800 rounded-md shadow-lg py-3 z-20`}
              >
                <Link
                  to="/collaboration/business"
                  className="block px-5 py-2 hover:bg-blue-100"
                  onClick={handleMobileLinkClick}
                >
                  Business Consulting Methodology
                </Link>
                <Link
                  to="/collaboration/other"
                  className="block px-5 py-2 hover:bg-blue-100"
                  onClick={handleMobileLinkClick}
                >
                  Other Engagement Models
                </Link>
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
            <div className="flex md:hidden space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/company/blue-midas-consulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-500 transition-colors"
                onClick={handleMobileLinkClick}
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://www.facebook.com/people/Blue-Midas-Consulting/61565770170202/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-500 transition-colors"
                onClick={handleMobileLinkClick}
              >
                <FaFacebook size={22} />
              </a>
            </div>

            {/* Mobile Brochure Button */}
            <a
              href="/files/Blue-Midas-Consulting-Brochure.pdf"
              download
              className="mt-4 md:hidden bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 text-center block"
              onClick={handleMobileLinkClick}
            >
              Download Brochure
            </a>
          </nav>

          {/* Desktop Brochure Button */}
          <a
            href="/files/Blue-Midas-Consulting-Brochure.pdf"
            download
            className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Download Brochure
          </a>
        </div>
      </header>

      {/* Spacer */}
      <div style={{ height: navHeight }}></div>
    </>
  );
};

export default Navbar;
