import React from 'react';
import { FaLinkedin, FaFacebook, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Refer Us', path: '/refer' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-700 py-12 shadow-inner border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Blue Midas Consulting</h2>
            <p className="text-base text-gray-600 mb-5">
              We transform ambitious visions into reality through strategic consulting and innovative solutions.
            </p>
            <div className="flex space-x-5 text-gray-500">
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-900 transition-colors">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-gray-900 transition-colors">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="mailto:info@bluemidasconsulting.com" aria-label="Email" className="hover:text-gray-900 transition-colors">
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-3 text-base text-gray-600">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-gray-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Contact Info</h3>
            <ul className="space-y-4 text-base text-gray-600">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 mr-2 mt-1 text-gray-500" />
                <span>India Office</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="h-5 w-5 mr-2 text-gray-500" />
                <a href="tel:+918532619973" className="hover:text-gray-900 transition-colors">
                  +91-8532619973
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 mr-2 text-gray-500" />
                <a href="mailto:info@bluemidasconsulting.com" className="hover:text-gray-900 transition-colors">
                  info@bluemidasconsulting.com
                </a>
              </li>
              <li className="flex items-start">
                <FaCalendarAlt className="h-5 w-5 mr-2 mt-1 text-gray-500" />
                <div>
                  <p className="font-medium text-gray-700">Mon - Sat: 10:00 am - 08:00 pm</p>
                  <p className="text-sm text-gray-500">Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Stay Updated</h3>
            <p className="text-base text-gray-600 mb-4">
              Get the latest insights and company news straight to your inbox.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-md border border-gray-300 text-base text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
              <button 
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2.5 rounded-md text-base font-medium transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-200 pt-5">
          &copy; {currentYear} Blue Midas Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
