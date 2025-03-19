
import React from 'react';
import TechChip from '@/components/TechChip';

const TechnicalExpertiseSection = () => {
  return (
    <section className="py-16 relative">
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-full bg-red-900/30 flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Technical Expertise</h2>
              <p className="text-muted-foreground">
                Comprehensive technical understanding and implementation of complex systems and workflows.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-4">Certifications & Training</h3>
              <div className="flex flex-wrap gap-3">
                <TechChip label="Apple Certified T3 Trainer" />
                <TechChip label="Technical Training" />
                <TechChip label="Professional Equipment Setup" />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Systems</h3>
              <div className="flex flex-wrap gap-3">
                <TechChip label="Lighting Systems Installation" />
                <TechChip label="Audio Systems Programming" />
                <TechChip label="System Integration" />
                <TechChip label="Network Configuration" />
                <TechChip label="Cloud Infrastructure" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertiseSection;
