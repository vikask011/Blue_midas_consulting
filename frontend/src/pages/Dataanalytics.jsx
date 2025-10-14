//marketing
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DataAnalytics = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const marketingPoints = [
  "First Stage: If Structured data is not available",
"Implement Data Structure for Data Analytics",
"Implement Data Storage, Retrieval and Backup",
"Second Stage: When Structured data is available",
"Supervised Machine Learning",
"Unsupervised Machine Learning",
"Data Analytics: Decision Making",
"Data Visualization: Central Dashboards",
"Time Series Forecasting",
"Application of Deep Learning for required scenarios",
"Machine Learning Operations Implementation"
    
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
                     Data Analytics
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
                    Transform raw data into actionable insights, visualize trends, and leverage predictive analytics to make informed business decisions.
                  </p>
                </motion.div>
        
        {/* Strategic Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: Marketing Points */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h2 className="text-4xl font-bold border-l-4 border-[#414294] pl-4">
              Digital Transformation – Technology Integration & Process Optimization

            </h2>

            {/* Marketing Sub-Segments Card */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#414294] relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-blue-400 opacity-0 group-hover:opacity-20 transition duration-500 pointer-events-none"></div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 z-10 relative">
                Key Digital Transformation Sub-Segments
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 z-10 relative">
                {marketingPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start space-x-3 bg-gray-50 rounded-lg p-3 hover:bg-blue-50 transition duration-300"
                  >
                    {/* Number Circle */}
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#414294] text-white flex items-center justify-center text-sm font-bold mt-1">
                      {i + 1}
                    </div>
                    <p className="text-gray-700 text-base">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Image + Insights */}
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
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1920&auto=format&fit=crop"
                alt="Marketing strategy team collaborating in a workshop"
                loading="lazy"
                className="rounded-2xl shadow-2xl w-full object-cover transform hover:scale-105 transition duration-500"
              />
              {/* Blue Light hover effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-blue-400 opacity-0 hover:opacity-10 rounded-2xl pointer-events-none transition duration-500"></div>
            </div>

            {/* Advanced Marketing Insights */}
            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#414294] relative overflow-hidden group"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 z-10 relative">
                Our Approach to Data Analytics
              </h3>
              <p className="text-gray-700 text-lg z-10 relative">
                We combine deep industry knowledge with cutting-edge analytics to help you make data-driven decisions that drive growth and efficiency. Our team provides tailored insights that align with your business objectives.
              </p>
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
