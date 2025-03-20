
import { Brain, Lightbulb, Globe, Zap, Database, Code, Server } from 'lucide-react';
import TechChip from '@/components/TechChip';
import { techUrls } from '@/data/techUrls';

const AIIntegrationCard = () => {
  return (
    <div className="glass-card rounded-2xl p-6 h-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center">
          <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">AI Integration</h2>
          <p className="text-muted-foreground">
            Implementing cutting-edge AI solutions to enhance business operations and creative workflows.
          </p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium mb-4">AI Platforms</h3>
          <div className="flex flex-wrap gap-2">
            <TechChip 
              label="ChatGPT" 
              url={techUrls["ChatGPT"]} 
              icon={<Brain size={16} />} 
              bgColor="bg-[#74aa9c]" 
            />
            <TechChip 
              label="Anthropic" 
              url={techUrls["Anthropic"]} 
              icon={<Lightbulb size={16} />} 
              bgColor="bg-[#5436DA]" 
            />
            <TechChip 
              label="Gemini" 
              url={techUrls["Gemini"]} 
              icon={<Globe size={16} />} 
              bgColor="bg-[#1a73e8]" 
            />
            <TechChip 
              label="NVIDIA" 
              url={techUrls["NVIDIA"]} 
              icon={<Zap size={16} />} 
              bgColor="bg-[#76b900]" 
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-4">Integration Tools</h3>
          <div className="flex flex-wrap gap-2">
            <TechChip 
              label="Kling 1.6" 
              url={techUrls["Kling 1.6"]} 
              icon={<Database size={16} />} 
              bgColor="bg-[#8B5CF6]" 
            />
            <TechChip 
              label="MCP" 
              url={techUrls["MCP"]} 
              icon={<Code size={16} />} 
              bgColor="bg-[#EC4899]" 
            />
            <TechChip 
              label="Gumloop" 
              url={techUrls["Gumloop"]} 
              icon={<Server size={16} />} 
              bgColor="bg-[#F97316]" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIIntegrationCard;
