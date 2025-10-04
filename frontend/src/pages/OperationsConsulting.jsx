// OperationsConsulting.jsx
import React from "react";
import { motion } from "framer-motion";

const OperationsConsulting = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const pillars = [
    "Lean Management",
    "Process Excellence",
    "Six Sigma projects: Quality Improvement",
    "Statistical Quality Control",
    "Predictive Analytics: Maintenance Planning",
    "Mathematical Optimization: Operations Research",
    "Risk Management",
    "Cost Optimization",
    "Implementation of Management Information System",
  ];

  // Example content for the 2-column section below image
  const extraInfo = [
    {
      title: "Operational Excellence",
      description:
        "We enable businesses to streamline processes, reduce inefficiencies, and adopt best-in-class frameworks for measurable growth.",
    },
    {
      title: "Data-Driven Decision Making",
      description:
        "Leveraging predictive analytics and operations research, we support leaders with insights to reduce risk and optimize resource allocation.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
      
      <div className="container mx-auto px-6 py-20 lg:py-28 space-y-20">
        <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                    Operations Consulting
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
                   Optimize operational processes, supply chains, and resource allocation to enhance performance and reduce costs.
                  </p>
                </motion.div>
        
        {/* Two-Column Layout */}
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
              Operations Sub-Segments
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {pillars.map((point, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start space-x-3 bg-white rounded-lg shadow-md p-4 hover:bg-blue-50 transition duration-300"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#414294] text-white flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 text-lg">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image + Two Columns Below */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="https://cdn-cchkmpj.nitrocdn.com/CJXGnJvCvbQYOSNVvxpLvOYcHhpJDKbH/assets/images/optimized/rev-c188aa6/ossisto.com/wp-content/uploads/2024/07/Benefits-of-Hiring-an-Operations-Management-Consultant-1024x559.webp"
                alt="Operations consulting in action"
                loading="lazy"
                className="rounded-2xl shadow-2xl w-full max-w-2xl object-cover border-4 border-gray-200 hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Extra Two Columns Below Image */}
            <div className="grid md:grid-cols-2 gap-8">
              {extraInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                >
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
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
          <h2 className="text-3xl font-bold mb-4">
            Improve Efficiency with Proven Methods
          </h2>
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-xl font-bold text-white bg-[#757efa] rounded-full shadow-lg hover:bg-[#414294] transition duration-300 transform hover:scale-105"
          >
            Request an Ops Assessment →
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default OperationsConsulting;
