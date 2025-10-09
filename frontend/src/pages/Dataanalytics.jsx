import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DataAnalytics = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const pillars = [
    "Data Architecture & Governance: Design scalable, compliant enterprise models.",
    "Advanced Modeling & Intelligence: Predictive models, AI/ML Ops, segmentation.",
    "Operational Excellence: Optimize supply chain and logistics with analytics.",
    "Financial Performance: Forecasting, risk assessment, profitability analysis."
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
      <div className="container mx-auto px-6 py-20 lg:py-28 space-y-20">
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Data Analytics
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
            Transform raw data into actionable insights, visualize trends, and leverage predictive analytics to make informed business decisions.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: Pillars */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h2 className="text-4xl font-bold border-l-4 border-[#414294] pl-4">
              Key Data Analytics Pillars
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="space-y-6"
            >
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#414294] relative overflow-hidden group hover:bg-blue-50 transition duration-300"
                >
                  {/* Number Circle */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#414294] text-white flex items-center justify-center text-sm font-bold mt-1">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 text-lg">{pillar}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image + Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Image */}
            <div className="flex justify-center relative">
              <img
                src="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Data Analytics Team Collaboration"
                loading="lazy"
                className="rounded-2xl shadow-2xl w-full object-cover transform hover:scale-105 transition duration-500"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-blue-400 opacity-0 hover:opacity-10 rounded-2xl pointer-events-none transition duration-500"></div>
            </div>

            {/* Solution Areas */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="space-y-6"
            >
              <motion.div
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#414294] group hover:bg-blue-50 transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-2">Operational Excellence</h3>
                <p className="text-gray-700">
                  Analytics applied to supply chain, logistics, and operations to reduce costs and increase efficiency.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#414294] group hover:bg-blue-50 transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-2">Financial Performance</h3>
                <p className="text-gray-700">
                  Build robust forecasting models, assess risk, and optimize profitability using advanced analytics.
                </p>
              </motion.div>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Unlock Your Data Potential?</h2>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 text-xl font-bold text-white bg-[#757efa] rounded-full shadow-lg hover:bg-[#414294] transition duration-300 transform hover:scale-105"
          >
            Start Your Data Strategy →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default DataAnalytics;
