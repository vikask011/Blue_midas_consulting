import React from "react";
import { Link } from "react-router-dom";

const ReferUsButton = () => {
  return (
    <Link
      to="/refer"
      className="
        fixed bottom-10 right-6   /* moved up */
        bg-gradient-to-r from-orange-500 to-orange-700 
        text-white font-bold text-lg px-8 py-4   /* bigger button */
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
