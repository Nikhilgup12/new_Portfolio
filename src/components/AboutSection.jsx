import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Animated skill bubbles
  const skills = [
    "HTML", "CSS", "JavaScript", "React.js", "Bootstrap", 
    "Node.js", "Express", "MongoDB", "SQLite", "Git", 
    "Next.js", "Flexbox", "Python"
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
          {/* Profile Image with 3D Effect */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-lg opacity-70 animate-pulse"></div>
              <div className="card-3d relative overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
                {/* Placeholder for profile image */}
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-200 to-indigo-200 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center text-4xl font-bold text-white">
                  NG
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Frontend Developer & UI/UX Enthusiast
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Hello! I'm Nikhil Gupta, a passionate frontend developer currently pursuing my education at Thakur College of Engineering and Technology. I specialize in creating responsive, user-friendly web applications with modern JavaScript frameworks.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              My journey in web development has equipped me with strong problem-solving abilities and an eye for detail. I enjoy building clean, efficient code that delivers exceptional user experiences.
            </p>
            
            {/* Education */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Education</h4>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <p className="font-medium text-gray-800 dark:text-gray-200">Thakur College of Engineering and Technology</p>
                <p className="text-gray-600 dark:text-gray-400">Expected Graduation: 2026</p>
              </div>
            </div>
            
            {/* Skills Bubbles */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">My Skills</h4>
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    variants={skillVariants}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-sm font-medium"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 