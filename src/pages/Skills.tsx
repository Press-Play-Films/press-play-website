import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import AIToolCard from '@/components/AIToolCard';
import TechChip from '@/components/TechChip';
import { Progress } from '@/components/ui/progress';

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
    icon: "https://seeklogo.com/images/A/anthropic-logo-9882E29032-seeklogo.com.png"
  },
  { 
    name: "Google Gemini", 
    description: "Multimodal AI for advanced reasoning and problem-solving",
    website: "https://deepmind.google/technologies/gemini/",
    icon: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemini_1.max-1200x1200.png"
  },
  { 
    name: "NVIDIA AI", 
    description: "GPU-accelerated AI solutions for high-performance computing",
    website: "https://www.nvidia.com/en-us/ai/",
    icon: "https://cdn.icon-icons.com/icons2/2699/PNG/512/nvidia_logo_icon_169902.png"
  },
  { 
    name: "Runway ML", 
    description: "Creative AI tools for video and content generation",
    website: "https://runwayml.com/",
    icon: "https://getlogovector.com/wp-content/uploads/2021/08/runway-ml-logo-vector.png"
  },
  { 
    name: "DALL-E", 
    description: "AI image generation for creative and commercial applications",
    website: "https://openai.com/dall-e-3",
    icon: "https://seeklogo.com/images/D/dall-e-logo-1104E7A45A-seeklogo.com.png"
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

const Skills = () => {
  return (
    <div className="min-h-screen">
      <ParticleBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-20 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Skills & Expertise</h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              A comprehensive overview of my professional capabilities across multiple disciplines
            </p>
          </div>
        </div>
      </section>
      
      {/* AI Integration Section */}
      <section className="py-16 relative">
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
      
      {/* Sales Leadership Section */}
      <section className="py-16 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 mb-16">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Sales Leadership</h2>
                <p className="text-muted-foreground">
                  Strategic sales leadership with a focus on relationship building and AI-powered CRM implementation.
                </p>
              </div>
            </div>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-medium mb-4">Projects with Industry Leaders</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Projects with Tony Robbins</span>
                    </div>
                    <Progress value={92} className="h-2 bg-secondary" indicatorClassName="bg-green-500" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Projects with Jordan Belfort</span>
                    </div>
                    <Progress value={88} className="h-2 bg-secondary" indicatorClassName="bg-green-500" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Projects with Joe Verde</span>
                    </div>
                    <Progress value={85} className="h-2 bg-secondary" indicatorClassName="bg-green-500" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Projects with Tom Hopkins</span>
                    </div>
                    <Progress value={90} className="h-2 bg-secondary" indicatorClassName="bg-green-500" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">System Implementation</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">AI-powered CRM Systems</span>
                    </div>
                    <Progress value={95} className="h-2 bg-secondary" indicatorClassName="bg-green-500" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">SRM Systems Development</span>
                    </div>
                    <Progress value={87} className="h-2 bg-secondary" indicatorClassName="bg-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Production Section */}
      <section className="py-16 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 mb-16">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-yellow-900/30 flex items-center justify-center flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Video Production</h2>
                <p className="text-muted-foreground">
                  Professional video production services from concept to completion with industry-leading tools.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-4">Software Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  <TechChip label="Adobe Creative Suite" />
                  <TechChip label="DaVinci Resolve" />
                  <TechChip label="FCP X" />
                  <TechChip label="Logic Pro" />
                  <TechChip label="After Effects" />
                  <TechChip label="Premiere Pro" />
                  <TechChip label="Photoshop" />
                  <TechChip label="Illustrator" />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">Hardware Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  <TechChip label="RED" />
                  <TechChip label="ARRI" />
                  <TechChip label="Sony" />
                  <TechChip label="Canon" />
                  <TechChip label="GoPro" />
                  <TechChip label="DJI" />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">Specialized Skills</h3>
                <div className="flex flex-wrap gap-3">
                  <TechChip label="4k & 8k workflows" />
                  <TechChip label="Color Grading" />
                  <TechChip label="Motion Graphics" />
                  <TechChip label="Sound Design" />
                  <TechChip label="VFX Supervision" />
                  <TechChip label="Multi-camera Production" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Expertise Section */}
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
      
      <Footer />
    </div>
  );
};

export default Skills;
