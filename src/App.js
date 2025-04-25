import React, { useEffect } from 'react';
import './index.css';
import { ThemeProvider } from './ThemeProvider';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import VideosSection from './components/VideosSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Simple Hero Section replacement


function App() {
  // Add a class to the body when the component mounts
  useEffect(() => {
    document.body.classList.add('bg-background', 'text-foreground');
    
    // Clean up function
    return () => {
      document.body.classList.remove('bg-background', 'text-foreground');
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <CustomCursor />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <VideosSection />
          <CertificatesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App; 