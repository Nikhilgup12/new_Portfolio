import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

// Project data
const projects = [
  {
    id: 1,
    title: "Nxt Watch",
    description: "A YouTube clone built with React JS allowing users to log in, explore video categories, save videos, search content, and toggle theme.",
    image: "/assets/projects/project2.png", // Update with your project image path
    technologies: ["React JS", "Node JS", "JavaScript", "Bootstrap", "REST API"],
    liveLink: "https://nikhilyoutube.ccbp.tech",
    githubLink: "https://github.com/Nikhilgup12/NxtWatch-YoutubeClone",
    features: [
      "Developed multiple pages using React components, props, state, and event handling",
      "Implemented authentication with JWT tokens and local storage",
      "Created protected routes with React Router for secure access"
    ]
  },
  {
    id: 2,
    title: "Jobby App",
    description: "A comprehensive job search solution built with React JS, allowing users to search, filter and apply for jobs.",
    image: "/assets/projects/project1.png", // Update with your project image path
    technologies: ["React JS", "Node JS", "JavaScript", "Bootstrap", "JWT Token"],
    liveLink: "https://nikhiljobsweb.ccbp.tech/",
    githubLink: "https://github.com/Nikhilgup12/Job-APP-",
    features: [
      "Designed Login, Home, Jobs, and Job details pages with React components",
      "Secured user data with authentication and authorization",
      "Implemented protected routes for authenticated users"
    ]
  },
  {
    id: 3,
    title: "Nxt Trendz",
    description: "An e-commerce platform inspired by Amazon and Flipkart, built with React JS.",
    image: "/assets/projects/project3.png", // Update with your project image path
    technologies: ["React JS", "Node JS", "JavaScript", "Bootstrap", "JWT Token"],
    liveLink: "https://nikhilgupecomm.ccbp.tech/",
    githubLink: "https://github.com/Nikhilgup12/nxt-trendz-Ecommerce",
    features: [
      "Created Login, Products, and Product details pages with React components",
      "Implemented user authentication and authorization",
      "Developed intuitive shopping interface for product discovery"
    ]
  }
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  
  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  
  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  
  const openModal = (project) => {
    setModalProject(project);
    setShowModal(true);
  };
  
  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          My Projects
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Here are some of my featured projects. Each one represents a unique challenge and learning experience.
        </motion.p>
        
        {/* Mobile Project Display (Cards) */}
        <div className="md:hidden">
          <div className="relative">
            <AnimatePresence mode="wait">
              {projects.map((project, index) => (
                index === activeProject && (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="h-48 bg-gray-200 dark:bg-gray-600 flex items-center justify-center overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/800x600?text=Project+Image";
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-600">
                        <div className="flex space-x-4">
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            <FaGithub size={20} />
                          </a>
                          <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            <FaExternalLinkAlt size={20} />
                          </a>
                        </div>
                        <button 
                          className="text-blue-600 dark:text-blue-400 font-medium"
                          onClick={() => openModal(project)}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            
            {/* Mobile Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeProject 
                      ? 'bg-blue-600 dark:bg-blue-500' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Mobile Navigation Arrows */}
            <div className="absolute top-1/2 w-full flex justify-between px-2 -mt-10 z-10">
              <motion.button
                onClick={prevProject}
                className="p-2 rounded-full bg-white/80 dark:bg-gray-700/80 shadow-md text-gray-800 dark:text-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronLeft size={16} />
              </motion.button>
              <motion.button
                onClick={nextProject}
                className="p-2 rounded-full bg-white/80 dark:bg-gray-700/80 shadow-md text-gray-800 dark:text-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronRight size={16} />
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Desktop 3D Carousel */}
        <div className="hidden md:block relative mt-12 h-[600px] md:h-[500px]">
          <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent z-0"></div>
          
          {/* Project Cards */}
          <div className="relative h-full flex items-center justify-center">
            {projects.map((project, index) => {
              // Calculate position in the carousel
              let position = index - activeProject;
              if (position < 0) position += projects.length;
              if (position >= projects.length) position -= projects.length;
              
              // Define transformations based on position
              const cardPositions = {
                0: { // Active card
                  x: 0,
                  scale: 1,
                  zIndex: 3,
                  opacity: 1,
                  rotateY: 0
                },
                1: { // Right card
                  x: '50%',
                  scale: 0.8,
                  zIndex: 2,
                  opacity: 0.7,
                  rotateY: 15
                },
                2: { // Back right card
                  x: '90%',
                  scale: 0.6,
                  zIndex: 1,
                  opacity: 0.5,
                  rotateY: 30
                },
                [projects.length - 1]: { // Left card
                  x: '-50%',
                  scale: 0.8,
                  zIndex: 2,
                  opacity: 0.7,
                  rotateY: -15
                },
                [projects.length - 2]: { // Back left card
                  x: '-90%',
                  scale: 0.6,
                  zIndex: 1,
                  opacity: 0.5,
                  rotateY: -30
                }
              };
              
              // Use position or fallback to a far-away card
              const cardStyle = cardPositions[position] || {
                x: position > projects.length / 2 ? '-120%' : '120%',
                scale: 0.4,
                zIndex: 0,
                opacity: 0,
                rotateY: position > projects.length / 2 ? -45 : 45
              };
              
              return (
                <motion.div
                  key={project.id}
                  className="project-card absolute w-full max-w-3xl h-[400px] cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{
                    x: cardStyle.x,
                    scale: cardStyle.scale,
                    zIndex: cardStyle.zIndex,
                    opacity: cardStyle.opacity,
                    rotateY: cardStyle.rotateY
                  }}
                  transition={{ duration: 0.6 }}
                  onClick={() => position === 0 && openModal(project)}
                >
                  <div className={`relative h-full w-full rounded-xl overflow-hidden bg-white dark:bg-gray-700 shadow-xl ${position === 0 ? 'ring-2 ring-blue-500' : ''}`}>
                    {/* Project Image */}
                    <div className="h-1/2 bg-gray-200 dark:bg-gray-600 relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/800x600?text=Project+Image";
                        }}
                      />
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span key={i} className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      {position === 0 && (
                        <div className="mt-auto pt-2 flex justify-between items-center">
                          <div className="flex space-x-4">
                            <a 
                              href={project.githubLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaGithub size={20} />
                            </a>
                            <a 
                              href={project.liveLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaExternalLinkAlt size={20} />
                            </a>
                          </div>
                          <span className="text-blue-600 dark:text-blue-400 text-sm">
                            View Details
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Desktop Navigation Arrows */}
          <div className="absolute top-1/2 w-full flex justify-between px-4 z-10">
            <motion.button
              onClick={prevProject}
              className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg text-gray-800 dark:text-gray-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={nextProject}
              className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg text-gray-800 dark:text-gray-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight size={20} />
            </motion.button>
          </div>
          
          {/* Desktop Project Indicators */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeProject 
                    ? 'bg-blue-600 transform scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-800'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Project Detail Modal */}
        <AnimatePresence>
          {showModal && modalProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button 
                    className="absolute top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 z-10"
                    onClick={() => setShowModal(false)}
                  >
                    <FaTimes />
                  </button>
                  
                  <div className="h-56 md:h-72 bg-gray-200 dark:bg-gray-600 flex items-center justify-center overflow-hidden">
                    <img 
                      src={modalProject.image} 
                      alt={modalProject.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/1200x800?text=Project+Image";
                      }}
                    />
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white">{modalProject.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{modalProject.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Key Features</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                        {modalProject.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {modalProject.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a 
                        href={modalProject.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 py-3 flex justify-center items-center gap-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FaExternalLinkAlt size={16} />
                        <span>Live Demo</span>
                      </a>
                      <a 
                        href={modalProject.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 py-3 flex justify-center items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      >
                        <FaGithub size={16} />
                        <span>View Code</span>
                      </a>
                    </div>
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

export default ProjectsSection; 