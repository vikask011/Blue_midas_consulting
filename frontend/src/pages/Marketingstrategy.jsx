import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Memoized Point Card
const PointCard = React.memo(({ number, text }) => (
  <motion.div
    className="flex items-start space-x-3 bg-white p-4 rounded-lg border-t-4 border-[#414294]"
    whileHover={{ backgroundColor: "#f0f4ff" }}
  >
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#414294] text-white flex items-center justify-center text-sm font-bold mt-1">
      {number}
    </div>
    <p className="text-gray-700 text-lg">{text}</p>
  </motion.div>
));

const MarketingStrategy = () => {
  const marketingPoints = [
    "Marketing Analytics",
    "Business Case Development",
    "Financial Modelling",
    "Pricing Strategy",
    "Market Sizing",
    "Go to Market Strategy",
    "Competitor Analysis",
    "Inbound and Outbound Marketing",
    "Revenue Optimization",
    "Channel Analysis",
    "Lead Generation",
    "Sales Funnel Optimization",
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
            Marketing Strategy
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
            Create data-driven campaigns, brand positioning, and customer engagement strategies
            to drive growth and ROI.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: Marketing Points */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold border-l-4 border-[#414294] pl-4">
              Key Marketing Sub-Segments
            </h2>

            <div className="space-y-4">
              {marketingPoints.map((point, i) => (
                <PointCard key={i} number={i + 1} text={point} />
              ))}
            </div>
          </div>

          {/* Right: Image + Insights */}
          <div className="space-y-10">
            {/* Image */}
            <div className="flex justify-center relative">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1920&auto=format&fit=crop"
                alt="Marketing strategy team collaborating in a workshop"
                loading="lazy"
                className="rounded-2xl shadow-md w-full object-cover transform hover:scale-105 transition duration-500"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-blue-400 opacity-0 hover:opacity-10 rounded-2xl pointer-events-none transition duration-500"></div>
            </div>

            {/* Insights */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#414294]">
                <h3 className="text-2xl font-semibold mb-2">Advanced Marketing Insights</h3>
                <p className="text-gray-700 text-lg">
                  We leverage AI-driven analytics, market simulations, and predictive modeling to
                  identify untapped opportunities, enhance customer engagement, and maximize ROI
                  across campaigns.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#414294]">
                <h3 className="text-2xl font-semibold mb-2">Go-To-Market Strategy</h3>
                <p className="text-gray-700 text-lg">
                  Craft comprehensive launch plans, pricing strategies, and channel engagement to
                  ensure successful product adoption and revenue growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center pt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Go-To-Market?</h2>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 text-xl font-bold text-white bg-[#757efa] rounded-full shadow-lg hover:bg-[#414294] transition duration-300 transform hover:scale-105"
          >
            Talk to a Consultant →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketingStrategy;
