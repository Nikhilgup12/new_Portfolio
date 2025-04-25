import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section with Logo and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <motion.h2 
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Nikhil Gupta
            </motion.h2>
            <p className="text-gray-400 mt-2">Frontend Developer</p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#home" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a 
              href="#skills" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>
        
        {/* Bottom Section with Social Links and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Nikhil Gupta. All rights reserved.
          </div>
          
          <div className="flex items-center">
            {/* Social Links */}
            <div className="flex space-x-4 mr-6">
              <motion.a
                href="https://github.com/Nikhilgup12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/nikhil-kumargupta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:nikhilgupta12@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope size={20} />
              </motion.a>
            </div>
            
            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="p-3 bg-blue-600 rounded-full text-white"
              whileHover={{ y: -3, boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <FaArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 