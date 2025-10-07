import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DigitalTransformation = () => {
  const listVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  // Merge the 4 solutions into 2 points
  const mergedSolutions = [
    {
      title: "Revenue & Process Innovation",
      description:
        "Design and implement new digital-first business models to capture market share while identifying and automating high-volume, repetitive processes to minimize human error and drive operational savings.",
    },
    {
      title: "Legacy Systems & Digital Talent Alignment",
      description:
        "Develop a strategic roadmap for decommissioning outdated systems and build organizational structures, upskilling initiatives, and governance models essential for sustaining a digital-first enterprise.",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      <div className="container mx-auto px-6 py-20 lg:py-28 space-y-20">
        <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                    Digital Transformation
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
                    Modernize processes and systems with digital tools, automation, and cloud solutions for business efficiency.
                  </p>
                </motion.div>
        

        {/* Section 1: Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left Side - Pillars + 1 Merged Point */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-extrabold border-l-4 border-[#414294] pl-4">
              Key Transformation Pillars
            </h2>

            <ul className="space-y-6">
              {/* Original 3 Pillars */}
              <motion.li
                custom={0}
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="flex items-start space-x-3"
              >
                <span className="text-[#414294] text-3xl font-bold mt-1">→</span>
                <div>
                  <h4 className="text-xl font-semibold">
                    Strategic Technology Alignment
                  </h4>
                  <p className="text-gray-700">
                    A phased roadmap ensuring technology investments translate to measurable business goals.
                  </p>
                </div>
              </motion.li>

              <motion.li
                custom={1}
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="flex items-start space-x-3"
              >
                <span className="text-[#414294] text-3xl font-bold mt-1">→</span>
                <div>
                  <h4 className="text-xl font-semibold">
                    Risk & Governance Frameworks
                  </h4>
                  <p className="text-gray-700">
                    Implement robust governance and cybersecurity measures across the digital landscape.
                  </p>
                </div>
              </motion.li>

              <motion.li
                custom={2}
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="flex items-start space-x-3"
              >
                <span className="text-[#414294] text-3xl font-bold mt-1">→</span>
                <div>
                  <h4 className="text-xl font-semibold">
                    Digital-First Operating Model
                  </h4>
                  <p className="text-gray-700">
                    Shift structures and processes to be agile, customer-centric, and innovation-driven.
                  </p>
                </div>
              </motion.li>

              {/* Left Side Merged Solution */}
              <motion.li
                custom={3}
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="flex items-start space-x-3"
              >
                <span className="text-[#414294] text-3xl font-bold mt-1">→</span>
                <div>
                  <h4 className="text-xl font-semibold">
                    {mergedSolutions[0].title}
                  </h4>
                  <p className="text-gray-700">{mergedSolutions[0].description}</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          {/* Right Side - Image + 1 Merged Point */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-12"
          >
            {/* Image */}
            <img
              src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Strategic Digital Roadmap Meeting"
              loading="lazy"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />

            {/* Right Side Merged Solution */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-xl flex flex-col h-full border-b-4 border-[#414294] hover:shadow-2xl transition duration-300"
            >
              <h4 className="text-xl font-bold mb-3 text-gray-900 text-center">
                {mergedSolutions[1].title}
              </h4>
              <p className="text-gray-700 text-base leading-relaxed text-center">
                {mergedSolutions[1].description}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center pt-16 bg-gray-100 p-12 rounded-2xl shadow-inner"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Secure Your Enterprise's Future.
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Engage our consultants today to quantify the impact of a strategic digital roadmap tailored to your specific market demands.
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-4 text-xl font-bold text-white bg-[#757efa] rounded-full shadow-lg hover:bg-[#414294] transition duration-300 transform hover:scale-105"
          >
            Request a Digital Strategy Briefing →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalTransformation;
