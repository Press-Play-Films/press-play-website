import SkillCard from '@/components/SkillCard';
import TechChip from '@/components/TechChip';
import { useMemo } from 'react';

const CoreCompetenciesSection = () => {
  const techUrls = {
    "ChatGPT": "https://chat.openai.com/",
    "Anthropic": "https://www.anthropic.com/",
    "Gemini": "https://deepmind.google/technologies/gemini/",
    "NVIDIA": "https://www.nvidia.com/en-us/ai/",
    "Kling 1.6": "https://www.klingai.com/",
    "MCP": "https://modelcontextprotocol.io/introduction",
    "Gumloop": "https://www.gumloop.com/",
    
    "Projects with Tony Robbins": "https://www.tonyrobbins.com/",
    "Projects with Jordan Belfort": "https://jordanbelfort.com/",
    "AI-powered CRM Systems": "https://www.salesforce.com/products/einstein/overview/",
    
    "DaVinci Resolve": "https://www.blackmagicdesign.com/products/davinciresolve",
    "FCP X": "https://www.apple.com/final-cut-pro/",
    "RED": "https://www.red.com/",
    "ARRI": "https://www.arri.com/",
    "4k & 8k workflows": "https://www.blackmagicdesign.com/products/blackmagicursa",
    
    "Apple Certified T3 Trainer": "https://support.apple.com/apple-training",
    "System Integration": "https://www.apple.com/business/",
    "Technical Training": "https://www.linkedin.com/learning/"
  };
  
  const skillCards = useMemo(() => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <SkillCard 
        title="AI Integration" 
        icon={<div className="w-6 h-6 bg-blue-500 rounded-full"></div>}
        color="bg-blue-900/30"
        id="ai-integration"
        linkTo="#ai-integration"
      >
        <p className="mb-4">Implementing cutting-edge AI solutions to enhance business operations and creative workflows.</p>
        <div className="flex flex-wrap">
          <TechChip label="ChatGPT" url={techUrls["ChatGPT"]} />
          <TechChip label="Anthropic" url={techUrls["Anthropic"]} />
          <TechChip label="Gemini" url={techUrls["Gemini"]} />
          <TechChip label="NVIDIA" url={techUrls["NVIDIA"]} />
          <TechChip label="Kling 1.6" url={techUrls["Kling 1.6"]} />
          <TechChip label="MCP" url={techUrls["MCP"]} />
          <TechChip label="Gumloop" url={techUrls["Gumloop"]} />
        </div>
      </SkillCard>
      
      <SkillCard 
        title="Video Production" 
        icon={<div className="w-6 h-6 bg-yellow-500 rounded-full"></div>}
        color="bg-yellow-900/30"
        id="video-production"
        linkTo="#featured-work"
      >
        <p className="mb-4">Professional video production services from concept to completion with industry-leading tools.</p>
        <div className="flex flex-wrap">
          <TechChip label="DaVinci Resolve" url={techUrls["DaVinci Resolve"]} />
          <TechChip label="FCP X" url={techUrls["FCP X"]} />
          <TechChip label="RED" url={techUrls["RED"]} />
          <TechChip label="ARRI" url={techUrls["ARRI"]} />
          <TechChip label="4k & 8k workflows" url={techUrls["4k & 8k workflows"]} />
        </div>
      </SkillCard>
      
      <SkillCard 
        title="Technical Expertise" 
        icon={<div className="w-6 h-6 bg-red-500 rounded-full"></div>}
        color="bg-red-900/30"
        id="technical-expertise"
        linkTo="#technical-expertise"
      >
        <p className="mb-4">Comprehensive technical understanding and implementation of complex systems and workflows.</p>
        <div className="flex flex-wrap">
          <TechChip label="Apple Certified T3 Trainer" url={techUrls["Apple Certified T3 Trainer"]} />
          <TechChip label="System Integration" url={techUrls["System Integration"]} />
          <TechChip label="Technical Training" url={techUrls["Technical Training"]} />
        </div>
      </SkillCard>
      
      <SkillCard 
        title="Sales Leadership" 
        icon={<div className="w-6 h-6 bg-green-500 rounded-full"></div>}
        color="bg-green-900/30"
        id="sales-leadership"
        linkTo="#sales-leadership"
      >
        <p className="mb-4">Strategic sales leadership with a focus on relationship building and AI-powered CRM implementation.</p>
        <div className="flex flex-wrap">
          <TechChip label="Projects with Tony Robbins" url={techUrls["Projects with Tony Robbins"]} />
          <TechChip label="Projects with Jordan Belfort" url={techUrls["Projects with Jordan Belfort"]} />
          <TechChip label="AI-powered CRM Systems" url={techUrls["AI-powered CRM Systems"]} />
        </div>
      </SkillCard>
    </div>
  ), []);
  
  return (
    <section className="py-20 relative" id="skills">
      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Competencies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Delivering exceptional results across multiple disciplines</p>
        </div>
        
        {skillCards}
      </div>
    </section>
  );
};

export default CoreCompetenciesSection;
