
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AIToolCard from '@/components/AIToolCard';

const AIIntegrationSection = () => {
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
      name: "Manus AI", 
      description: "Specialized AI for creative applications and digital interactions",
      website: "https://manus.im",
      icon: "/lovable-uploads/4da4cf20-5f68-48e7-82f4-f5ae7c43436c.png"
    },
  ];
  
  const buttonStyle = "px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl";
  
  return (
    <section id="ai-integration" className="py-20 relative scroll-mt-24">
      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Integration Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Request a demo for custom-made AI apps, web pages, and agents powered by cutting-edge
            artificial intelligence technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        
        <div className="text-center mt-12">
          <Link to="/contact" className={buttonStyle}>
            Request an A.I. Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIIntegrationSection;
