import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- IMPORTANT: IMAGE OPTIMIZATION NOTE ---
// The image URLs below have been modified to point to smaller versions
// (e.g., by adding query params like 'w=400&q=70' to the Unsplash URL)
// to simulate a *properly optimized and compressed* image source.
//
// FOR PRODUCTION:
// You must compress and resize your original images offline (e.g., to WebP format, < 100kb, around 800px width)
// and host them at an optimized location, replacing these URLs.
// The design structure is already configured with loading="lazy".
// ------------------------------------------
const services = [
  {
    title: 'Marketing Strategy & Growth Acceleration',
    description:
      'Develop comprehensive, data-driven strategies to identify high-value target audiences, optimize marketing channels, and drive measurable, sustained business growth and market share expansion.',
    // Replace this URL with your OPTIMIZED image
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=70',
    path: '/services/marketing-strategy',
  },
  {
    title: 'Advanced Data Analytics & AI Implementation',
    description:
      'Transform raw enterprise data into actionable insights using advanced analytics and responsible AI/ML models. We improve decision-making speed, predict market shifts, and boost operational performance.',
    // Replace this URL with your OPTIMIZED image
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=70',
    path: '/services/data-analytics',
  },
  {
    title: 'Operational Excellence and Cost Reduction',
    description:
      'Streamline mission-critical business processes, eliminate bottlenecks, and enhance efficiency through expert analysis. Our focus is achieving world-class cost structures without compromising quality or agility.',
    // Replace this URL with your OPTIMIZED image
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=70',
    path: '/services/operations-consulting',
  },
  {
    title: 'Full-Scale Digital & Technology Transformation',
    description:
      'Guide your organization through the adoption and integration of new technologies and agile digital processes. We ensure you stay competitive, modernize core systems, and build future-ready capabilities.',
    // Replace this URL with your OPTIMIZED image
    image:
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=70',
    path: '/services/digital-transformation',
  },
  {
    title: 'Complex Project & Portfolio Management',
    description:
      'Ensure successful project execution by establishing structured methodologies, performing rigorous risk assessment, and providing hands-on leadership for complex, cross-functional initiatives and major capital programs.',
    // New, highly compressed placeholder image URL representing planning/management.
    // FOR PRODUCTION: Replace this with your own optimized image (e.g., WebP, < 100kb).
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=70',
    path: '/services/project-management-guidance',
},
  {
    title: 'Global Supply Chain Resilience & Optimization',
    description:
      'Optimize your end-to-end supply chain for total resilience, transparency, and cost-effectiveness. We cover everything from strategic sourcing and procurement to last-mile delivery network redesign.',
    // Replace this URL with your OPTIMIZED image
    image:
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=70',
    path: '/services/supply-chain-management',
  },
];

const Services = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // The delay here simulates network time for fetching data/resources
    // In a real app, this should be tied to data fetch completion, not just a timer
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
    // Changed boxShadow color to a more specific blue for better performance/clarity
    hover: { y: -6, scale: 1.02, boxShadow: '0 12px 24px rgba(59, 130, 246, 0.25)', transition: { duration: 0.3 } },
  };

  const imageVariants = { hover: { scale: 1.05, transition: { duration: 0.5 } } };
  const overlayVariants = { hover: { opacity: 0.6, transition: { duration: 0.3 } } };
  const contentVariants = { hover: { x: 8, transition: { duration: 0.3 } } };

  const ServiceSkeleton = () => (
    <div className="animate-pulse flex flex-col bg-gray-100 rounded-3xl overflow-hidden h-80">
      {/* Image Placeholder */}
      <div className="bg-gray-300 h-48 w-full" />
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title Placeholder */}
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          {/* Description Placeholder */}
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
        {/* Button Placeholder */}
        <div className="mt-4 h-10 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-600 text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full shadow-lg">
                Strategic Consulting Excellence
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-blue-900 leading-tight mb-6">
              Transform Your
              <br />
              <span className="text-blue-600">Business Future</span>
            </h1>
            <p className="text-lg md:text-2xl text-blue-700 max-w-4xl mx-auto leading-relaxed">
              Delivering world-class consulting expertise to accelerate your organization's strategic objectives and drive sustainable growth
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Loading State: Skeleton Loaders */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {Array(6).fill(0).map((_, idx) => <ServiceSkeleton key={idx} />)}
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-10 md:space-y-16"
            >
              {services.map((service, index) => {
                const isReverse = index % 2 !== 0;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    className="group relative bg-white border border-blue-100 rounded-3xl shadow-lg overflow-hidden"
                  >
                    <div className={`flex flex-col lg:flex-row ${isReverse ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Image Section */}
                      <div className="lg:w-1/2 relative overflow-hidden h-64 sm:h-80 lg:h-full">
                        <motion.div
                          className="absolute inset-0 bg-gray-900 z-10 opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                          variants={overlayVariants}
                        />
                        <motion.img
                          // *** CRITICAL FOR SPEED: The images loaded here MUST be optimized. ***
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy" // Native lazy loading helps, but file size is key.
                          variants={imageVariants}
                        />
                      </div>

                      {/* Content Section */}
                      <div className="lg:w-1/2 p-6 sm:p-10 lg:p-16 bg-gradient-to-br from-white to-blue-50 flex flex-col justify-center">
                        <motion.div variants={contentVariants} whileHover="hover" className="space-y-4 sm:space-y-6">
                          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">{service.title}</h2>
                          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{service.description}</p>
                          <Link to={service.path}>
                            <motion.button
                              whileHover={{ scale: 1.05, x: 5 }}
                              whileTap={{ scale: 0.95 }}
                              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white font-bold text-base sm:text-lg rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-300"
                            >
                              Discover More
                              <motion.svg
                                className="ml-2 w-5 h-5 sm:ml-3 sm:w-6 sm:h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </motion.svg>
                            </motion.button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-blue-900 text-white py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-blue-200 mb-8">Let's discuss how our strategic consulting can accelerate your growth</p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 sm:px-12 sm:py-5 bg-white text-blue-500 font-black text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                Start Your Transformation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;