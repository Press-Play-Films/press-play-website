
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [glowIntensity, setGlowIntensity] = useState(0);
  const buttonStyle = "px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl";
  
  useEffect(() => {
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

    // Start fade out after 2 seconds
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
    }, 2000);

    return () => {
      clearInterval(buildUpInterval);
      clearTimeout(fadeTimeout);
    };
  }, []);
  
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="container px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in relative inline-block"
            style={{
              textShadow: `0 0 ${glowIntensity * 0.2}px rgba(59, 130, 246, ${glowIntensity / 100})`,
              transition: 'text-shadow 0.3s ease-out'
            }}
          >
            Press Play
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Pioneering the intersection of Sales, Technology, and Entertainment through AI Innovation
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Link to="/portfolio" className={buttonStyle}>
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="#featured-work" className="px-6 py-3 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500/10 font-medium transition-all duration-300 flex items-center">
              Featured Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
