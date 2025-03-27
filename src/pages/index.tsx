
import { useEffect, useState } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import NavigationTabs from '@/components/sections/NavigationTabs';
import CoreCompetenciesSection from '@/components/sections/CoreCompetenciesSection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection';
import AIIntegrationSection from '@/components/sections/AIIntegrationSection';
import SalesLeadershipSection from '@/components/sections/SalesLeadershipSection';
import AmbientAudio from '@/components/AmbientAudio';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Set a timeout to ensure CSS is properly loaded - increased from 100ms to 800ms
    const timer = setTimeout(() => {
      setIsLoaded(true);
      console.log('[Index] Page marked as loaded');
      
      // Verify glass box elements
      const titleBox = document.querySelector('.title-glass-box');
      const subtitleBox = document.querySelector('.subtitle-glass-box');
      console.log('[Index] Glass boxes present:', { 
        titleBox: !!titleBox, 
        subtitleBox: !!subtitleBox,
        buttons: document.querySelectorAll('.chrome-button-premium, .chrome-tab').length
      });
      
      // Force a reflow
      document.body.offsetHeight;
    }, 800);
    
    // Handle hash navigation after page load
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 800); // Increased from 500ms
    }
    
    return () => clearTimeout(timer);
  }, []);

  // Add event listener for when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className={`min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <ParticleBackground />
      <AmbientAudio />
      <Header />
      
      <div className="relative z-10 pt-24">
        <HeroSection />
        <NavigationTabs />
        <CoreCompetenciesSection />
        <FeaturedProjectsSection />
        <AIIntegrationSection />
        <SalesLeadershipSection />
        
        {/* Blog CTA */}
        <section className="py-16 relative">
          <div className="container px-6 relative z-10">
            <div className="max-w-3xl mx-auto glass-card rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4 section-title-gradient">Check Out My Blog</h2>
              <p className="text-xl mb-8">Read my thoughts and insights on technology, AI, and business</p>
              <Link to="/blog" className="chrome-button-premium">
                Visit Blog
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
