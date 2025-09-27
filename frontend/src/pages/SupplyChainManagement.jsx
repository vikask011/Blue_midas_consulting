// SupplyChainManagement.jsx
import React from "react";

const SupplyChainManagement = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src="/images/sc1.webp" // ✅ put this image in public/images/
            alt="Supply Chain Management"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mb-4">
            Supply Chain Management
          </h2>
          <p className="text-gray-700 mb-4">
            Comprehensive marketing and analytics solutions from product development to sales funnel optimization, empowering data-driven growth. Our team provides tailored insights that align with your business objectives.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Following sub-segments of Marketing are covered:
          </h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Supply Chain Analytics</li>
            <li>Demand Forecasting</li>
            <li>Bottle Neck Identification</li>
            <li>Throughput improvement</li>
            <li>Inventory Management & Optimization</li>
            <li>Supply Chain Design</li>
            <li>Sales & Operations Planning</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainManagement;
