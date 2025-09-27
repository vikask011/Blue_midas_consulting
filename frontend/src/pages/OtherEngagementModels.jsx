// src/pages/CollaborationModels/OtherEngagementModels.jsx
import React from "react";

const OtherEngagementModels = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Other Engagement Models
      </h1>
      
      <div className="flex justify-center">
        <img
          src="/images/engmods.jpg" // ✅ from public/images folder
          alt="Other Engagement Models"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default OtherEngagementModels;
