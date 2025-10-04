import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-24 space-y-20">
        
        {/* Page Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            About Blue Midas Consulting
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
            Blue Midas Consulting provides expert consulting services across
            various sectors. The founding team brings extensive engineering and
            management experience, delivering tailored solutions for measurable business impact.
          </p>
        </motion.div>
        
        {/* Row 1: Founders */}
        <div>
          <h3 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Meet Our Leaders
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* CEO - Sanjeev Kumar */}
            <motion.div
              className="p-8 bg-white shadow-xl rounded-2xl flex flex-col items-center text-center transition duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="assets\1.jpg"
                alt="Sanjeev Kumar"
                className="w-40 h-40 object-cover rounded-full mb-6 border-4 border-gray-100 shadow-md"
              />
              <h4 className="text-3xl font-bold text-gray-900 mb-1">
                Sanjeev Kumar
              </h4>
              <p className="text-lg font-medium text-gray-500 mb-5">
                CEO & Founder
              </p>
              <p className="text-gray-700 text-base leading-relaxed text-justify md:text-center">
                Over <strong>30 years of experience</strong> in technical, supply chain, and
                leadership roles in Aeronautical and Defense sectors. Led multiple
                successful projects ensuring operational excellence and strategic
                execution across large organizations.
              </p>
            </motion.div>

            {/* Consultant - Manas Agrawal */}
            <motion.div
              className="p-8 bg-white shadow-xl rounded-2xl flex flex-col items-center text-center transition duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/assets/team-2.webp"
                alt="Manas Agrawal"
                className="w-40 h-40 object-cover rounded-full mb-6 border-4 border-gray-100 shadow-md"
              />
              <h4 className="text-3xl font-bold text-gray-900 mb-1">
                Manas Agrawal
              </h4>
              <p className="text-lg font-medium text-gray-500 mb-5">
                Chief Business Consultant
              </p>
              <p className="text-gray-700 text-base leading-relaxed text-justify md:text-center">
                MBA from ISB Hyderabad with deep expertise in <strong>Strategy, Operations,
                and Data Analytics</strong> across Automotive, IT, Fintech, and B2B SaaS
                sectors. Passionate about driving measurable, scalable business growth.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Row 2: Vision & Mission as consulting-level cards */}
        <div>
          <h3 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Purpose
          </h3>
          <div className="grid md:grid-cols-2 gap-12">

            {/* Vision */}
            <motion.div
              className="p-10 bg-white rounded-2xl shadow-xl flex flex-col items-start border-l-4 border-[#414294]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-3xl font-bold mb-4 text-gray-900">Our Vision </h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the <strong>trusted consulting partner</strong> for MSMEs, enabling sustainable growth
                and innovation through strategic, operational, and data-driven solutions.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="p-10 bg-white rounded-2xl shadow-xl flex flex-col items-start border-l-4 border-[#414294]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h4 className="text-3xl font-bold mb-4 text-gray-900">Our Mission </h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Deliver tailored consulting solutions to MSMEs, helping them overcome operational
                and strategic challenges while driving measurable performance improvements
                with data-backed precision.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
