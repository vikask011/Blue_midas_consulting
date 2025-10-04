// SupplyChainManagement.jsx
import React from "react";
import { motion } from "framer-motion";

const SupplyChainManagement = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const subSegments = [
    "Supply Chain Analytics",
    "Demand Forecasting",
    "Bottle Neck Identification",
    "Throughput improvement",
    "Inventory Management & Optimization",
    "Supply Chain Design",
    "Sales & Operations Planning",
  ];

  const outcomes = [
    {
      title: "Service & Inventory Optimization",
      description: "Fill-rate and OTIF improvements with data-driven planning. Right-size stock with multi-echelon optimization and ABC policies.",
    },
    {
      title: "Cost & Forecast Accuracy",
      description: "Route optimization, load consolidation, and carrier mix. ML models to reduce error and synchronize demand-supply.",
    },
  ];

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
            Supply Chain Management
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
            Comprehensive solutions across forecasting, inventory optimization, and supply chain design to drive resilience and operational excellence.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left: Points styled as PMG */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h2 className="text-4xl font-bold border-l-4 border-[#414294] pl-4">
              Following sub-segments of Supply Chain are covered:
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
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

          {/* Right: Large Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8 items-center"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg"
                alt="Supply chain management planning with logistics network"
                loading="lazy"
                className="rounded-2xl shadow-2xl w-full max-w-2xl h-auto object-cover transform hover:scale-105 transition duration-500"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-blue-400 opacity-0 hover:opacity-10 rounded-2xl pointer-events-none transition duration-500"></div>
            </div>

            {/* Combined Outcomes below image */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-full max-w-2xl space-y-6"
            >
              {outcomes.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-2xl flex flex-col border-t-4 border-[#414294] hover:shadow-2xl transition duration-300"
                >
                  <h4 className="text-2xl font-bold mb-3 text-gray-900 text-center">{item.title}</h4>
                  <p className="text-gray-700 text-base leading-relaxed text-center">{item.description}</p>
                </motion.div>
              ))}
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
          <h2 className="text-3xl font-bold mb-4">Optimize Your Supply Chain</h2>
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-xl font-bold text-white bg-[#757efa] rounded-full shadow-lg hover:bg-[#414294] transition duration-300 transform hover:scale-105"
          >
            Schedule a Consultation →
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default SupplyChainManagement;
