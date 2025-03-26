
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const HeroSection = () => {
  const [glowIntensity, setGlowIntensity] = useState(0);
  const mounted = useRef(false);
  
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    
    console.log('HeroSection mounted - version 2025.03.29.2'); // Updated version
    
    // Track this session in sessionStorage
    const sessionKey = `hero_section_loaded_${window.sessionId || Date.now()}`;
    sessionStorage.setItem(sessionKey, 'true');
    
    // Apply force gradients on mount
    const applyGradients = () => {
      const style = document.createElement('style');
      style.innerHTML = `
        .hero-title, .hero-subtitle {
          background: linear-gradient(90deg, #FFFFFF, #E8E8E9 50%, #C4C4C8) !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
        }
        .hero-title {
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.2) !important;
        }
        .hero-subtitle {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.15) !important;
        }
      `;
      document.head.appendChild(style);
    };
    
    // Apply immediately and after delay to ensure they're applied
    applyGradients();
    setTimeout(applyGradients, 100);
    setTimeout(applyGradients, 500);
    
    // Build up the glow effect
    const buildUpInterval = setInterval(() => {
      setGlowIntensity(prev => {
        if (prev >= 100) {
          clearInterval(buildUpInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    // Start fade out after 4 seconds
    const fadeTimeout = setTimeout(() => {
      const fadeOutInterval = setInterval(() => {
        setGlowIntensity(prev => {
          if (prev <= 0) {
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
      <div 
        className="absolute inset-0 opacity-50" 
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 70%)',
          zIndex: 5
        }}
      />
      <div className="container px-6 relative" style={{ zIndex: 10 }}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className="text-5xl md:text-7xl font-cinzel font-bold force-gradient hero-title-gradient hero-title mb-6"
            style={{
              textShadow: `0 0 ${glowIntensity * 0.3}px rgba(59, 130, 246, ${glowIntensity / 90})`,
              transition: 'text-shadow 0.3s ease-out'
            }}
          >
            Press Play
          </h1>
          <p 
            className="text-xl md:text-2xl text-white/90 animate-fade-in force-gradient hero-subtitle mb-10"
            style={{ 
              animationDelay: "0.1s",
              textShadow: `0 0 ${glowIntensity * 0.15}px rgba(59, 130, 246, ${glowIntensity / 130})` 
            }}
          >
            Pioneering the intersection of Sales, Technology, and Entertainment through AI Innovation
          </p>
          <div className="flex justify-center gap-4 mt-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Link 
              to="/portfolio" 
              className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/#featured-work" 
              className="border border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500/10 transition-colors shadow-[0_0_10px_rgba(59,130,246,0.1)]"
            >
              Featured Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
