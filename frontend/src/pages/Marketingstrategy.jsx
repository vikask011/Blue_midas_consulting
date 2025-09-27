import React from "react";

const MarketingStrategy = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src="/images/marketing.webp"   // ✅ public folder image
            alt="Marketing Strategy"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mb-4">
            Marketing Strategy - New Product Development & Existing Product
          </h2>
          <p className="text-gray-700 mb-4">
            Comprehensive marketing and analytics solutions from product development
            to sales funnel optimization, empowering data-driven growth. Our team
            provides tailored insights that align with your business objectives.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Following sub-segments of Marketing are covered:
          </h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Marketing Analytics</li>
            <li>Business Case Development</li>
            <li>Financial Modelling</li>
            <li>Pricing Strategy</li>
            <li>Market Sizing</li>
            <li>Go to Market Strategy</li>
            <li>Competitor Analysis</li>
            <li>Inbound and Outbound Marketing</li>
            <li>Revenue Optimization</li>
            <li>Channel Analysis</li>
            <li>Lead Generation</li>
            <li>Sales Funnel Optimization</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MarketingStrategy;
