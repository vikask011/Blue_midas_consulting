// OperationsConsulting.jsx
import React from "react";

const OperationsConsulting = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src="/images/3.webp"   // ✅ public folder image
            alt="Operations Consulting"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mb-4">
            Operations Consulting
          </h2>
          <p className="text-gray-700 mb-4">
            Our team specializes in operations consulting with expertise in Lean Management, Six Sigma, and process excellence, focusing on quality improvement, predictive maintenance, cost optimization, and data-driven decision-making through analytics, optimization, and risk management.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Following sub-segments of Operations are covered:
          </h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Lean Management</li>
            <li>Process Excellence</li>
            <li>Six Sigma projects: Quality Improvement</li>
            <li>Statistical Quality Control</li>
            <li>Predictive Analytics: Maintenance Planning</li>
            <li>Mathematical Optimization: Operations Research</li>
            <li>Risk Management</li>
            <li>Cost Optimization</li>
            <li>Implementation of Management Information System</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default OperationsConsulting;
