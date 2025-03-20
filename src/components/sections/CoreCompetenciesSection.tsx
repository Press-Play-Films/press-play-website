
import SkillCard from '@/components/SkillCard';
import TechChip from '@/components/TechChip';
import { useMemo } from 'react';
import { 
  Cloud, 
  Film, 
  Play, 
  Video, 
  Camera, 
  Palette, 
  Aperture, 
  Music, 
  Layers, 
  VideoIcon,
  PenTool,
  Image,
  Smartphone,
  Brain,
  Code,
  Database,
  Server,
  Globe,
  Zap,
  Lightbulb,
  Award,
  TrendingUp,
  Users,
  Briefcase,
  Shield
} from 'lucide-react';

const CoreCompetenciesSection = () => {
  const techUrls = {
    // AI Integration
    "ChatGPT": "https://chat.openai.com/",
    "Anthropic": "https://www.anthropic.com/",
    "Gemini": "https://deepmind.google/technologies/gemini/",
    "NVIDIA": "https://www.nvidia.com/en-us/ai/",
    "Kling 1.6": "https://www.klingai.com/",
    "MCP": "https://modelcontextprotocol.io/introduction",
    "Gumloop": "https://www.gumloop.com/",
    
    // Sales Leadership
    "Tony Robbins": "https://www.tonyrobbins.com/",
    "Jordan Belfort": "https://jordanbelfort.com/",
    "AI-powered CRM Systems": "https://www.salesforce.com/products/einstein/overview/",
    "Strategic Sales Planning": "https://www.salesforce.com/",
    "CRM Implementation": "https://www.salesforce.com/",
    
    // Video Production
    "Adobe Creative Cloud": "https://www.adobe.com/creativecloud.html",
    "Adobe Creative Suite": "https://www.adobe.com/products/creativesuite.html",
    "DaVinci Resolve": "https://www.blackmagicdesign.com/products/davinciresolve",
    "FCP X": "https://www.apple.com/final-cut-pro/",
    "Logic Pro": "https://www.apple.com/logic-pro/",
    "After Effects": "https://www.adobe.com/products/aftereffects.html",
    "Premiere Pro": "https://www.adobe.com/products/premiere.html",
    "Photoshop": "https://www.adobe.com/products/photoshop.html",
    "Illustrator": "https://www.adobe.com/products/illustrator.html",
    "RED": "https://www.red.com/",
    "ARRI": "https://www.arri.com/",
    "Sony": "https://pro.sony/",
    "Canon": "https://www.usa.canon.com/",
    "GoPro": "https://gopro.com/",
    "DJI": "https://www.dji.com/",
    "4k & 8k workflows": "https://www.blackmagicdesign.com/products/blackmagicursa",
    "Color Grading": "https://www.blackmagicdesign.com/products/davinciresolve/color",
    "Motion Graphics": "https://www.adobe.com/products/aftereffects.html",
    "Sound Design": "https://www.apple.com/logic-pro/",
    "VFX Supervision": "https://www.adobe.com/products/aftereffects.html",
    "Multi-camera Production": "https://www.blackmagicdesign.com/products/davinciresolve/edit",
    
    // Technical Expertise
    "Apple Certified T3 Trainer": "https://support.apple.com/apple-training",
    "System Integration": "https://www.apple.com/business/",
    "Technical Training": "https://www.linkedin.com/learning/",
    "Network Configuration": "https://www.cisco.com/",
    "Cloud Infrastructure": "https://aws.amazon.com/",
    "Professional Equipment Setup": "https://pro.sony/",
    "Lighting Systems Installation": "https://www.arri.com/lighting",
    "Audio Systems Programming": "https://www.avid.com/pro-tools"
  };

  const renderAIIntegrationSection = () => (
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

  const renderVideoProductionSection = () => (
    <div className="glass-card rounded-2xl p-6 h-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-yellow-900/30 flex items-center justify-center">
          <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Video Production</h2>
          <p className="text-muted-foreground">
            Professional video production services from concept to completion with industry-leading tools.
          </p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium mb-4">Software Expertise</h3>
          <div className="flex flex-wrap gap-2">
            <TechChip 
              label="Adobe Creative Cloud" 
              url={techUrls["Adobe Creative Cloud"]} 
              icon={<Cloud size={16} />} 
              bgColor="bg-[#9b87f5]" 
            />
            <TechChip 
              label="DaVinci Resolve" 
              url={techUrls["DaVinci Resolve"]} 
              icon={<Palette size={16} />} 
              bgColor="bg-[#0EA5E9]" 
            />
            <TechChip 
              label="FCP X" 
              url={techUrls["FCP X"]} 
              icon={<Film size={16} />} 
              bgColor="bg-[#818CF8]" 
            />
            <TechChip 
              label="Logic Pro" 
              url={techUrls["Logic Pro"]} 
              icon={<Music size={16} />} 
              bgColor="bg-[#34D399]" 
            />
            <TechChip 
              label="After Effects" 
              url={techUrls["After Effects"]} 
              icon={<Play size={16} />} 
              bgColor="bg-[#F472B6]" 
            />
            <TechChip 
              label="Premiere Pro" 
              url={techUrls["Premiere Pro"]} 
              icon={<Video size={16} />} 
              bgColor="bg-[#60A5FA]" 
            />
            <TechChip 
              label="Photoshop" 
              url={techUrls["Photoshop"]} 
              icon={<Image size={16} />} 
              bgColor="bg-[#A78BFA]" 
            />
            <TechChip 
              label="Illustrator" 
              url={techUrls["Illustrator"]} 
              icon={<PenTool size={16} />} 
              bgColor="bg-[#FB923C]" 
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-4">Hardware Expertise</h3>
          <div className="flex flex-wrap gap-2">
            <TechChip 
              label="RED" 
              url={techUrls["RED"]} 
              icon={<Camera size={16} />} 
              bgColor="bg-[#EF4444]" 
            />
            <TechChip 
              label="ARRI" 
              url={techUrls["ARRI"]} 
              icon={<Aperture size={16} />} 
              bgColor="bg-[#10B981]" 
            />
            <TechChip 
              label="Sony" 
              url={techUrls["Sony"]} 
              icon={<VideoIcon size={16} />} 
              bgColor="bg-[#3B82F6]" 
            />
            <TechChip 
              label="Canon" 
              url={techUrls["Canon"]} 
              icon={<Camera size={16} />} 
              bgColor="bg-[#EC4899]" 
            />
            <TechChip 
              label="GoPro" 
              url={techUrls["GoPro"]} 
              icon={<Camera size={16} />} 
              bgColor="bg-[#8B5CF6]" 
            />
            <TechChip 
              label="DJI" 
              url={techUrls["DJI"]} 
              icon={<Smartphone size={16} />} 
              bgColor="bg-[#F472B6]" 
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-4">Specialized Skills</h3>
          <div className="flex flex-wrap gap-2">
            <TechChip 
              label="4k & 8k workflows" 
              url={techUrls["4k & 8k workflows"]} 
              icon={<Layers size={16} />} 
              bgColor="bg-[#0EA5E9]" 
            />
            <TechChip 
              label="Color Grading" 
              url={techUrls["Color Grading"]} 
              icon={<Palette size={16} />} 
              bgColor="bg-[#F97316]" 
            />
            <TechChip 
              label="Motion Graphics" 
              url={techUrls["Motion Graphics"]} 
              icon={<Play size={16} />} 
              bgColor="bg-[#8B5CF6]" 
            />
            <TechChip 
              label="Sound Design" 
              url={techUrls["Sound Design"]} 
              icon={<Music size={16} />} 
              bgColor="bg-[#34D399]" 
            />
            <TechChip 
              label="VFX Supervision" 
              url={techUrls["VFX Supervision"]} 
              icon={<Layers size={16} />} 
              bgColor="bg-[#EC4899]" 
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderTechnicalExpertiseSection = () => (
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

  const renderSalesLeadershipSection = () => (
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
  
  return (
    <section className="py-20 relative" id="skills">
      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Competencies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Delivering exceptional results across multiple disciplines</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {renderAIIntegrationSection()}
          {renderVideoProductionSection()}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderTechnicalExpertiseSection()}
          {renderSalesLeadershipSection()}
        </div>
      </div>
    </section>
  );
};

export default CoreCompetenciesSection;
