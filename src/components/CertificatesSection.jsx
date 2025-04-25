import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaTimes, FaAward, FaMedal, FaCertificate, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

// Certificate data
const certificates = [
  {
    id: 1,
    title: "Python",
    issuer: "NxtWave",
    date: "July 2023",
    type: "certification",
    image: "/assets/certificates/Python Nxtwave.pdf", // PDF certificate
    isPdf: true
  },
  {
    id: 2,
    title: "React JS",
    issuer: "NxtWave",
    date: "April 2024",
    type: "certification",
    image: "/assets/certificates/React js Nxtwave.pdf", // PDF certificate
    isPdf: true
  },
  {
    id: 3,
    title: "Node JS",
    issuer: "Nxtwave",
    date: "December 2023",
    type: "certification",
    image: "/assets/certificates/Node Js Nxtwave.pdf", // PDF certificate
    isPdf: true
  },
  {
    id: 4,
    title: "JavaScript",
    issuer: "Nxtwave",
    date: "september 2023",
    type: "certification",
    image: "/assets/certificates/javaScript Nxtwave.pdf", // PDF certificate
    isPdf: true
  },
  {
    id: 5,
    title: "JavaScript Essential",
    issuer: "Nxtwave",
    date: "November 2023",
    type: "certification",
    image: "/assets/certificates/javaScript essential Nxtwave.pdf", // PDF certificate
    isPdf: true
  },
  {
    id: 5,
    title: "Responsive Web Design",
    issuer: "Nxtwave",
    date: "May 2023",
    type: "certification",
    image: "/assets/certificates/Responsive Nxtwave.pdf", // PDF certificate
    isPdf: true
  },
  {
    id: 6,
    title: "Flexbox",
    issuer: "Nxtwave",
    date: "November 2023",
    type: "certification",
    image: "/assets/certificates/Flexbox Nxtwave.pdf", // PDF certificate
    isPdf: true
  },
  {
    id: 7,
    title: "GIT",
    issuer: "Nxtwave",
    date: "December 2023",
    type: "certification",
    image: "/assets/certificates/Git Nxtwave.pdf", // PDF certificate
    isPdf: true
  },
  {
    id: 8,
    title: "300-Day Coding Strike",
    issuer: "Nxtwave",
    date: "2024",
    type: "achievement",
    badge: true,
    image: "/assets/videos/coding streak.jpg", // Image certificate/badge
    isPdf: false
  }
];

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  
  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };
  
  const closeModal = () => {
    setSelectedCertificate(null);
  };
  
  // Handle opening PDF in new tab
  const openPdfInNewTab = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };
  
  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="certificates" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          Certificates & Achievements
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Recognitions, certifications, and milestones from my professional journey.
        </motion.p>
        
        {/* Certificates Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer ${
                  certificate.badge ? 'border-2 border-yellow-500' : ''
                }`}
                onClick={() => certificate.isPdf ? openPdfInNewTab(certificate.image) : openModal(certificate)}
              >
                {/* Certificate Image/Icon */}
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative flex items-center justify-center">
                  {certificate.isPdf ? (
                    <div className="flex flex-col items-center">
                      <FaFilePdf size={48} className="text-red-500 mb-2" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 px-3 py-1 rounded-full">
                        PDF Certificate
                      </span>
                    </div>
                  ) : (
                    <img 
                      src={certificate.image} 
                      alt={certificate.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x300?text=Certificate";
                      }}
                    />
                  )}
                  
                  {/* Zoom Icon Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium flex items-center gap-2">
                      {certificate.isPdf ? (
                        <>
                          <FaExternalLinkAlt size={14} />
                          Open PDF
                        </>
                      ) : (
                        <>
                          <FaAward size={14} />
                          View Details
                        </>
                      )}
                    </span>
                  </div>
                  
                  {/* Special badge for 300-day strike */}
                  {certificate.badge && (
                    <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                      300-Day Strike
                    </div>
                  )}
                </div>
                
                {/* Certificate Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                    {certificate.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-blue-600 dark:text-blue-400">{certificate.issuer}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{certificate.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Modal for non-PDF certificates */}
        <AnimatePresence>
          {selectedCertificate && !selectedCertificate.isPdf && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <div className="relative">
                  <button
                    className="absolute top-4 right-4 p-2 rounded-full bg-black bg-opacity-25 text-white hover:bg-opacity-50 transition-all z-20"
                    onClick={closeModal}
                  >
                    <FaTimes size={18} />
                  </button>
                  
                  {/* Certificate Image */}
                  <div className="h-64 md:h-80 bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                    <img 
                      src={selectedCertificate.image} 
                      alt={selectedCertificate.title}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/800x600?text=Certificate";
                      }}
                    />
                  </div>
                  
                  {/* Certificate Details */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {selectedCertificate.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:justify-between mb-6">
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                        {selectedCertificate.issuer}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Issued: {selectedCertificate.date}
                      </p>
                    </div>
                    
                    {/* Special achievement description */}
                    {selectedCertificate.badge && (
                      <motion.div 
                        className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 rounded-r-md"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-400 mb-2">
                          Special Achievement
                        </h4>
                        <p className="text-yellow-700 dark:text-yellow-300">
                          Completed a 300-day continuous coding streak, demonstrating exceptional dedication and commitment to coding practice.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CertificatesSection; 