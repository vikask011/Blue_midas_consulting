import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // <-- Imported Link for navigation

// Create a motion-enabled Link component
const MotionLink = motion(Link);

// --- Image Sources for the Carousel (4 High-Quality Business Images) ---
const bannerImages = [
  'https://media.istockphoto.com/id/2184686671/photo/e-invoice-business-management.jpg?s=2048x2048&w=is&k=20&c=wKNrjhzUJpTv2yvF-HuHMjT4j5ITx1WwGRVSl55PTO0=', // Business Management/Finance
  'https://media.istockphoto.com/id/1129108167/photo/mapping-out-the-way-to-their-teams-success.jpg?s=1024x1024&w=is&k=20&c=XS-Kl9JwR_hnUFDMU-qMvnc4lI30Tybcm6K_wWDewdU=', // Teamwork/Strategy Mapping
  'https://media.istockphoto.com/id/1196912174/photo/group-of-people-and-communication-network-concept-human-resources-teamwork-of-business.jpg?s=2048x2048&w=is&k=20&c=zREseMx3LFyCfgRu2EizRyvZEoGxEH2MGxZ0qywzB0E=', // Networking/HR/Teamwork
  'https://media.istockphoto.com/id/2205439751/photo/information-technology-technical-support-customer-service-concept-it-expert-assistance-remote.jpg?s=2048x2048&w=is&k=20&c=7tM6JIdXR3r8rAlvoSFNoyvgUMUGmWhQUr5EgqqgLwQ=', // IT/Tech Support/Data
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to handle the automatic image transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % bannerImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentImage = bannerImages[currentIndex];

  // Variants for the fade animation
  const fadeVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1, transition: { duration: 1.5 } },
    out: { opacity: 0, transition: { duration: 1.5 } }
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden rounded-xl shadow-2xl">
      
      {/* --- Image Carousel Area --- */}
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={currentImage} // Key forces Framer Motion to re-render and animate
          src={currentImage}
          alt={`Consulting Banner Slide ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          variants={fadeVariants}
          initial="initial"
          animate="in"
          exit="out"
        />
      </AnimatePresence>

      {/* --- Overlay and Content --- */}
      {/* Increased opacity for maximum text contrast (bg-opacity-70) */}
      <div className="absolute inset-0  bg-opacity-70 backdrop-brightness-75 flex flex-col justify-center items-start px-8 md:px-16 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-snug max-w-4xl drop-shadow-lg">
          Strategic Consulting to Drive True Business Transformation
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mb-10 font-light drop-shadow-md">
          We provide expert guidance, data-driven insights, and innovative strategies 
          to help organizations unlock growth and achieve sustainable success.
        </p>

        {/* Buttons (Changed to MotionLink) */}
        <div className="flex gap-4">
          <MotionLink 
            to="/case-studies" // <-- Links to the Case Studies page
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-lg shadow-xl transition duration-300 transform hover:scale-[1.03]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Case Studies
          </MotionLink>
          <MotionLink 
            to="/contact" // <-- Links to the Contact page
            className="bg-white hover:bg-gray-100 text-gray-900 font-bold uppercase tracking-wider px-8 py-4 rounded-lg shadow-xl transition duration-300 transform hover:scale-[1.03]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect with a Partner
          </MotionLink>
        </div>
      </div>
      
      {/* --- Carousel Indicators --- */}
      <div className="absolute bottom-4 right-8 md:right-16 z-20 flex gap-2">
        {bannerImages.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentIndex === index 
                ? 'w-8 bg-blue-500 shadow-md' 
                : 'w-2 bg-gray-300 bg-opacity-50'
            }`}
            // Allows manual click to change image
            onClick={() => setCurrentIndex(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
