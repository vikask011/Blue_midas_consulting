import React from "react";
import { Link } from "react-router-dom";

const ReferUsButton = () => {
  return (
    <Link
      to="/refer"
      className="
        fixed bottom-6 right-4          /* mobile position */
        sm:bottom-10 sm:right-6        /* desktop position */
        
        bg-gradient-to-r from-orange-500 to-orange-700 
        text-white font-bold
        text-base px-4 py-2             /* mobile: smaller padding */
        sm:text-lg sm:px-8 sm:py-4      /* desktop: larger padding */
        
        rounded-full 
        shadow-2xl shadow-orange-500/60 
        transform transition duration-300 
        hover:scale-110 hover:shadow-3xl 
        animate-bounce
        z-50
      "
    >
      Refer Us
    </Link>
  );
};

export default ReferUsButton;
