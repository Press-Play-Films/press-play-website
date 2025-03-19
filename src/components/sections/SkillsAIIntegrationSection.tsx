
import React from 'react';
import AIToolCard from '@/components/AIToolCard';

const aiTools = [
  { 
    name: "ChatGPT", 
    description: "Advanced language model integration for natural conversations and content generation",
    website: "https://chat.openai.com/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
  },
  { 
    name: "Anthropic", 
    description: "Constitutional AI for safe and ethical artificial intelligence solutions",
    website: "https://www.anthropic.com/",
    icon: "/lovable-uploads/eb92b588-faee-43c8-b765-6cb751d64c98.png"
  },
  { 
    name: "Google AI Studio", 
    description: "Multimodal AI for advanced reasoning and problem-solving",
    website: "https://aistudio.google.com/",
    icon: "/lovable-uploads/505f1125-ecb4-45a9-8f33-1ccb4a587c34.png"
  },
  { 
    name: "NVIDIA AI", 
    description: "GPU-accelerated AI solutions for high-performance computing",
    website: "https://www.nvidia.com/en-us/ai/",
    icon: "/lovable-uploads/4ce6a67f-9c96-4a16-aa34-adc6a76cdc5d.png"
  },
  { 
    name: "Kling 1.6", 
    description: "Advanced AI platform for multimodal content creation and analysis",
    website: "https://www.klingai.com/",
    icon: "/lovable-uploads/55577ffa-e304-4bcd-801f-f78b94e5c998.png"
  },
  { 
    name: "MCP", 
    description: "Model Context Protocol for enhanced AI interactions and contextual understanding",
    website: "https://modelcontextprotocol.io/introduction",
    icon: "/lovable-uploads/c3a1992b-95b0-43d1-b9af-e88dc859b01d.png"
  },
  { 
    name: "Manus AI", 
    description: "Specialized AI for creative applications and digital interactions",
    website: "https://manus.im",
    icon: "/lovable-uploads/4da4cf20-5f68-48e7-82f4-f5ae7c43436c.png"
  },
  { 
    name: "SORA", 
    description: "Text-to-video AI for dynamic content creation",
    website: "https://openai.com/sora",
    icon: "https://seeklogo.com/images/O/openai-logo-37AC22950B-seeklogo.com.png"
  },
  { 
    name: "MidJourney", 
    description: "AI-powered image generation for creative projects",
    website: "https://www.midjourney.com/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png"
  },
  { 
    name: "Zapier AI", 
    description: "Workflow automation with intelligent processing",
    website: "https://zapier.com/",
    icon: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg"
  },
  { 
    name: "Jasper", 
    description: "AI content generation and optimization platform",
    website: "https://www.jasper.ai/",
    icon: "https://seeklogo.com/images/J/jasper-logo-6C366F0911-seeklogo.com.png"
  },
  { 
    name: "Quantum Computing", 
    description: "Next-generation computing for advanced AI applications",
    website: "https://research.ibm.com/quantum-computing/",
    icon: "https://seeklogo.com/images/I/ibm-quantum-logo-34D60900FE-seeklogo.com.png"
  }
];

const SkillsAIIntegrationSection = () => {
  return (
    <section className="py-16 relative" id="ai-integration">
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 mb-16">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">AI Integration</h2>
              <p className="text-muted-foreground">
                Implementing cutting-edge AI solutions to enhance business operations and creative workflows.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiTools.map((tool, index) => (
              <AIToolCard
                key={index}
                name={tool.name}
                description={tool.description}
                icon={tool.icon}
                website={tool.website}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAIIntegrationSection;
export { aiTools };
