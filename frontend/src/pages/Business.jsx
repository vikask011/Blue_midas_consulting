// src/pages/CollaborationModels/Business.jsx
import React from "react";

const Business = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Business Consulting Methodology
      </h1>
      
      <div className="flex justify-center">
        <img
          src="/images/methodology.png" // ✅ from public/images folder
          alt="Proposed Business Consulting Methodology"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Business;
