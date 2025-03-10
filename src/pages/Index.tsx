import { useEffect, useState, useMemo } from 'react';
import { ArrowRight, Play, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ParticleBackground from '@/components/ParticleBackground';
import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import SkillCard from '@/components/SkillCard';
import TechChip from '@/components/TechChip';
import Footer from '@/components/Footer';
import AIToolCard from '@/components/AIToolCard';
import ContactForm from '@/components/ContactForm';

const videoData = [
  {
    id: 1,
    title: "Fuse Nightclub Promo",
    description: "High-energy promotional video showcasing nightlife atmosphere and entertainment.",
    thumbnail: "https://i.vimeocdn.com/video/438394212-1fff1408539b7be4dec8af951c955b8a2aec415a67c3bb895d54fb5f2777c9fd-d_640",
    videoUrl: "https://player.vimeo.com/video/67933840?h=a5786d80c4&title=0&byline=0&portrait=0"
  },
  {
    id: 2,
    title: "ODESSA",
    description: "A single-camera, 4-location, music video produced for the Starkillers.",
    thumbnail: "https://i.vimeocdn.com/video/23430484-dbbe44ee8a4c9c81f3da8d6b0e9df5fc23a31de0d055b454b2d3badbe1d12f24-d_640",
    videoUrl: "https://player.vimeo.com/video/6174101?h=b1777bbf85&title=0&byline=0&portrait=0"
  },
  {
    id: 3,
    title: "The Law of Nines",
    description: "A short film based on an excerpt from N.Y. Times best-selling author Terry Goodkind to promote his latest book.",
    thumbnail: "https://i.vimeocdn.com/video/39599292-18af5a5e46bd56ed74cbe3b43a90beb73b6bcf4d3c7bfdec43c89989c99cfa00-d_640",
    videoUrl: "https://player.vimeo.com/video/8228797?h=b3f21e6126&title=0&byline=0&portrait=0"
  },
  {
    id: 4,
    title: "Get your Hands on Me",
    description: "A music video produced for the artist Samantha Alexis.",
    thumbnail: "https://i.vimeocdn.com/video/469706233-5a3cbeaac4e2da649beddd9fb778373a6d7482203b73b064d8c14c10bf84e80e-d_640",
    videoUrl: "https://player.vimeo.com/video/89813382?h=faa8e1acd2&title=0&byline=0&portrait=0"
  }
];

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
];

const salesLeaders = [
  {
    name: "Tony Robbins",
    description: "Collaboration on strategic sales initiatives and performance coaching programs",
    website: "https://www.tonyrobbins.com/",
    icon: "/lovable-uploads/d692a2c6-2ad2-4e20-ae0d-b32fed6d7c15.png"
  },
  {
    name: "Jordan Belfort",
    description: "Implementation of the Straight Line Persuasion System for sales teams",
    website: "https://jordanbelfort.com/",
    icon: "/lovable-uploads/5f3d2a9c-6e9c-4361-bb77-58ee71e41cbb.png"
  }
];

const techUrls = {
  "ChatGPT": "https://chat.openai.com/",
  "Anthropic": "https://www.anthropic.com/",
  "Gemini": "https://deepmind.google/technologies/gemini/",
  "NVIDIA": "https://www.nvidia.com/en-us/ai/",
  "Runway ML": "https://runwayml.com/",
  
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

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  
  const skillCards = useMemo(() => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <SkillCard 
        title="AI Integration" 
        icon={<div className="w-6 h-6 bg-blue-500 rounded-full"></div>}
        color="bg-blue-900/30"
        id="ai-integration"
      >
        <p className="mb-4">Implementing cutting-edge AI solutions to enhance business operations and creative workflows.</p>
        <div className="flex flex-wrap">
          <TechChip label="ChatGPT" url={techUrls["ChatGPT"]} />
          <TechChip label="Anthropic" url={techUrls["Anthropic"]} />
          <TechChip label="Gemini" url={techUrls["Gemini"]} />
          <TechChip label="NVIDIA" url={techUrls["NVIDIA"]} />
          <TechChip label="Runway ML" url={techUrls["Runway ML"]} />
        </div>
      </SkillCard>
      
      <SkillCard 
        title="Sales Leadership" 
        icon={<div className="w-6 h-6 bg-green-500 rounded-full"></div>}
        color="bg-green-900/30"
        id="sales-leadership"
      >
        <p className="mb-4">Strategic sales leadership with a focus on relationship building and AI-powered CRM implementation.</p>
        <div className="flex flex-wrap">
          <TechChip label="Projects with Tony Robbins" url={techUrls["Projects with Tony Robbins"]} />
          <TechChip label="Projects with Jordan Belfort" url={techUrls["Projects with Jordan Belfort"]} />
          <TechChip label="AI-powered CRM Systems" url={techUrls["AI-powered CRM Systems"]} />
        </div>
      </SkillCard>
      
      <SkillCard 
        title="Video Production" 
        icon={<div className="w-6 h-6 bg-yellow-500 rounded-full"></div>}
        color="bg-yellow-900/30"
        id="video-production"
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
      >
        <p className="mb-4">Comprehensive technical understanding and implementation of complex systems and workflows.</p>
        <div className="flex flex-wrap">
          <TechChip label="Apple Certified T3 Trainer" url={techUrls["Apple Certified T3 Trainer"]} />
          <TechChip label="System Integration" url={techUrls["System Integration"]} />
          <TechChip label="Technical Training" url={techUrls["Technical Training"]} />
        </div>
      </SkillCard>
    </div>
  ), []);
  
  const videoCards = useMemo(() => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {videoData.map((video) => (
        <VideoCard
          key={video.id}
          title={video.title}
          description={video.description}
          thumbnail={video.thumbnail}
          videoUrl={video.videoUrl}
        />
      ))}
    </div>
  ), []);
  
  useEffect(() => {
    setIsLoaded(true);
    
    setTimeout(() => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 500);
  }, []);

  const handleContactFormSuccess = () => {
    setShowTrailer(true);
    // Scroll to trailer
    setTimeout(() => {
      const trailerElement = document.getElementById('feature-film-trailer');
      if (trailerElement) {
        trailerElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const buttonStyle = "px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl";

  return (
    <div className={`min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <ParticleBackground />
      <Header />
      
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="container px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Andrew Freeman
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Pioneering the intersection of Sales, Technology, and Entertainment through AI Innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Link to="/portfolio" className={buttonStyle}>
                View Full Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="#featured-work" className="px-6 py-3 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500/10 font-medium transition-all duration-300 flex items-center">
                Featured Work
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-8 relative">
        <div className="container px-6 relative z-10">
          <div className="flex flex-wrap justify-center gap-4">
            <HashLink smooth to="#ai-integration" className="px-4 py-2 rounded-full bg-blue-900/30 hover:bg-blue-500/30 transition-colors">
              AI Integration
            </HashLink>
            <HashLink smooth to="#sales-leadership" className="px-4 py-2 rounded-full bg-green-900/30 hover:bg-green-500/30 transition-colors">
              Sales Leadership
            </HashLink>
            <HashLink smooth to="#video-production" className="px-4 py-2 rounded-full bg-yellow-900/30 hover:bg-yellow-500/30 transition-colors">
              Video Production
            </HashLink>
            <HashLink smooth to="#technical-expertise" className="px-4 py-2 rounded-full bg-red-900/30 hover:bg-red-500/30 transition-colors">
              Technical Expertise
            </HashLink>
          </div>
        </div>
      </section>
      
      <section className="py-20 relative" id="skills">
        <div className="container px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Competencies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Delivering exceptional results across multiple disciplines</p>
          </div>
          
          {skillCards}
        </div>
      </section>
      
      <section id="featured-work" className="py-20 relative">
        <div className="container px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A selection of my professional work across various industries</p>
          </div>
          
          <div className="flex justify-center mb-10">
            <div className="flex gap-2 bg-secondary/50 backdrop-blur-md p-1 rounded-full">
              <button className="px-6 py-2 rounded-full bg-primary text-white">All</button>
              <button className="px-6 py-2 rounded-full hover:bg-secondary transition-colors">Video Production</button>
              <button className="px-6 py-2 rounded-full hover:bg-secondary transition-colors">AI Projects</button>
              <button className="px-6 py-2 rounded-full hover:bg-secondary transition-colors">Sales</button>
            </div>
          </div>
          
          {videoCards}
          
          <div className="text-center mt-12">
            <Link to="/portfolio" className={buttonStyle}>
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 relative">
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
      
      <section className="py-20 relative">
        <div className="container px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sales Leadership Partnerships</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Implementing cutting-edge sales methodologies in partnership with industry leaders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {salesLeaders.map((leader, index) => (
              <AIToolCard 
                key={index}
                name={leader.name}
                description={leader.description}
                icon={leader.icon}
                website={leader.website}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/skills" className={buttonStyle}>
              View All Partnerships
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 relative overflow-hidden">
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass-card rounded-3xl overflow-hidden">
            <div className="relative p-8 md:p-12">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 z-[-1]"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">A Different Corner</h2>
                  <p className="text-muted-foreground mb-6">
                    Get exclusive access to my feature film "A Different Corner" by signing up for updates.
                  </p>
                  
                  <div className="glass-card rounded-xl p-4 mb-6 border border-blue-500/20">
                    <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="font-medium">info@andrewfreeman.io</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <p className="font-medium">(310) 555-7890</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Location</p>
                          <p className="font-medium">Los Angeles, CA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {!showTrailer && (
                    <button 
                      onClick={() => setShowTrailer(true)}
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      <Play className="h-5 w-5" />
                      Watch Trailer
                    </button>
                  )}
                </div>
                
                <div>
                  {showTrailer ? (
                    <div id="feature-film-trailer" className="rounded-xl overflow-hidden">
                      <div style={{padding: '56.25% 0 0 0', position: 'relative'}}>
                        <iframe 
                          src="https://player.vimeo.com/video/21007773?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                          frameBorder="0" 
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} 
                          title="A Different Corner (Extended) Trailer"
                        ></iframe>
                      </div>
                      <script src="https://player.vimeo.com/api/player.js"></script>
                    </div>
                  ) : (
                    <div className="rounded-xl overflow-hidden">
                      <div className="w-full aspect-video bg-black/50 rounded-xl flex flex-col items-center justify-center">
                        <div className="w-20 h-20 mb-6 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-medium mb-2">Sign up to access</h3>
                        <p className="text-muted-foreground text-center max-w-xs">
                          Fill out the contact form below to get exclusive access to the trailer
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">Get Film Updates</h3>
                    <ContactForm onSubmitSuccess={handleContactFormSuccess} />
                  </div>
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

export default Index;
