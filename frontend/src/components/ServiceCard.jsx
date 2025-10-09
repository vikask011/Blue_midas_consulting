// src/components/ServiceCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ service, reverse }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 25px 60px rgba(59, 130, 246, 0.25)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const imageVariants = { hover: { scale: 1.1, transition: { duration: 0.5 } } };
  const overlayVariants = { hover: { opacity: 0.8, transition: { duration: 0.3 } } };
  const contentVariants = { hover: { x: 10, transition: { duration: 0.3 } } };

  return (
    <motion.div variants={cardVariants} whileHover="hover" className="group relative bg-white border border-blue-100 rounded-3xl shadow-lg overflow-hidden">
      <div className={`flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""}`}>
        {/* Image */}
        <div className="lg:w-1/2 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gray-900 z-10 opacity-30 group-hover:opacity-80 transition-opacity duration-300"
            variants={overlayVariants}
          />
          <motion.div variants={imageVariants} whileHover="hover" className="relative h-64 sm:h-80 lg:h-full">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2 p-6 sm:p-10 lg:p-16 bg-gradient-to-br from-white to-blue-50 flex flex-col justify-center">
          <motion.div variants={contentVariants} whileHover="hover" className="space-y-4 sm:space-y-6">
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">{service.title}</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{service.description}</p>

            <Link to={service.path}>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white font-bold text-base sm:text-lg rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Discover More
                <motion.svg
                  className="ml-2 w-5 h-5 sm:ml-3 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
