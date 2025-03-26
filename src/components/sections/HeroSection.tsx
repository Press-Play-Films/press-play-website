
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const HeroSection = () => {
  const [glowIntensity, setGlowIntensity] = useState(0);
  const mounted = useRef(false);
  
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    
    const version = '2025.03.28.3';
    console.log(`HeroSection mounted - version ${version}`);
    
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
          <div className="inline-block rounded-lg px-6 py-3 backdrop-blur-sm bg-white/15 border border-white/25 shadow-[0_4px_15px_rgba(0,0,0,0.35)]">
            <h1 
              className="text-5xl md:text-7xl font-cinzel font-bold section-title-gradient"
              style={{
                textShadow: `0 0 ${glowIntensity * 0.3}px rgba(59, 130, 246, ${glowIntensity / 90})`,
                transition: 'text-shadow 0.3s ease-out'
              }}
            >
              Press Play
            </h1>
          </div>
          <div className="inline-block rounded-lg px-5 py-2 mt-6 backdrop-blur-sm bg-white/10 border border-white/15 shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            <p 
              className="text-xl md:text-2xl font-cinzel text-white/90 animate-fade-in section-subtitle-gradient"
              style={{ 
                animationDelay: "0.1s",
                textShadow: `0 0 ${glowIntensity * 0.15}px rgba(59, 130, 246, ${glowIntensity / 130})` 
              }}
            >
              Pioneering the intersection of Sales, Technology, and Entertainment through AI Innovation
            </p>
          </div>
          <div className="flex justify-center mt-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Link to="/portfolio" className="chrome-button text-gray-800 flex items-center gap-2">
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
