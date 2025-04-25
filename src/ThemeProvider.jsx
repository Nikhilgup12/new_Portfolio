import React, { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Check if we're in the browser environment
  const isBrowser = typeof window !== 'undefined';
  
  // Check if user prefers dark mode
  const prefersDarkMode = isBrowser && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Initialize theme from localStorage or system preference
  const getInitialTheme = () => {
    if (isBrowser) {
      const storedTheme = localStorage.getItem('theme');
      return storedTheme || (prefersDarkMode ? 'dark' : 'light');
    }
    return 'light'; // Default theme for SSR
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Update theme in localStorage and document when theme changes
  useEffect(() => {
    if (!isBrowser) return;
    
    localStorage.setItem('theme', theme);
    
    // Update document class for theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, isBrowser]);

  // Listen for system preference changes
  useEffect(() => {
    if (!isBrowser) return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only update if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [isBrowser]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark',
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 