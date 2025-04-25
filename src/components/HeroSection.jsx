import React, { useRef, useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import { FaDownload } from 'react-icons/fa';
import * as THREE from 'three';

// 3D Model Component
const AnimatedModel = (props) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} {...props}>
        <octahedronGeometry args={[1, 2]} />
        <meshStandardMaterial 
          color="#3b82f6"
          wireframe={true}
        />
      </mesh>
    </Float>
  );
};

// Particle Background
const ParticleBackground = () => {
  const particlesRef = useRef();
  
  const particles = useMemo(() => {
    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
    }
    
    return positions;
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles}
          count={particles.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#8b5cf6" sizeAttenuation transparent />
    </points>
  );
};

const HeroSection = () => {
  // Update resume URL path - make sure this file exists in your public folder
  const resumeUrl = "/Nikhil final Resume (1).pdf"; 
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden py-12 sm:py-16 md:py-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-slate-900 z-0" />
      
      <div className="container mx-auto px-4 flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-center z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1 mt-4 lg:mt-0 w-full"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-medium mb-1 sm:mb-2"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4 gradient-text"
          >
            Nikhil Gupta
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-gray-700 dark:text-gray-300"
          >
            Frontend Developer
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-blue-600 text-white rounded-md font-medium shadow-lg hover:bg-blue-700 transition-all text-xs sm:text-sm md:text-base"
            >
              View My Work
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-medium shadow-lg border border-blue-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-gray-600 transition-all text-xs sm:text-sm md:text-base"
            >
              Contact Me
            </motion.a>
            
            <motion.a
              href={resumeUrl}
              download="Nikhil final Resume (1).pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-green-600 text-white rounded-md font-medium shadow-lg hover:bg-green-700 transition-all flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base"
            >
              <FaDownload size={14} className="hidden xs:inline" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400"
          >
            <span>React.js</span>
            <span>•</span>
            <span>JavaScript</span>
            <span>•</span>
            <span>Node.js</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </motion.div>
        </motion.div>
        
        {/* 3D Model */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-[250px] xs:h-[280px] sm:h-[320px] md:h-[380px] lg:h-[450px] w-full order-1 lg:order-2"
        >
          <Canvas 
            camera={{ position: [0, 0, 5], fov: isMobile ? 60 : 50 }} 
            dpr={[1, 2]}
            style={{ touchAction: 'none' }}
            performance={{ min: 0.5 }}
          >
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <AnimatedModel position={[0, 0, 0]} scale={isMobile ? 1.2 : 1.5} />
            <ParticleBackground />
            <ContactShadows 
              opacity={0.4} 
              scale={10} 
              blur={2} 
              far={10} 
              resolution={256} 
              color="#000000" 
            />
          </Canvas>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ 
          repeat: Infinity, 
          duration: 1.5 
        }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-9 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5 
            }}
            className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mt-2"
          />
        </div>
        <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1 sm:mt-2 text-center">Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default HeroSection; 