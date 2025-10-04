import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 

const services = [
  {
    title: 'Marketing Strategy & Growth Acceleration',
    description: 'Develop comprehensive, data-driven strategies to identify high-value target audiences, optimize marketing channels, and drive measurable, sustained business growth and market share expansion.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    // UPDATED PATH
    path: '/services/marketing-strategy', 
  },
  {
    title: 'Advanced Data Analytics & AI Implementation',
    description: 'Transform raw enterprise data into actionable insights using advanced analytics and responsible AI/ML models. We improve decision-making speed, predict market shifts, and boost operational performance.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    // UPDATED PATH
    path: '/services/data-analytics',
  },
  {
    title: 'Operational Excellence and Cost Reduction',
    description: 'Streamline mission-critical business processes, eliminate bottlenecks, and enhance efficiency through expert analysis. Our focus is achieving world-class cost structures without compromising quality or agility.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    // UPDATED PATH
    path: '/services/operations-consulting',
  },
  {
    title: 'Full-Scale Digital & Technology Transformation',
    description: 'Guide your organization through the adoption and integration of new technologies and agile digital processes. We ensure you stay competitive, modernize core systems, and build future-ready capabilities.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    // UPDATED PATH
    path: '/services/digital-transformation',
  },
  {
    title: 'Complex Project & Portfolio Management',
    description: 'Ensure successful project execution by establishing structured methodologies, performing rigorous risk assessment, and providing hands-on leadership for complex, cross-functional initiatives and major capital programs.',
    image: 'https://www.shutterstock.com/shutterstock/videos/1101400839/thumb/4.jpg?ip=x480',
    // UPDATED PATH
    path: '/services/project-management-guidance',
  },
  {
    title: 'Global Supply Chain Resilience & Optimization',
    description: 'Optimize your end-to-end supply chain for total resilience, transparency, and cost-effectiveness. We cover everything from strategic sourcing and procurement to last-mile delivery network redesign.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    // UPDATED PATH
    path: '/services/supply-chain-management',
  },
];

const Services = () => {
  // ... (containerVariants, cardVariants, imageVariants, overlayVariants, contentVariants remain unchanged) ...
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 25px 60px rgba(59, 130, 246, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.5 }
    }
  };

  const overlayVariants = {
    hover: {
      opacity: 0.8,
      transition: { duration: 0.3 }
    }
  };

  const contentVariants = {
    hover: {
      x: 10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 md:py-20 px-4 sm:px-6"> 
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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

        {/* Floating Elements */}
        <div className="absolute top-10 left-5 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-32 h-32 bg-blue-300 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </section>

      {/* --------------------------- */}
      
      {/* Services Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6"> 
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
                    <div className="lg:w-1/2 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gray-900 z-10 opacity-30 group-hover:opacity-80 transition-opacity duration-300"
                        initial={{ opacity: 0.3 }}
                        variants={overlayVariants}
                      />

                      <motion.div
                        variants={imageVariants}
                        whileHover="hover"
                        className="relative h-64 sm:h-80 lg:h-full"
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 p-6 sm:p-10 lg:p-16 bg-gradient-to-br from-white to-blue-50 flex flex-col justify-center">
                      <motion.div
                        variants={contentVariants}
                        whileHover="hover"
                        className="space-y-4 sm:space-y-6"
                      >
                        <div className="w-16 h-1 bg-blue-600 rounded-full"></div>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                          {service.title}
                        </h2>

                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Button is wrapped in a Link component */}
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
                                    transition={{
                                        duration: 2,
                                        ease: "easeInOut",
                                        repeat: Infinity 
                                    }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
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
        </div>
      </section>

      {/* --------------------------- */}

      {/* Bottom Section */}
      <section className="bg-blue-900 text-white py-16 md:py-20 px-4 sm:px-6"> 
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6"> 
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-blue-200 mb-8"> 
              Let's discuss how our strategic consulting can accelerate your growth
            </p>
            {/* Assuming this links to a contact page */}
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