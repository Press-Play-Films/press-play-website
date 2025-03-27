
import { useState, useEffect } from 'react';

const PortfolioHeroSection = () => {
  const [glowIntensity, setGlowIntensity] = useState(0);
  
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip animations for users who prefer reduced motion
      setGlowIntensity(40); // Set a moderate static glow
      return;
    }
    
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
    };
  }, []);

  return (
    <section 
      className="pt-32 pb-20 md:pt-40 md:pb-20 relative" 
      aria-labelledby="portfolio-title"
    >
      <div className="container px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className="inline-block rounded-lg px-6 py-3 backdrop-blur-sm bg-white/15 border border-white/25 shadow-[0_4px_15px_rgba(0,0,0,0.35)]"
            role="presentation"
          >
            <h1 
              id="portfolio-title"
              className="text-4xl md:text-6xl font-trajan font-bold animate-fade-in section-title-gradient"
              style={{
                textShadow: `0 0 ${glowIntensity * 0.3}px rgba(59, 130, 246, ${glowIntensity / 90})`,
                transition: 'text-shadow 0.3s ease-out'
              }}
            >
              Portfolio
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mt-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Explore my collection of professional work across video production, AI integration, and sales projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHeroSection;
