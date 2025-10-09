import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DigitalTransformation = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const pillars = [
    "Strategic Technology Alignment: Roadmap to turn technology investments into measurable business outcomes.",
    "Risk & Governance Frameworks: Implement robust governance and cybersecurity measures.",
    "Digital-First Operating Model: Agile, customer-centric, innovation-driven processes.",
    "Revenue & Process Innovation: Automate processes and design digital-first business models.",
    "Legacy Systems & Digital Talent Alignment: Decommission outdated systems and upskill teams."
  ];

  const solutions = [
    {
      title: "Revenue & Process Innovation",
      description:
        "Design and implement new digital-first business models while automating repetitive processes to minimize errors and drive savings.",
    },
    {
      title: "Legacy Systems & Digital Talent Alignment",
      description:
        "Develop a strategic roadmap for decommissioning outdated systems and upskilling employees to sustain a digital-first enterprise.",
    },
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
            Digital Transformation
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
            Modernize processes and systems with digital tools, automation, and cloud solutions to boost efficiency and innovation.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left Column: Pillars */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h2 className="text-4xl font-bold border-l-4 border-[#414294] pl-4">
              Key Transformation Pillars
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

          {/* Right Column: Image + Solutions */}
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
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Digital Transformation Meeting"
                loading="lazy"
                className="rounded-2xl shadow-2xl w-full object-cover transform hover:scale-105 transition duration-500"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-blue-400 opacity-0 hover:opacity-10 rounded-2xl pointer-events-none transition duration-500"></div>
            </div>

            {/* Solutions */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="space-y-6"
            >
              {solutions.map((solution, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#414294] group hover:bg-blue-50 transition duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-gray-700">{solution.description}</p>
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
          <h2 className="text-3xl font-bold mb-4">Secure Your Enterprise's Future</h2>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 text-xl font-bold text-white bg-[#757efa] rounded-full shadow-lg hover:bg-[#414294] transition duration-300 transform hover:scale-105"
          >
            Request a Digital Strategy Briefing →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalTransformation;
