
import { useMemo } from 'react';
import AIIntegrationCard from '@/components/competencies/AIIntegrationCard';
import VideoProductionCard from '@/components/competencies/VideoProductionCard';
import TechnicalExpertiseCard from '@/components/competencies/TechnicalExpertiseCard';
import SalesLeadershipCard from '@/components/competencies/SalesLeadershipCard';

const CoreCompetenciesSection = () => {
  return (
    <section className="py-20 relative" id="skills">
      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Competencies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Delivering exceptional results across multiple disciplines</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <AIIntegrationCard />
          <VideoProductionCard />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TechnicalExpertiseCard />
          <SalesLeadershipCard />
        </div>
      </div>
    </section>
  );
};

export default CoreCompetenciesSection;
