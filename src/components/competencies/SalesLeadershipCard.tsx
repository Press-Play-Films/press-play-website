
import { Award, TrendingUp, Database, Briefcase, Shield } from 'lucide-react';
import TechChip from '@/components/TechChip';
import { techUrls } from '@/data/techUrls';

const SalesLeadershipCard = () => {
  return (
    <div className="glass-card rounded-2xl p-6 h-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-green-900/30 flex items-center justify-center">
          <div className="w-6 h-6 bg-green-500 rounded-full"></div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Sales Leadership</h2>
          <p className="text-muted-foreground">
            Strategic sales leadership with a focus on relationship building and AI-powered CRM implementation.
          </p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium mb-4">Partnerships</h3>
          <div className="flex flex-wrap gap-2">
            <TechChip 
              label="Tony Robbins" 
              url={techUrls["Tony Robbins"]} 
              icon={<Award size={16} />} 
              bgColor="bg-[#3B82F6]" 
            />
            <TechChip 
              label="Jordan Belfort" 
              url={techUrls["Jordan Belfort"]} 
              icon={<TrendingUp size={16} />} 
              bgColor="bg-[#F97316]" 
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-4">Systems</h3>
          <div className="flex flex-wrap gap-2">
            <TechChip 
              label="AI-powered CRM Systems" 
              url={techUrls["AI-powered CRM Systems"]} 
              icon={<Database size={16} />} 
              bgColor="bg-[#0EA5E9]" 
            />
            <TechChip 
              label="Strategic Sales Planning" 
              url={techUrls["Strategic Sales Planning"]} 
              icon={<Briefcase size={16} />} 
              bgColor="bg-[#10B981]" 
            />
            <TechChip 
              label="CRM Implementation" 
              url={techUrls["CRM Implementation"]} 
              icon={<Shield size={16} />} 
              bgColor="bg-[#8B5CF6]" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesLeadershipCard;
