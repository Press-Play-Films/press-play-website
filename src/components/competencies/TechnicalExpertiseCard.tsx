
import { Award, Users, Server, Zap, Music, Code, Globe, Cloud } from 'lucide-react';
import TechChip from '@/components/TechChip';
import { techUrls } from '@/data/techUrls';

const TechnicalExpertiseCard = () => {
  return (
    <div className="glass-card rounded-2xl p-6 h-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-red-900/30 flex items-center justify-center">
          <div className="w-6 h-6 bg-red-500 rounded-full"></div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Technical Expertise</h2>
          <p className="text-muted-foreground">
            Comprehensive technical understanding and implementation of complex systems and workflows.
          </p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium mb-4">Certifications & Training</h3>
          <div className="flex flex-wrap gap-2">
            <TechChip 
              label="Apple Certified T3 Trainer" 
              url={techUrls["Apple Certified T3 Trainer"]} 
              icon={<Award size={16} />} 
              bgColor="bg-[#A3A3A3]" 
            />
            <TechChip 
              label="Technical Training" 
              url={techUrls["Technical Training"]} 
              icon={<Users size={16} />} 
              bgColor="bg-[#0077B5]" 
            />
            <TechChip 
              label="Professional Equipment Setup" 
              url={techUrls["Professional Equipment Setup"]} 
              icon={<Server size={16} />} 
              bgColor="bg-[#3B82F6]" 
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-4">Systems</h3>
          <div className="flex flex-wrap gap-2">
            <TechChip 
              label="Lighting Systems Installation" 
              url={techUrls["Lighting Systems Installation"]} 
              icon={<Zap size={16} />} 
              bgColor="bg-[#F59E0B]" 
            />
            <TechChip 
              label="Audio Systems Programming" 
              url={techUrls["Audio Systems Programming"]} 
              icon={<Music size={16} />} 
              bgColor="bg-[#8B5CF6]" 
            />
            <TechChip 
              label="System Integration" 
              url={techUrls["System Integration"]} 
              icon={<Code size={16} />} 
              bgColor="bg-[#EC4899]" 
            />
            <TechChip 
              label="Network Configuration" 
              url={techUrls["Network Configuration"]} 
              icon={<Globe size={16} />} 
              bgColor="bg-[#0EA5E9]" 
            />
            <TechChip 
              label="Cloud Infrastructure" 
              url={techUrls["Cloud Infrastructure"]} 
              icon={<Cloud size={16} />} 
              bgColor="bg-[#10B981]" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalExpertiseCard;
