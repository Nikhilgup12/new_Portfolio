import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaChevronRight } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Medeaze.solutions",
    location: "Mumbai, India",
    period: "May 2024 - July 2024",
    description: [
      "Developed and completed two major projects independently: a blog and an e-commerce platform, utilizing React.js, JavaScript, Node.js",
      "Managed e-commerce projects, resulting in an average 20% growth",
      "Collaborated with project owners and a development team, ensuring client satisfaction",
      "Designed and implemented user interfaces, ensuring responsive and intuitive user experiences",
      "Optimized application performance for speed and scalability"
    ]
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Code alpha",
    location: "Mumbai, India",
    period: "May 2023 - May 2023",
    description: [
      "Developed and enhanced web applications using modern frameworks, focusing on practical implementation of core concepts",
      "Collaborated in a team-oriented environment to solve real-world challenges and deliver efficient solutions",
      "Strengthened technical expertise in web development through hands-on project work and continuous learning"
    ]
  }
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          Work Experience
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          My professional journey and experience in the tech industry.
        </motion.p>
        
        {/* Desktop Timeline (hidden on mobile) */}
        <motion.div
          className="relative max-w-4xl mx-auto mt-16 pt-8 hidden md:block"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
          
          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className={`relative mb-16 flex ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
              variants={itemVariants}
              transition={{ duration: 0.7 }}
            >
              {/* Timeline Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-6 w-6 bg-white dark:bg-gray-800 border-4 border-blue-500 rounded-full z-10"></div>
              
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center mb-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                    <FaBriefcase size={16} className={`${index % 2 === 0 ? "ml-1 order-2" : "mr-1"}`} />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center mb-2 text-gray-600 dark:text-gray-400 text-sm">
                    <FaMapMarkerAlt size={16} className={`${index % 2 === 0 ? "ml-1 order-2" : "mr-1"}`} />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center mb-4 text-gray-600 dark:text-gray-400 text-sm">
                    <FaCalendarAlt size={16} className={`${index % 2 === 0 ? "ml-1 order-2" : "mr-1"}`} />
                    <span>{exp.period}</span>
                  </div>
                  <ul className={`space-y-2 text-sm text-gray-600 dark:text-gray-300 ${index % 2 === 0 ? "text-right" : ""}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        {index % 2 === 0 && (
                          <span className="flex-grow">{item}</span>
                        )}
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mx-2 flex-shrink-0"></span>
                        {index % 2 !== 0 && (
                          <span className="flex-grow">{item}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Mobile Timeline (card-based vertical layout) */}
        <motion.div
          className="md:hidden mt-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-indigo-600 before:rounded-full">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="mb-10 relative"
                variants={itemVariants}
                transition={{ duration: 0.7 }}
              >
                {/* Timeline Circle and Connecting Line */}
                <div className="absolute left-0 top-0 transform -translate-x-1/2 h-5 w-5 bg-white dark:bg-gray-800 border-4 border-blue-500 rounded-full z-10"></div>
                <div className="absolute top-5 left-0 h-[calc(100%-1.25rem)] w-8 border-t-2 border-l-2 border-dashed border-blue-300 dark:border-blue-700 rounded-tl-lg -translate-x-4"></div>
                
                {/* Experience Card */}
                <motion.div
                  className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md ml-4 hover:shadow-lg transition-all duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Time Period Badge */}
                  <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full mb-3">
                    {exp.period}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white flex items-center">
                    {exp.role}
                  </h3>
                  
                  <div className="flex items-center mb-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                    <FaBriefcase size={14} className="mr-2" />
                    <span>{exp.company}</span>
                  </div>
                  
                  <div className="flex items-center mb-4 text-gray-600 dark:text-gray-400 text-sm">
                    <FaMapMarkerAlt size={14} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                  
                  <div className="mt-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex">
                          <FaChevronRight size={12} className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection; 