
import { useEffect, useState, useRef } from 'react';

const HeroSection = () => {
  const [glowIntensity, setGlowIntensity] = useState(0);
  const [elementsRendered, setElementsRendered] = useState(false);
  const mounted = useRef(false);
  
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    
    const version = '2025.03.29.5'; // Updated version number
    console.log(`HeroSection mounted - version ${version}`);
    
    // Force a reflow before starting animations
    setTimeout(() => {
      setElementsRendered(true);
      
      // Log the actual DOM elements to help with debugging
      console.log('HeroSection: DOM Elements check:', {
        titleElement: document.querySelector('.title-glass-box'),
        subtitleElement: document.querySelector('.subtitle-glass-box'),
        titleGradient: document.querySelector('.section-title-gradient'),
        subtitleGradient: document.querySelector('.section-subtitle-gradient')
      });
      
      // Log computed styles for debugging
      const titleBox = document.querySelector('.title-glass-box');
      const subtitleBox = document.querySelector('.subtitle-glass-box');
      
      if (titleBox) {
        const computedStyle = window.getComputedStyle(titleBox);
        console.log('Title glass box computed styles:', {
          background: computedStyle.backgroundColor,
          backdropFilter: computedStyle.backdropFilter,
          border: computedStyle.border,
          boxShadow: computedStyle.boxShadow,
          zIndex: computedStyle.zIndex
        });
      } else {
        console.error('Title glass box not found in DOM!');
      }
      
      if (subtitleBox) {
        const computedStyle = window.getComputedStyle(subtitleBox);
        console.log('Subtitle glass box computed styles:', {
          background: computedStyle.backgroundColor,
          backdropFilter: computedStyle.backdropFilter,
          border: computedStyle.border
        });
      }
    }, 100);
    
    // Log critical rendering information
    console.log('HeroSection: Starting render sequence');
    
    // Track this session in sessionStorage
    const sessionKey = `hero_section_loaded_${window.sessionId || Date.now()}`;
    sessionStorage.setItem(sessionKey, 'true');
    
    // Build up the glow effect
    console.log('HeroSection: Initializing glow effect');
    const buildUpInterval = setInterval(() => {
      setGlowIntensity(prev => {
        if (prev >= 100) {
          console.log('HeroSection: Glow effect reached maximum');
          clearInterval(buildUpInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    // Start fade out after 4 seconds
    const fadeTimeout = setTimeout(() => {
      console.log('HeroSection: Starting fade out sequence');
      const fadeOutInterval = setInterval(() => {
        setGlowIntensity(prev => {
          if (prev <= 0) {
            console.log('HeroSection: Fade out complete');
            clearInterval(fadeOutInterval);
            return 0;
          }
          return prev - 1;
        });
      }, 30);
      
      return () => clearInterval(fadeOutInterval);
    }, 4000);

    return () => {
      clearInterval(buildUpInterval);
      clearTimeout(fadeTimeout);
      console.log('HeroSection cleanup');
    };
  }, []);
  
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="container px-6 relative" style={{ zIndex: 10 }}>
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Title with glass box */}
          <div className="title-glass-box px-6 py-3 rounded-lg mb-4" style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
            display: 'inline-block'
          }}>
            <h1 className="section-title-gradient text-5xl md:text-7xl font-cinzel font-bold">
              Press Play
            </h1>
          </div>
          
          {/* Subtitle with glass box */}
          <div className="subtitle-glass-box px-5 py-2 rounded-lg mb-10" style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 2px 15px rgba(0, 0, 0, 0.35)',
            display: 'inline-block'
          }}>
            <p className="section-subtitle-gradient text-xl md:text-2xl font-cinzel">
              Pioneering the intersection of Sales, Technology, and Entertainment through AI Innovation
            </p>
          </div>
          
          {/* Buttons have been removed */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
