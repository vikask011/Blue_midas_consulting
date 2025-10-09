// src/pages/Business.jsx
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Non-Disclosure Agreement",
    description:
      "We begin by safeguarding confidentiality to establish trust and ensure secure collaboration from day one.",
  },
  {
    number: 2,
    title: "Problem Definition",
    description:
      "We work closely with stakeholders to clearly define the business challenge, objectives, and success criteria.",
  },
  {
    number: 3,
    title: "Gap Analysis",
    description:
      "Our consultants evaluate the current state to identify gaps, risks, and areas of improvement against desired outcomes.",
  },
  {
    number: 4,
    title: "Agreement Signoff",
    description:
      "The project scope, milestones, and deliverables are formalized through mutual agreement and alignment.",
  },
  {
    number: 5,
    title: "Data Collection & Analysis",
    description:
      "We gather and analyze relevant data to uncover insights, validate assumptions, and support evidence-based decisions.",
  },
  {
    number: 6,
    title: "Strategy Formulation",
    description:
      "Tailored strategies are developed using proven methodologies to maximize impact, efficiency, and sustainability.",
  },
  {
    number: 7,
    title: "Implementation",
    description:
      "We support your team through structured execution, ensuring recommended solutions are deployed effectively.",
  },
  {
    number: 8,
    title: "Performance Monitoring & Adjustment",
    description:
      "Key performance indicators are tracked, with continuous adjustments to secure measurable outcomes.",
  },
  {
    number: 9,
    title: "Handover",
    description:
      "Comprehensive documentation and knowledge transfer ensure long-term ownership and sustainable success.",
  },
];

const cardAnim = (i) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: i * 0.07, ease: "easeOut" },
});

const markAnim = (i) => ({
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.45, delay: i * 0.07, ease: "easeOut" },
});

export default function Business() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen font-sans text-gray-900">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proposed Methodology
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A structured nine-phase consulting framework designed to deliver
            clarity, accountability, and measurable business impact.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-y-8 md:gap-x-10">
          {/* Vertical line */}
          <div
            className="hidden md:block absolute top-0 bottom-0 left-10 w-1 bg-gray-300 rounded"
          />

          {steps.map((step, i) => (
            <React.Fragment key={step.number}>
              {/* Left: number circle */}
              <motion.div
                {...markAnim(i)}
                className="hidden md:flex flex-col items-center relative z-10"
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.25 }}
                  className="h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-white text-lg font-bold shadow-lg"
                >
                  {step.number}
                </motion.div>
              </motion.div>

              {/* Right: step content */}
              <motion.div
                {...cardAnim(i)}
                className="bg-white p-6 md:p-7 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-900 text-xl md:text-2xl mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </React.Fragment>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center bg-blue-100 text-gray-900 rounded-2xl p-10 shadow-md border-l-4 border-blue-600"
        >
          <p className="text-xl md:text-2xl font-semibold leading-relaxed max-w-4xl mx-auto">
            Transparent, data-driven, and results-focused — this methodology is
            tailored to transform strategy into sustainable business outcomes.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
