// ProjectManagementGuidance.jsx
import React from "react";

const ProjectManagementGuidance = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src="/images/project2.webp"  // ✅ image in public/images folder
            alt="Project Management Guidance"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mb-4">
            Project Management Guidance
          </h2>
          <p className="text-gray-700 mb-4">
            Our team provides end-to-end project management support including planning, execution, risk mitigation, performance monitoring, and stakeholder communication to ensure timely, cost-effective, and quality project delivery.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Following sub-segments of Project Management Office are covered:
          </h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Project Financial Feasibility Assessment</li>
            <li>Project Planning & Scheduling</li>
            <li>Process Governance & PMO setup</li>
            <li>Risk Management</li>
            <li>Resource Planning & Allocation</li>
            <li>Project Monitoring & Control</li>
            <li>Stakeholder Engagement & Communication</li>
            <li>Agile & Hybrid Methodologies</li>
            <li>Tool & Software Implementation</li>
            <li>Quality Assurance & Continuous Learning</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagementGuidance;
