import React, { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const Navbar = forwardRef((props, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [collabOpen, setCollabOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Detect scroll to toggle background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileLinkClick = () => setIsMenuOpen(false);

  const isTransparent = !isScrolled && !isHovered;

  // Determine background for the main header
  const headerBgClass = isMenuOpen
    ? "bg-white text-gray-900 shadow-lg" // Always solid when mobile menu is open
    : isTransparent
    ? "bg-[url('https://img-c.udemycdn.com/course/750x422/4733752_1dbe.jpg')] bg-cover bg-center bg-no-repeat text-white bg-opacity-80 backdrop-blur-sm"
    : "bg-white text-gray-900 shadow-lg";

  // Determine text color for nav links
  const navTextClass = isMenuOpen || !isTransparent ? "text-gray-800" : "text-white";

  return (
    <header
      ref={ref} // forwarded ref for height calculation
      className={`fixed top-0 left-0 w-full z-50 font-[Poppins] transition-all duration-100 ${headerBgClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo + Company Name */}
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Blue Midas Consulting Logo"
            className="h-12 w-12 object-contain rounded-full"
          />
          <h1
            className={`ml-4 text-base sm:text-lg md:text-2xl font-extrabold tracking-wide whitespace-nowrap ${
              isMenuOpen || !isTransparent ? "text-black" : "text-white"
            }`}
          >
            BLUE MIDAS{" "}
            <span className={isMenuOpen || !isTransparent ? "text-blue-700" : "text-white"}>
              CONSULTING
            </span>
          </h1>
        </div>

        {/* Contact + Socials */}
        <div className={`hidden md:flex items-center space-x-6 text-base font-medium ${isTransparent ? "text-white" : "text-gray-700"}`}>
          <span>📍 India</span>
          <span>✉️ info@bluemidasconsulting.com</span>
          <span>📞 +91-8532619973</span>
          <div className="flex items-center space-x-4 ml-4">
            <a
              href="https://www.linkedin.com/company/blue-midas-consulting/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${isTransparent ? "text-white hover:text-blue-200" : "text-blue-500 hover:text-blue-700"}`}
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://www.facebook.com/people/Blue-Midas-Consulting/61565770170202/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${isTransparent ? "text-white hover:text-blue-200" : "text-blue-500 hover:text-blue-700"}`}
            >
              <FaFacebook size={28} />
            </a>
          </div>
        </div>

        {/* Hamburger */}
        <button
          className={`md:hidden focus:outline-none ${isMenuOpen || !isTransparent ? "text-blue-700" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:items-center md:justify-between px-6 py-3 md:py-2 rounded-lg transition-all duration-300 ${
          isMenuOpen ? "bg-white text-gray-800" : isTransparent ? "bg-transparent" : "bg-blue-50 md:bg-transparent"
        }`}
      >
        <nav className={`flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-8 text-base md:text-lg font-semibold w-full md:w-auto ${navTextClass}`}>
          <Link to="/" className="hover:text-blue-700 transition-colors" onClick={handleMobileLinkClick}>Home</Link>
          <Link to="/about" className="hover:text-blue-700 transition-colors" onClick={handleMobileLinkClick}>About Us</Link>

          {/* Services Dropdown */}
          <div className="relative md:cursor-pointer" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <span className="flex items-center hover:text-blue-700 transition-colors">
              Services
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <div className={`absolute left-0 top-full mt-2 w-full md:w-60 bg-white text-gray-800 rounded-xl shadow-xl py-2 z-20 transition-all duration-200 ${servicesOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
              {[
                ["Marketing Strategy", "/services/marketing-strategy"],
                ["Data Analytics", "/services/data-analytics"],
                ["Operations Consulting", "/services/operations-consulting"],
                ["Digital Transformation", "/services/digital-transformation"],
                ["Project Management Guidance", "/services/project-management-guidance"],
                ["Supply Chain Management", "/services/supply-chain-management"],
              ].map(([label, link]) => (
                <Link key={link} to={link} className="block px-4 py-2 hover:bg-blue-100 text-base transition-colors" onClick={handleMobileLinkClick}>{label}</Link>
              ))}
            </div>
          </div>

          {/* Collaboration Dropdown */}
          <div className="relative md:cursor-pointer" onMouseEnter={() => setCollabOpen(true)} onMouseLeave={() => setCollabOpen(false)}>
            <span className="flex items-center hover:text-blue-700 transition-colors">
              Collaboration Models
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <div className={`absolute left-0 top-full mt-2 w-full md:w-60 bg-white text-gray-800 rounded-xl shadow-xl py-2 z-20 transition-all duration-200 ${collabOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
              {[
                ["Business Consulting Methodology", "/collaboration/business"],
                ["Other Engagement Models", "/collaboration/other"],
              ].map(([label, link]) => (
                <Link key={link} to={link} className="block px-4 py-2 hover:bg-blue-100 text-base transition-colors" onClick={handleMobileLinkClick}>{label}</Link>
              ))}
            </div>
          </div>

          <Link to="/case-studies" className="hover:text-blue-700 transition-colors" onClick={handleMobileLinkClick}>Case Studies</Link>
          <Link to="/contact" className="hover:text-blue-700 transition-colors" onClick={handleMobileLinkClick}>Contact</Link>
          <Link to="/refer" className="hover:text-blue-700 transition-colors" onClick={handleMobileLinkClick}>Refer Us</Link>
        </nav>

        {/* Desktop Brochure Button */}
        <a href="/files/Blue-Midas-Consulting-Brochure.pdf" download className={`hidden md:inline-block font-bold py-2 px-6 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 ${isTransparent ? "bg-white text-blue-700 hover:bg-blue-100" : "bg-blue-700 hover:bg-blue-800 text-white"}`}>
          Download Brochure
        </a>
      </div>
    </header>
  );
});

export default Navbar;
