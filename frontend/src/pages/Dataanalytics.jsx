import React from "react";
import { motion } from "framer-motion";

const DataAnalytics = () => {
  // Define animation variants for cleaner component code
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
      <div className="container mx-auto px-6 py-20 lg:py-28 space-y-20">

        {/* Page Header - Strategic Focus */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Data & AI: Enabling <span className="text-blue-700">Predictive Intelligence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
            We architect and implement enterprise-grade analytics solutions that transform complex data into a sustainable **competitive advantage**, driving smarter decisions and quantifiable business value.
          </p>
        </motion.div>

        {/* --- */}

        {/* Strategic Pillars (The Core Offering) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left Side: Business Impact & Methodology */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h2 className="text-4xl font-bold border-l-4 border-blue-600 pl-4">
              From Data Swamp to Value Stream
            </h2>
            <p className="text-gray-700 text-xl leading-relaxed">
              Our methodology ensures that every dollar invested in data capabilities yields **tangible business outcomes**. We focus on building robust data governance and enterprise architecture necessary for long-term AI success.
            </p>

            {/* Structured Methodology */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Pillar I: Data Architecture & Governance</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-lg">
                  <li>**Enterprise Data Strategy:** Design models for scale and resilience.</li>
                  <li>**Data Monetization Framework:** Identify and structure new revenue opportunities.</li>
                  <li>**Quality & Compliance:** Ensure data integrity and regulatory adherence.</li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Pillar II: Advanced Modeling & Intelligence</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-lg">
                  <li>**Predictive Modeling:** Forecasting demand, risk, and asset performance.</li>
                  <li>**Behavioral Segmentation:** Deep customer clustering and next-best-action modeling.</li>
                  <li>**AI/ML Ops:** Industrializing models for reliable, scalable deployment.</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>


          {/* Right Side: Key Solution Areas & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Image Block */}
            <div className="flex justify-center">
              <img
                // Using a generic, high-quality image URL as a placeholder for a consulting environment
                src="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Data Visualization and Strategy"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            {/* Solution Areas */}
            <h2 className="text-4xl font-bold border-l-4 border-blue-600 pl-4">
              Our Core Solution Areas
            </h2>
            
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 text-2xl font-bold mt-1">✓</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Operational Excellence</h4>
                  <p className="text-gray-700">Applying analytics to optimize supply chain, logistics, and manufacturing processes, reducing costs by up to 20%.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 text-2xl font-bold mt-1">✓</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Financial Performance</h4>
                  <p className="text-gray-700">Building robust financial models and forecasting engines for capital planning, risk assessment, and profitability analysis.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 text-2xl font-bold mt-1">✓</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Customer Intelligence</h4>
                  <p className="text-gray-700">Creating 360-degree customer views and implementing prescriptive analytics for targeted marketing and churn prevention.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* --- */}

        {/* Call to Action */}
        <motion.div
          className="text-center pt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Unlock Your Data's Full Potential?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Schedule a strategic session with our lead data consultant to map your path to **data maturity**.
          </p>
          <a
            href="/contact" // Replace with your actual contact path
            className="inline-block px-10 py-4 text-xl font-bold text-white bg-blue-700 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 transform hover:scale-105"
          >
            Start Your Data Strategy &rarr;
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default DataAnalytics;