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

  const pillars = [
    {
      title: "Pillar I: Data Architecture & Governance",
      points: [
        "Enterprise Data Strategy: Design models for scale and resilience.",
        "Data Monetization Framework: Identify and structure new revenue opportunities.",
        "Quality & Compliance: Ensure data integrity and regulatory adherence.",
      ],
    },
    {
      title: "Pillar II: Advanced Modeling & Intelligence",
      points: [
        "Predictive Modeling: Forecast demand, risk, and asset performance.",
        "Behavioral Segmentation: Deep customer clustering and next-best-action modeling.",
        "AI/ML Ops: Industrializing models for reliable, scalable deployment.",
      ],
    },
  ];

  const solutionAreas = [
    {
      title: "Operational Excellence",
      description:
        "Applying analytics to optimize supply chain, logistics, and manufacturing processes, reducing costs by up to 20%.",
    },
    {
      title: "Financial Performance",
      description:
        "Building robust financial models and forecasting engines for capital planning, risk assessment, and profitability analysis.",
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
                    Data Analytics
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
                    Analyze business data, visualize insights, and use predictive models to support informed decision-making.
                  </p>
                </motion.div>
        

        {/* Two Column Layout */}
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
              Data & AI: Enabling Predictive Intelligence
            </h2>

            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-2xl border-t-4 border-[#414294] group"
                >
                  <h3 className="text-2xl font-semibold mb-4">{pillar.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                    {pillar.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
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
                alt="Data Visualization and Strategy"
                loading="lazy"
                className="rounded-2xl shadow-2xl w-full object-cover transform hover:scale-105 transition duration-500"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-blue-400 opacity-0 hover:opacity-10 rounded-2xl pointer-events-none transition duration-500"></div>
            </div>

            {/* Solution Areas */}
            <motion.div
              className="grid md:grid-cols-1 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {solutionAreas.map((area, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-2xl border-t-4 border-[#414294] group"
                >
                  <h3 className="text-2xl font-semibold mb-2">{area.title}</h3>
                  <p className="text-gray-700">{area.description}</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Unlock Your Data's Full Potential?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Schedule a strategic session with our lead data consultant to map your path to <strong>data maturity</strong>.
          </p>
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
