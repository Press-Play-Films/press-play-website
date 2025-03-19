
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import SkillsHeroSection from '@/components/sections/SkillsHeroSection';
import SkillsAIIntegrationSection from '@/components/sections/SkillsAIIntegrationSection';
import SalesLeadershipSkillsSection from '@/components/sections/SalesLeadershipSkillsSection';
import VideoProductionSection from '@/components/sections/VideoProductionSection';
import TechnicalExpertiseSection from '@/components/sections/TechnicalExpertiseSection';

const Skills = () => {
  return (
    <div className="min-h-screen">
      <ParticleBackground />
      <Header />
      
      {/* Hero Section */}
      <SkillsHeroSection />
      
      {/* AI Integration Section */}
      <SkillsAIIntegrationSection />
      
      {/* Sales Leadership Section */}
      <SalesLeadershipSkillsSection />
      
      {/* Video Production Section */}
      <VideoProductionSection />
      
      {/* Technical Expertise Section */}
      <TechnicalExpertiseSection />
      
      <Footer />
    </div>
  );
};

export default Skills;
