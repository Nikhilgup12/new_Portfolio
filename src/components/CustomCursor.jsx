import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth > 768) {
      setHidden(false);
      
      const addEventListeners = () => {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
      };
      
      const removeEventListeners = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseenter', onMouseEnter);
        document.removeEventListener('mouseleave', onMouseLeave);
        document.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mouseup', onMouseUp);
      };
      
      const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
      
      const onMouseEnter = () => {
        setHidden(false);
      };
      
      const onMouseLeave = () => {
        setHidden(true);
      };
      
      const onMouseDown = () => {
        setClicked(true);
      };
      
      const onMouseUp = () => {
        setClicked(false);
      };

      // Track link and button hovers
      const handleLinkHoverStart = () => setLinkHovered(true);
      const handleLinkHoverEnd = () => setLinkHovered(false);

      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', handleLinkHoverStart);
        el.addEventListener('mouseleave', handleLinkHoverEnd);
      });
      
      addEventListeners();
      
      return () => {
        removeEventListeners();
        document.querySelectorAll('a, button').forEach(el => {
          el.removeEventListener('mouseenter', handleLinkHoverStart);
          el.removeEventListener('mouseleave', handleLinkHoverEnd);
        });
      };
    }
  }, []);

  if (hidden) return null;

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : linkHovered ? 2 : 1})`,
        opacity: hidden ? 0 : 1,
        transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
      }}
    />
  );
};

export default CustomCursor; 