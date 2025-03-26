
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const HeroSection = () => {
  const [glowIntensity, setGlowIntensity] = useState(0);
  const [elementsRendered, setElementsRendered] = useState(false);
  const mounted = useRef(false);
  
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    
    const version = '2025.03.29.3';
    console.log(`HeroSection mounted - version ${version}`);
    
    // Force a reflow before starting animations
    setTimeout(() => {
      setElementsRendered(true);
      
      console.log('HeroSection: DOM Elements check:', {
        titleElement: document.querySelector('.section-title-gradient'),
        subtitleElement: document.querySelector('.section-subtitle-gradient'),
        titleBox: document.querySelector('.title-glass-box'),
        subtitleBox: document.querySelector('.subtitle-glass-box')
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
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-cinzel font-bold mb-6">
            Press Play
          </h1>
          
          <p className="text-xl md:text-2xl font-cinzel text-white/90 mb-12">
            Pioneering the intersection of Sales, Technology, and Entertainment through AI Innovation
          </p>
          
          <div className="flex justify-center mt-12 space-x-4">
            <Link to="/portfolio" className="chrome-button-premium inline-flex items-center">
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="#featured-work" className="chrome-tab inline-flex items-center">
              Featured Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
