import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from '../ThemeProvider';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const mobileMenuRef = useRef(null);

  // Handle scroll effect, active section, and navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle navbar visibility based on scroll direction
      if (currentScrollY > lastScrollY.current + 10) {
        setIsVisible(false); // Scrolling down - hide navbar
      } else if (currentScrollY < lastScrollY.current - 10) {
        setIsVisible(true); // Scrolling up - show navbar
      }
      
      lastScrollY.current = currentScrollY;
      setScrolled(currentScrollY > 50);
      
      // Determine active section
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = currentScrollY + 100;
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && menuOpen) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const navItems = [
    { name: "Home", href: "#home", icon: "🏠" },
    { name: "About", href: "#about", icon: "👨‍💻" },
    { name: "Projects", href: "#projects", icon: "🚀" },
    { name: "Experience", href: "#experience", icon: "📊" },
    { name: "Skills", href: "#skills", icon: "🛠️" },
    { name: "Videos", href: "#videos", icon: "🎥" },
    { name: "Contact", href: "#contact", icon: "📧" }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    
    // Get target element
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    // Scroll to element if it exists
    if (targetElement) {
      setTimeout(() => {
        const navHeight = 80; // Approximate navbar height
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({
          top: targetPosition - navHeight,
          behavior: "smooth"
        });
        
        // Update URL without reloading page
        window.history.pushState(null, null, href);
        
        // Set active section
        setActiveSection(targetId);
      }, 100); // Small delay to ensure DOM is ready
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg py-3" 
          : "bg-transparent py-5"
      } ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center group">
          <motion.div 
            className="text-2xl font-bold text-gray-800 dark:text-white group-hover:gradient-text transition-all duration-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="flex items-center">
              <FaCode className="mr-2 text-blue-600 dark:text-blue-400" />
              Nikhil Gupta
            </span>
          </motion.div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <span className="relative z-10 flex items-center">
                  <span className="mr-1">{item.icon}</span>
                  {item.name}
                </span>
                {activeSection === item.href.substring(1) && (
                  <motion.span 
                    layoutId="navbar-active-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            </motion.div>
          ))}
          
          <div className="h-6 mx-2 w-px bg-gray-300 dark:bg-gray-700"></div>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-1">
            <motion.a
              href="https://github.com/Nikhilgup12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="GitHub Profile"
            >
              <FaGithub size={18} />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/nikhil-kumargupta"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="LinkedIn Profile"
            >
              <FaLinkedin size={18} />
            </motion.a>
            
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="p-2 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Contact Me"
            >
              <FaEnvelope size={18} />
            </motion.a>
          </div>
          
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              theme === "dark" 
                ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" 
                : "bg-blue-100 text-blue-800 hover:bg-blue-200"
            } transition-all`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
          </motion.button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Theme Toggle for Mobile */}
          <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              theme === "dark" 
                ? "bg-gray-800 text-yellow-400" 
                : "bg-blue-100 text-blue-800"
            }`}
            whileHover={{ rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
          </motion.button>
          
          {/* Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-1.5 rounded-lg ${menuOpen ? "bg-gray-200 dark:bg-gray-700" : ""}`}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col space-y-1.5">
              <motion.span
                animate={{
                  rotateZ: menuOpen ? 45 : 0,
                  y: menuOpen ? 8 : 0,
                }}
                className="block h-0.5 w-6 bg-gray-800 dark:bg-gray-200"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className="block h-0.5 w-6 bg-gray-800 dark:bg-gray-200"
              />
              <motion.span
                animate={{
                  rotateZ: menuOpen ? -45 : 0,
                  y: menuOpen ? -8 : 0,
                }}
                className="block h-0.5 w-6 bg-gray-800 dark:bg-gray-200"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-slate-900 shadow-xl rounded-b-xl overflow-hidden border-t border-gray-100 dark:border-gray-800"
          >
            <nav className="flex flex-col px-4 py-2">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center py-3 px-3 text-lg ${
                      activeSection === item.href.substring(1)
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg font-medium"
                        : "text-gray-800 dark:text-gray-200"
                    } border-b border-gray-100 dark:border-gray-800`}
                  >
                    <span className="mr-3 text-xl">{item.icon}</span>
                    {item.name}
                    {activeSection === item.href.substring(1) && (
                      <motion.span 
                        layoutId="mobile-active-indicator"
                        className="ml-auto w-1.5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full"
                      />
                    )}
                  </a>
                </motion.div>
              ))}
              
              {/* Social Links in Mobile Menu */}
              <div className="flex justify-center space-x-5 py-4 mt-2 border-t border-gray-100 dark:border-gray-800">
                <motion.a
                  href="https://github.com/Nikhilgup12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub size={20} />
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/nikhil-kumargupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin size={20} />
                </motion.a>
                
                <motion.a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaEnvelope size={20} />
                </motion.a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 