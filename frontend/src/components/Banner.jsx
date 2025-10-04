import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Motion-enabled Link
const MotionLink = motion(Link);

// High-quality banner images
const bannerImages = [
  'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic carousel change every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentImage = bannerImages[currentIndex];

  // Fade animation variants
  const fadeVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1, transition: { duration: 1.5 } },
    out: { opacity: 0, transition: { duration: 1.5 } },
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-none md:rounded-xl shadow-2xl">
      {/* Image Carousel */}
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={currentImage}
          src={currentImage}
          alt={`Consulting Banner Slide ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          variants={fadeVariants}
          initial="initial"
          animate="in"
          exit="out"
        />
      </AnimatePresence>

      {/* Overlay & Content */}
      <div className="absolute inset-0  bg-opacity-70 backdrop-brightness-75 flex flex-col justify-center items-start px-6 md:px-16 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight max-w-4xl drop-shadow-lg">
          Strategic Consulting to Drive True Business Transformation
        </h1>
        <p className="text-base md:text-2xl text-gray-200 max-w-3xl mb-8 md:mb-10 font-light drop-shadow-md">
          We provide expert guidance, data-driven insights, and innovative strategies to help organizations unlock growth and achieve sustainable success.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
  <MotionLink
    to="/case-studies"
    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider px-3 py-2 sm:px-6 sm:py-3 rounded-lg shadow-xl transition duration-300 transform hover:scale-[1.03]"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Explore Case Studies
  </MotionLink>
  <MotionLink
    to="/contact"
    className="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-900 font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider px-3 py-2 sm:px-6 sm:py-3 rounded-lg shadow-xl transition duration-300 transform hover:scale-[1.03]"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Connect with a Partner
  </MotionLink>
</div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 right-6 md:right-16 z-20 flex gap-2">
        {bannerImages.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentIndex === index ? 'w-8 bg-blue-500 shadow-md' : 'w-2 bg-gray-300 bg-opacity-50'
            }`}
            onClick={() => setCurrentIndex(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
