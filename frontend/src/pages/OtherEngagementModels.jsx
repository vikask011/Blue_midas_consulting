// src/pages/CollaborationModels/OtherEngagementModels.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const models = [
  {
    number: 1,
    title: "Fractional / Interim Executive",
    description: `In this model, a consultant acts as a part-time or interim executive 
    (e.g., Fractional CMO, CTO, COO, CFO) for the startup, providing high-level strategic 
    leadership and operational guidance.`,
    benefits: [
      {
        heading: "Access to Senior Expertise at Lower Cost:",
        text: "Startups gain access to highly experienced executive-level talent without the full-time salary, benefits, and overhead of a permanent hire.",
      },
      {
        heading: "Immediate Impact:",
        text: "Fractional executives can hit the ground running, bringing immediate strategic direction and operational improvements.",
      },
      {
        heading: "Strategic Guidance & Mentorship:",
        text: "Provides leadership, strategic planning, and mentorship to internal teams, helping to build internal capabilities.",
      },
      {
        heading: "Flexibility & Scalability:",
        text: "Companies can scale executive support up or down as their needs evolve, avoiding long-term commitments.",
      },
      {
        heading: "Bridging Leadership Gaps:",
        text: "Ideal for filling temporary leadership voids or providing specialized expertise for specific growth phases.",
      },
    ],
  },
  {
    number: 2,
    title: "Retainer based Advisory",
    description: `In this model, we provide ongoing strategic advice and support 
    for a fixed quarterly fee, rather than on a project-by-project basis.`,
    benefits: [
      {
        heading: "Continuous Access to Expertise:",
        text: "Companies gain consistent, on-demand access to specialized knowledge and guidance, which is crucial for navigating dynamic scenarios.",
      },
      {
        heading: "Proactive Guidance:",
        text: "Consultants can offer proactive advice, anticipating challenges and opportunities, rather than just reacting to immediate problems.",
      },
      {
        heading: "Deeper Relationship & Understanding:",
        text: "The ongoing nature fosters a deeper understanding of the company's business, culture, and long-term goals, leading to more tailored and effective advice.",
      },
      {
        heading: "Budget Predictability",
        text: "",
      },
      {
        heading: "Strategic Continuity:",
        text: "Ensures consistent strategic direction and support, which is vital for sustained growth.",
      },
    ],
  },
  {
    number: 3,
    title: "Consulting Fees (Fixed Fee) + Equity Based Payout (Performance based Fee)",
    description: `In this model, a portion of the consultant's compensation is tied 
    to the startup's performance (e.g., revenue growth, user acquisition milestones) 
    or through equity in the company.`,
    benefits: [
      {
        heading: "Benefits for Companies:",
        text: "Aligned Incentives, Focus on Outcomes",
      },
    ],
  },
];

const OtherEngagementModels = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      <div className="container mx-auto px-6 py-20 lg:py-24 space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Other Engagement Models
          </h1>
          <p className="text-lg md:text-xl text-black max-w-4xl mx-auto leading-relaxed">
            Other than standard Business Consulting Model mentioned before, we also offer
            following engagement models to meet the varying requirements of our clients.
          </p>
        </div>

        {/* Engagement Models */}
        <div className="space-y-12">
          {models.map((model, idx) => (
            <motion.div
              key={model.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white shadow-md hover:shadow-lg border border-blue-200 rounded-2xl p-8 transition"
            >
              {/* Number + Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-700 text-white text-lg font-bold shadow">
                  {model.number}
                </div>
                <h3 className="text-2xl font-bold text-blue-800">
                  {model.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {model.description}
              </p>

              {/* Benefits */}
              <div>
                <h4 className="text-blue-700 font-semibold mb-3">
                  Benefits for Companies:
                </h4>
                <ul className="space-y-3 list-disc ms-6">
                  {model.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="text-gray-700 leading-relaxed">
                      <span className="font-semibold text-blue-800">
                        {benefit.heading}{" "}
                      </span>
                      {benefit.text}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
       <div className="text-center bg-blue-100 text-gray-900 rounded-2xl shadow-md p-10 border-l-4 border-blue-600">
  <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
    Which model fits your goals?
  </h2>
  <p className="mb-6 max-w-3xl mx-auto text-lg leading-relaxed">
    Let’s match an engagement model to your timeline, budget, and outcomes.
  </p>
  <Link
    to="/contact"
    className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
  >
    Talk to Us
  </Link>
</div>

      </div>
    </div>
  );
};

export default OtherEngagementModels;
