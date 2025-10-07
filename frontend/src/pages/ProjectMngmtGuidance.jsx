// ProjectManagementGuidance.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectManagementGuidance = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const subSegments = [
    "Project Financial Feasibility Assessment",
    "Project Planning & Scheduling",
    "Process Governance & PMO setup",
    "Risk Management",
    "Resource Planning & Allocation",
    "Project Monitoring & Control",
    "Stakeholder Engagement & Communication",
    "Agile & Hybrid Methodologies",
    "Tool & Software Implementation",
    "Quality Assurance & Continuous Learning",
  ];

  const consolidatedPoint = {
    title: "Comprehensive Project Management Support",
    description:
      "We provide end-to-end project management guidance to ensure projects are delivered on-time, within budget, and meet quality standards by combining planning, execution, risk mitigation, monitoring, and stakeholder communication.",
      

  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
      <div className="container mx-auto px-6 py-20 lg:py-28 space-y-20">

        {/* Page Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Project Management Guidance
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
            Structured guidance to ensure timely, cost-effective, and high-quality project delivery.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left: 10 Points */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h2 className="text-4xl font-bold border-l-4 border-[#414294] pl-4">
              PMO Sub-Segments
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid md:grid-cols-1 gap-6"
            >
              {subSegments.map((point, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start space-x-3 bg-white rounded-xl shadow-2xl p-4 hover:bg-blue-50 transition duration-300"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#414294] text-white flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 text-lg">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image + Consolidated Point */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            {/* Image */}
            <div className="flex justify-center relative">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format&fit=crop"
                alt="Project management guidance workshop with planning board"
                loading="lazy"
                className="rounded-2xl shadow-2xl w-full object-cover transform hover:scale-105 transition duration-500"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-blue-400 opacity-0 hover:opacity-10 rounded-2xl pointer-events-none transition duration-500"></div>
            </div>

            {/* Consolidated Point */}
            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-2xl border-t-4 border-[#414294]"
            >
              <h3 className="text-2xl font-semibold mb-4">{consolidatedPoint.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{consolidatedPoint.description}</p>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center pt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Deliver Projects On-Time and On-Budget</h2>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 text-xl font-bold text-white bg-[#757efa] rounded-full shadow-lg hover:bg-[#414294] transition duration-300 transform hover:scale-105"
          >
            Speak with PMO Experts →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectManagementGuidance;
