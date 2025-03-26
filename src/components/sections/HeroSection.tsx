
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
    
    const version = '2025.03.29.2';
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
          {/* Title glass box with forced styles to ensure it renders properly */}
          <div 
            className="title-glass-box inline-block rounded-lg px-12 py-6 mb-6"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
              position: 'relative',
              zIndex: 5,
              transform: 'translateZ(0)', 
              willChange: 'transform, opacity'
            }}
          >
            <h1 
              className="text-5xl md:text-7xl font-cinzel font-bold section-title-gradient"
              style={{
                textShadow: `0 0 ${glowIntensity * 0.3}px rgba(59, 130, 246, ${glowIntensity / 90})`,
                transition: 'text-shadow 0.3s ease-out',
                position: 'relative',
                zIndex: 10
              }}
            >
              Press Play
            </h1>
          </div>
          
          {/* Subtitle glass box with forced styles */}
          <div 
            className="subtitle-glass-box mt-6 inline-block rounded-lg px-8 py-4"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 2px 15px rgba(0, 0, 0, 0.35)',
              position: 'relative',
              zIndex: 5,
              transform: 'translateZ(0)',
              willChange: 'transform, opacity'
            }}
          >
            <p 
              className="text-xl md:text-2xl font-cinzel text-white/90 animate-fade-in section-subtitle-gradient"
              style={{ 
                animationDelay: "0.1s",
                textShadow: `0 0 ${glowIntensity * 0.15}px rgba(59, 130, 246, ${glowIntensity / 130})`,
                position: 'relative',
                zIndex: 10
              }}
            >
              Pioneering the intersection of Sales, Technology, and Entertainment through AI Innovation
            </p>
          </div>
          
          <div className="flex justify-center mt-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Link to="/portfolio" className="chrome-button-premium text-gray-800 flex items-center gap-2">
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="#featured-work" className="ml-4 chrome-tab text-gray-800 hover:bg-white/10">
              Featured Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
