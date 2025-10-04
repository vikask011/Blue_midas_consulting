import React, { useEffect } from "react";
import { PhoneIcon, EnvelopeIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("body");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">

      {/* Full width container */}
      <div className="w-full max-w-full px-4 sm:px-6 md:px-10 py-16 grid lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Left: Contact Form */}
        <div className="bg-gray-50 rounded-lg shadow-lg p-6 sm:p-10 order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-900 border-b pb-3 sm:pb-4">Send Us A Message</h2>
          <form
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdEbtH6nJNuh2JLbF5xQiK9KetA8TJzYNOcynY0jdfQ_l-NNg/formResponse"
            method="POST"
            noValidate
            className="space-y-4 sm:space-y-6 text-base sm:text-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                name="entry.905206211"
                placeholder="Your Name *"
                required
                className="border border-gray-300 rounded-lg p-3 sm:p-4 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
              />
              <input
                type="email"
                name="entry.1296579232"
                placeholder="Your Email *"
                required
                className="border border-gray-300 rounded-lg p-3 sm:p-4 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
              />
              <input
                type="text"
                name="entry.1541095227"
                placeholder="Your Mobile *"
                required
                className="border border-gray-300 rounded-lg p-3 sm:p-4 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
              />
              <select
                name="entry.1569737225"
                className="border border-gray-300 rounded-lg p-3 sm:p-4 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full text-gray-700"
              >
                <option value="" disabled selected hidden>Select Service Interested In</option>
                <option value="Marketing Strategy">Marketing Strategy</option>
                <option value="Supply Chain & Logistics Management">Supply Chain & Logistics Management</option>
                <option value="Operations Consulting">Operations Consulting</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="Project Management Guidance">Project Management Guidance</option>
                <option value="Digital Transformation">Digital Transformation</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <textarea
              name="entry.1699630965"
              placeholder="Leave a message here *"
              required
              className="border border-gray-300 rounded-lg p-3 sm:p-4 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full h-36 sm:h-44 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-xl uppercase tracking-wide hover:bg-blue-800 transition shadow-md hover:shadow-lg"
            >
              Submit Now
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-6 sm:space-y-10 order-1 lg:order-2 px-4 sm:px-6 lg:px-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Need Our Expert Help? We're Here!
          </h2>
          <p className="text-gray-600 text-base sm:text-xl">
            We provide consulting services across multiple industries. Reach out today and let's discuss how we can drive growth and efficiency for your business.
          </p>

          {/* Contact Methods */}
          <div className="space-y-4 sm:space-y-8 mt-6 sm:mt-10">
            {/* Phone */}
            <a
              href="tel:+919532619973"
              className="flex items-start p-4 sm:p-6 bg-gray-50 shadow hover:shadow-lg transition transform hover:scale-[1.01] duration-300 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center bg-blue-700 rounded-full group-hover:bg-blue-800 transition">
                <PhoneIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="ml-4 sm:ml-6">
                <p className="text-lg sm:text-xl font-semibold text-gray-900">Call Us</p>
                <span className="text-gray-600 font-medium text-base sm:text-lg">+91-9532619973</span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@bluemidasconsulting.com"
              className="flex items-start p-4 sm:p-6 bg-gray-50 shadow hover:shadow-lg transition transform hover:scale-[1.01] duration-300 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center bg-blue-700 rounded-full group-hover:bg-blue-800 transition">
                <EnvelopeIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="ml-4 sm:ml-6">
                <p className="text-lg sm:text-xl font-semibold text-gray-900">Email Us</p>
                <span className="text-gray-600 font-medium text-base sm:text-lg">info@bluemidasconsulting.com</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919532619973"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start p-4 sm:p-6 bg-gray-50 shadow hover:shadow-lg transition transform hover:scale-[1.01] duration-300 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center bg-blue-700 rounded-full group-hover:bg-blue-800 transition">
                <ChatBubbleBottomCenterTextIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="ml-4 sm:ml-6">
                <p className="text-lg sm:text-xl font-semibold text-gray-900">WhatsApp</p>
                <span className="text-gray-600 font-medium text-base sm:text-lg">Chat with us now</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
