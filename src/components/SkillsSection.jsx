import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaTools } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiBootstrap } from 'react-icons/si';

// Skill categories
const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: <FaHtml5 size={24} className="text-blue-500" />,
    skills: [
      { name: "HTML", level: 90, icon: <FaHtml5 size={30} className="text-orange-500" /> },
      { name: "CSS", level: 85, icon: <FaCss3Alt size={30} className="text-blue-500" /> },
      { name: "JavaScript", level: 80, icon: <FaJs size={30} className="text-yellow-500" /> },
      { name: "React.js", level: 85, icon: <FaReact size={30} className="text-blue-400" /> },
      { name: "Bootstrap", level: 80, icon: <SiBootstrap size={30} className="text-purple-500" /> },
      { name: "Tailwind CSS", level: 75, icon: <SiTailwindcss size={30} className="text-teal-500" /> }
    ]
  },
  {
    id: "backend",
    title: "Backend",
    icon: <FaNodeJs size={24} className="text-green-500" />,
    skills: [
      { name: "Node.js", level: 75, icon: <FaNodeJs size={30} className="text-green-500" /> },
      { name: "Express.js", level: 70, icon: <SiExpress size={30} className="text-gray-500" /> },
      { name: "MongoDB", level: 65, icon: <SiMongodb size={30} className="text-green-600" /> },
      { name: "SQL", level: 60, icon: <FaDatabase size={30} className="text-blue-600" /> },
      { name: "REST API", level: 75, icon: <FaTools size={30} className="text-gray-500" /> }
    ]
  },
  {
    id: "tools",
    title: "Tools & Other",
    icon: <FaTools size={24} className="text-gray-500" />,
    skills: [
      { name: "Git", level: 85, icon: <FaGitAlt size={30} className="text-orange-600" /> },
      { name: "GitHub", level: 80, icon: <FaGitAlt size={30} className="text-purple-600" /> },
      { name: "VS Code", level: 90, icon: <FaTools size={30} className="text-blue-500" /> },
      { name: "Responsive Design", level: 85, icon: <FaTools size={30} className="text-pink-500" /> },
      { name: "Problem Solving", level: 80, icon: <FaTools size={30} className="text-yellow-500" /> }
    ]
  }
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState("frontend");
  
  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  
  const tabVariants = {
    inactive: { scale: 0.95, opacity: 0.7 },
    active: { scale: 1, opacity: 1 }
  };

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          A range of skills and technologies I've worked with and mastered over my journey.
        </motion.p>
        
        {/* Category Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2 max-w-full">
          <div className="inline-flex bg-white dark:bg-gray-800 p-1 rounded-lg shadow-md">
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-3 rounded-md text-sm md:text-base font-medium ${
                  activeCategory === category.id
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                } transition-all duration-200 ease-in-out mx-1`}
                variants={tabVariants}
                animate={activeCategory === category.id ? "active" : "inactive"}
                transition={{ duration: 0.2 }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Skills Grid Display */}
        <div className="max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: activeCategory === category.id ? 1 : 0,
                x: activeCategory === category.id ? 0 : 20,
                display: activeCategory === category.id ? "block" : "none"
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView && activeCategory === category.id ? "visible" : "hidden"}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {category.skills.map((skill) => (
                  <motion.div 
                    key={skill.name} 
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <div className="flex items-center mb-4">
                      <div className="mr-4 text-blue-500">
                        {skill.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{skill.name}</h3>
                        <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Proficiency: {skill.level}%</div>
                      </div>
                    </div>
                    
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1,
                          delay: 0.2,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Skills Summary */}
        <motion.div 
          className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">My Tech Stack at a Glance</h3>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {skillCategories.flatMap(category => 
              category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-full flex items-center"
                  whileHover={{ scale: 1.05, backgroundColor: '#3b82f6', color: 'white' }}
                >
                  <span className="mr-2">{skill.icon}</span>
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 