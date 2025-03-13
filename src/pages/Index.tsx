
import { useEffect, useState } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import NavigationTabs from '@/components/sections/NavigationTabs';
import CoreCompetenciesSection from '@/components/sections/CoreCompetenciesSection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection';
import AIIntegrationSection from '@/components/sections/AIIntegrationSection';
import FeatureFilmSection from '@/components/sections/FeatureFilmSection';
import AmbientAudio from '@/components/AmbientAudio';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    setTimeout(() => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 500);
  }, []);

  return (
    <div className={`min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <ParticleBackground />
      <AmbientAudio />
      <div className="relative z-10">
        <Header />
        
        <HeroSection />
        <NavigationTabs />
        <CoreCompetenciesSection />
        <FeaturedProjectsSection />
        <AIIntegrationSection />
        <FeatureFilmSection />
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
