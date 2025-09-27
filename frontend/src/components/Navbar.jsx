// Navbar.jsx
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCollaborationOpen, setIsCollaborationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // refs to handle delayed hiding (desktop only)
  const servicesTimeout = useRef(null);
  const collaborationTimeout = useRef(null);

  return (
    <header className="bg-white text-gray-900 shadow-md">
      {/* Top Bar */}
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

        {/* Contact (hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-6 text-base font-medium text-gray-700">
          <span>📍 India</span>
          <span>✉️ info@bluemidasconsulting.com</span>
          <span>📞 +91-8532619973</span>
        </div>

        {/* Hamburger button (mobile only) */}
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
        <nav className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-8 text-lg font-medium">
          <Link to="/" className="hover:text-blue-700 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-700 transition-colors">
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(servicesTimeout.current);
              setIsServicesOpen(true);
            }}
            onMouseLeave={() => {
              servicesTimeout.current = setTimeout(
                () => setIsServicesOpen(false),
                300
              );
            }}
          >
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center hover:text-blue-700 transition-colors"
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
            {isServicesOpen && (
              <div className="md:absolute md:top-full left-0 mt-2 w-full md:w-64 bg-white text-gray-800 rounded-md shadow-lg py-3 z-10">
                <Link
                  to="/services/marketing-strategy"
                  className="block px-5 py-2 hover:bg-blue-100"
                >
                  Marketing Strategy
                </Link>
                <Link
                  to="/services/data-analytics"
                  className="block px-5 py-2 hover:bg-blue-100"
                >
                  Data Analytics
                </Link>
                <Link
                  to="/services/operations-consulting"
                  className="block px-5 py-2 hover:bg-blue-100"
                >
                  Operations Consulting
                </Link>
                <Link
                  to="/services/digital-transformation"
                  className="block px-5 py-2 hover:bg-blue-100"
                >
                  Digital Transformation
                </Link>
                <Link
                  to="/services/project-management-guidance"
                  className="block px-5 py-2 hover:bg-blue-100"
                >
                  Project Management Guidance
                </Link>
                <Link
                  to="/services/supply-chain-management"
                  className="block px-5 py-2 hover:bg-blue-100"
                >
                  Supply Chain Management
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/case-studies"
            className="hover:text-blue-700 transition-colors"
          >
            Case Studies
          </Link>

          {/* Collaboration Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(collaborationTimeout.current);
              setIsCollaborationOpen(true);
            }}
            onMouseLeave={() => {
              collaborationTimeout.current = setTimeout(
                () => setIsCollaborationOpen(false),
                300
              );
            }}
          >
            <button
              onClick={() => setIsCollaborationOpen(!isCollaborationOpen)}
              className="flex items-center hover:text-blue-700 transition-colors"
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
            {isCollaborationOpen && (
              <div className="md:absolute md:top-full left-0 mt-2 w-full md:w-64 bg-white text-gray-800 rounded-md shadow-lg py-3 z-10">
                <Link
                  to="/collaboration/business"
                  className="block px-5 py-2 hover:bg-blue-100"
                >
                  Business Consulting Methodology
                </Link>
                <Link
                  to="/collaboration/other"
                  className="block px-5 py-2 hover:bg-blue-100"
                >
                  Other Engagement Models
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-blue-700 transition-colors">
            Contact
          </Link>
          <Link to="/refer" className="hover:text-blue-700 transition-colors">
            Refer Us
          </Link>
        </nav>

        {/* Brochure Button */}
        <a
          href="/files/Blue-Midas-Consulting-Brochure.pdf"
          download
          className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 text-lg"
        >
          Download Brochure
        </a>
      </div>
    </header>
  );
};

export default Navbar;
