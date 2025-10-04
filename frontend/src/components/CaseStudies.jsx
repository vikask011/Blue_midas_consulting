// CaseStudies.jsx
import React from "react";

const caseStudies = [
  {
    title: "Consumer & Market Insights",
    description: "Unlock significant growth opportunities by leveraging deep consumer behavior research and comprehensive market intelligence for strategic advantage in competitive landscapes.",
    image: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg", // Example image
    file: "/case_studies/Consumer & Market Research.pdf",
  },
  {
    title: "Time Series Forecasting",
    description: "Discover the critical power of advanced time series forecasting models for optimized manufacturing schedules, robust inventory control, and agile supply chain planning.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg", // Example image
    file: "/case_studies/Time Series Forecasting_Case Study.pdf",
  },
  {
    title: "Financial Modelling",
    description: "Empower smarter investment decisions and foster sustainable business growth by building sophisticated and adaptive financial models for meticulous project planning and flawless execution.",
    image: "https://images.pexels.com/photos/6863261/pexels-photo-6863261.jpeg", // Example image
    file: "/case_studies/Financial Modelling.pdf",
  },
  {
    title: "Omni-channel Customer Service",
    description: "Explore the transformative impact of integrated omni-channel support systems and their proven benefits in consistently enhancing customer experiences and building lasting loyalty.",
    image: "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg", // Example image
    file: "/case_studies/Omnichannel Ticketing System.pdf",
  },
  {
    title: "Lead Analytics for Revenue Growth",
    description: "Leverage cutting-edge lead analytics frameworks to precisely identify high-potential prospects, optimize conversion funnels, and drive predictable, accelerated revenue growth.",
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg", // Example image
    file: "/case_studies/Lead Analytics for Revenue Growth.pdf",
  },
  {
    title: "Machine Learning in Supply Chain",
    description: "Delve into real-world applications of Machine Learning to dramatically improve operational efficiency, predict demand fluctuations, and optimize complex supply chain processes.",
    image: "https://images.pexels.com/photos/5712128/pexels-photo-5712128.jpeg", // Example image
    file: "/case_studies/ML & Application in Ops and Supply Chain.pdf",
  },
  {
    title: "Strategic Quality Management",
    description: "Understand the paramount strategic importance of robust quality management systems and advanced tools for ensuring product excellence, compliance, and sustained competitive advantage.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg", // Example image
    file: "/case_studies/Quality Management.pdf",
  },
  {
    title: "Inventory Optimization",
    description: "Boost your supply chain's effectiveness and profitability through the implementation of advanced inventory optimization techniques, minimizing costs while maximizing service levels.",
    image: "https://images.pexels.com/photos/4099462/pexels-photo-4099462.jpeg", // Example image
    file: "/case_studies/Inventory Optimization Case Study.pdf",
  },
  {
    title: "Lean Management Principles",
    description: "Discover the profound benefits of applying lean management principles across sales, marketing, operations, and supply chain to eliminate waste and drive continuous improvement.",
    image: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg", // Example image
    file: "/case_studies/Lean Management.pdf",
  },
  {
    title: "Knowledge Management Excellence",
    description: "Explore compelling use-cases and tangible benefits of implementing effective knowledge management strategies to foster innovation, enhance collaboration, and retain organizational wisdom.",
    image: "https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg", // Example image
    file: "/case_studies/Knowlegde Management Use Cases & Benefits.pdf",
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-12">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Our Case Studies
        </h1>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto font-light">
          Dive into our comprehensive collection of consulting case studies. We offer deep insights into market dynamics, strategic financial planning, cutting-edge supply chain optimization, and innovative operational improvements to empower your business.
        </p>
      </div>

      {/* Case Study Cards Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {caseStudies.map((study, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-xl ring-1 ring-blue-100 hover:ring-blue-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h2 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white leading-snug">
                {study.title}
              </h2>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-gray-700 text-base mb-6 flex-grow leading-relaxed">
                {study.description}
              </p>
              <div className="mt-auto">
                <a
                  href={study.file}
                  download
                  className="inline-flex items-center justify-center bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Download Case Study
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H5a2 2 0 01-2-2v-3a2 2 0 012-2h14a2 2 0 012 2v3a2 2 0 01-2 2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;