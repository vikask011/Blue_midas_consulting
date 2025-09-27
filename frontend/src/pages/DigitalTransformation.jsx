import React from "react";
import { motion } from "framer-motion";

const DigitalTransformation = () => {
  const listVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  // High-level problems solved by professional consulting
  const strategicSolutions = [
    { title: "Revenue Model Innovation", description: "Design and implement new digital-first business models to capture market share and establish competitive differentiation." },
    { title: "Legacy System Decommissioning", description: "Strategic roadmap for moving outdated, monolithic systems to secure, agile cloud-native platforms." },
    { title: "End-to-End Process Automation (RPA/AI)", description: "Identify and automate high-volume, repetitive processes to minimize human error and drive significant operational savings." },
    { title: "Digital Talent & Culture Alignment", description: "Developing organizational structures, upskilling initiatives, and governance models essential for sustaining a digital-first enterprise." },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      <div className="container mx-auto px-6 py-20 lg:py-28 space-y-20">

        {/* Page Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Enterprise Digital Transformation: <span className="text-blue-700">Achieve Measurable ROI</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto font-light">
            We move beyond mere digitization to architect a holistic, value-driven strategy that integrates technology, optimizes your operating model, and **secures long-term competitive resilience**.
          </p>
        </motion.div>

        {/* --- */}

        {/* Section 1: Core Approach & Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left Side Content - Strategic Imperatives */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-extrabold border-l-4 border-blue-600 pl-4">
              Our Strategic Mandate: Value Creation
            </h2>
            <p className="text-gray-700 text-xl leading-relaxed">
              We focus on solving the *most critical* challenges facing senior leadership: **accelerating time-to-market**, **reducing technical debt**, and establishing an agile culture capable of continuous innovation.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 pt-4">Key Transformation Pillars:</h3>
            <ul className="space-y-4">
              {/* Refined list focusing on high-level outcomes */}
              <motion.li custom={0} variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="flex items-start space-x-3">
                <span className="text-blue-600 text-3xl font-bold mt-1">→</span>
                <div>
                  <h4 className="text-xl font-semibold">Strategic Technology Alignment</h4>
                  <p className="text-gray-700">A clear, phased roadmap ensuring technology investments directly translate to quantifiable business goals.</p>
                </div>
              </motion.li>
              <motion.li custom={1} variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="flex items-start space-x-3">
                <span className="text-blue-600 text-3xl font-bold mt-1">→</span>
                <div>
                  <h4 className="text-xl font-semibold">Risk & Governance Frameworks</h4>
                  <p className="text-gray-700">Implementing robust data governance and cybersecurity measures throughout the digital landscape.</p>
                </div>
              </motion.li>
              <motion.li custom={2} variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="flex items-start space-x-3">
                <span className="text-blue-600 text-3xl font-bold mt-1">→</span>
                <div>
                  <h4 className="text-xl font-semibold">Digital-First Operating Model</h4>
                  <p className="text-gray-700">Shifting your organizational structure and processes to be inherently agile and customer-centric.</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Strategic Digital Roadmap Meeting"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </div>

        {/* --- */}

        {/* Section 2: What We Solve (The Results) */}
        <div className="pt-16">
          <h3 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
            What We Solve: Key Transformation Outcomes
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategicSolutions.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-xl flex flex-col h-full border-b-4 border-blue-600 hover:shadow-2xl transition duration-300"
              >
                <div className="text-blue-700 text-4xl mb-4 text-center">
                    {/* Placeholder Icons for consulting feel */}
                    {i === 0 && '📈'}
                    {i === 1 && '☁️'}
                    {i === 2 && '⚙️'}
                    {i === 3 && '🤝'}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 text-center">{solution.title}</h4>
                <p className="text-gray-700 text-base leading-relaxed text-center">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- */}

        {/* Call to Action */}
        <motion.div
          className="text-center pt-16 bg-gray-100 p-12 rounded-2xl shadow-inner"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Secure Your Enterprise's Future.</h2>
          <p className="text-xl text-gray-700 mb-8">
            Engage our consultants today to quantify the impact of a strategic digital roadmap tailored to your specific market demands.
          </p>
          <a
            href="/contact"
            className="inline-block px-12 py-4 text-xl font-bold text-white bg-blue-700 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 transform hover:scale-105"
          >
            Request a Digital Strategy Briefing &rarr;
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default DigitalTransformation;