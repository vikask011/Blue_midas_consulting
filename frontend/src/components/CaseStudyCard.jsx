// src/components/CaseStudyCard.jsx
import React from "react";

const CaseStudyCard = ({ study }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl ring-1 ring-blue-100 hover:ring-blue-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden">
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden bg-gray-200">
        <img
          src={study.image}
          alt={study.title}
          loading="lazy" // lazy load image
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
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H5a2 2 0 01-2-2v-3a2 2 0 012-2h14a2 2 0 012 2v3a2 2 0 01-2 2z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
