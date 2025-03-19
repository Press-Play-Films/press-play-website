
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import VideoCard from '@/components/VideoCard';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

type Category = 'all' | 'video' | 'ai' | 'sales';

const videoData = [
  {
    id: 1,
    title: "Fuse Nightclub Promo",
    description: "High-energy promotional video showcasing nightlife atmosphere and entertainment.",
    thumbnail: "https://i.vimeocdn.com/video/438394212-1fff1408539b7be4dec8af951c955b8a2aec415a67c3bb895d54fb5f2777c9fd-d_640",
    videoUrl: "https://player.vimeo.com/video/67933840?h=a5786d80c4&title=0&byline=0&portrait=0",
    category: "video"
  },
  {
    id: 2,
    title: "ODESSA",
    description: "A single-camera, 4-location, music video produced for the Starkillers.",
    thumbnail: "https://i.vimeocdn.com/video/23430484-dbbe44ee8a4c9c81f3da8d6b0e9df5fc23a31de0d055b454b2d3badbe1d12f24-d_640",
    videoUrl: "https://player.vimeo.com/video/6174101?h=b1777bbf85&title=0&byline=0&portrait=0",
    category: "video"
  },
  {
    id: 3,
    title: "The Law of Nines",
    description: "A short film based on an excerpt from N.Y. Times best-selling author Terry Goodkind to promote his latest book.",
    thumbnail: "https://i.vimeocdn.com/video/39599292-18af5a5e46bd56ed74cbe3b43a90beb73b6bcf4d3c7bfdec43c89989c99cfa00-d_640",
    videoUrl: "https://player.vimeo.com/video/8228797?h=b3f21e6126&title=0&byline=0&portrait=0",
    category: "video"
  },
  {
    id: 4,
    title: "Get Your Hands On Me",
    description: "A music video produced for the artist Samantha Alexis.",
    thumbnail: "https://i.vimeocdn.com/video/469706233-5a3cbeaac4e2da649beddd9fb778373a6d7482203b73b064d8c14c10bf84e80e-d_640",
    videoUrl: "https://player.vimeo.com/video/89813382?h=faa8e1acd2&title=0&byline=0&portrait=0",
    category: "video"
  },
  {
    id: 5,
    title: "DJ Promo",
    description: "Promotional video featuring dynamic visuals and energetic music tracks.",
    thumbnail: "https://i.vimeocdn.com/video/466568818-68ce2441b31f5b8a8f9811f1d1dcebe0acd1b1a3bedc338b10cbe72b94dea62e-d_640",
    videoUrl: "https://player.vimeo.com/video/86253787?h=6b6e33fbfa&title=0&byline=0&portrait=0",
    category: "video"
  },
  {
    id: 6,
    title: "Commercial Project",
    description: "Brand video showcasing products with professional lighting and cinematography.",
    thumbnail: "https://i.vimeocdn.com/video/118188204-3c1fd052d07727e8ada50274f0bbd928b5d271b2dbcbd2323b1ca8554c8fefb4-d_640",
    videoUrl: "https://player.vimeo.com/video/18550227?h=d2399a7f11&title=0&byline=0&portrait=0",
    category: "video"
  },
  {
    id: 7,
    title: "Music Series Episode",
    description: "Professional music performance captured with multiple camera angles.",
    thumbnail: "https://i.vimeocdn.com/video/131842263-89a86c9e9641eeff4ce5bf9f6f75b7d0b0fc4f5d3c712e71ca78681436434bfc-d_640",
    videoUrl: "https://player.vimeo.com/video/21007773?h=f6a6e83793&title=0&byline=0&portrait=0",
    category: "video"
  },
  {
    id: 8,
    title: "Corporate Training",
    description: "Professional training video demonstrating complex concepts and procedures.",
    thumbnail: "https://i.vimeocdn.com/video/83525259-aaa876bdc8cce4d02d52e8700e5cbecd1fc75c2df4ed639dda5b8848f73a3938-d_640",
    videoUrl: "https://player.vimeo.com/video/13875773?h=8118e61bc5&title=0&byline=0&portrait=0",
    category: "video"
  },
  {
    id: 9,
    title: "Dani",
    description: "A clip from my film A Different Corner, introducing the character of Dani.",
    thumbnail: "https://i.vimeocdn.com/video/909729335-4f03a950f0d6d3010a96fae7a7146ae7a2a8a48964a4735be97bb01e8e6ba492-d_640",
    videoUrl: "https://player.vimeo.com/video/459239963?h=5f55f37829&title=0&byline=0&portrait=0",
    category: "video"
  },
  {
    id: 10,
    title: "NEST",
    description: "Short film exploring themes of connection and technology in modern society.",
    thumbnail: "https://i.vimeocdn.com/video/135485248-5aa36d74d1ed6c9f314d0c4a86eb9ef98ddabe9d2b370070d3db8addd0d7b6d8-d_640",
    videoUrl: "https://player.vimeo.com/video/21217448?h=d80e8ebad4&title=0&byline=0&portrait=0",
    category: "video"
  },
  {
    id: 11,
    title: "AI Data Dashboard",
    description: "Custom AI analytics dashboard for real-time business insights.",
    thumbnail: "/lovable-uploads/67a4cd34-e6ba-4080-a65d-938b87eaf0a3.png",
    videoUrl: "",
    category: "ai"
  },
  {
    id: 12,
    title: "Sales Automation Platform",
    description: "AI-powered sales automation platform for lead generation and conversion.",
    thumbnail: "/lovable-uploads/7e8d83e6-f84c-45eb-a959-ec76b81a3a73.png",
    videoUrl: "",
    category: "sales"
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredProjects = videoData.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <div className="min-h-screen">
      <ParticleBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-20 relative">
        <div className="container px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Portfolio</h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Explore my collection of professional work across video production, AI integration, and sales projects
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-10 relative">
        <div className="container px-6 relative z-10">
          <div className="flex justify-center mb-10">
            <div className="flex flex-wrap justify-center gap-2 bg-secondary/50 backdrop-blur-md p-1 rounded-full">
              <button 
                className={`px-6 py-2 rounded-full transition-colors ${activeCategory === 'all' ? 'bg-primary text-white' : 'hover:bg-secondary'}`}
                onClick={() => setActiveCategory('all')}
              >
                All
              </button>
              <button 
                className={`px-6 py-2 rounded-full transition-colors ${activeCategory === 'video' ? 'bg-primary text-white' : 'hover:bg-secondary'}`}
                onClick={() => setActiveCategory('video')}
              >
                Video Production
              </button>
              <button 
                className={`px-6 py-2 rounded-full transition-colors ${activeCategory === 'ai' ? 'bg-primary text-white' : 'hover:bg-secondary'}`}
                onClick={() => setActiveCategory('ai')}
              >
                AI Projects
              </button>
              <button 
                className={`px-6 py-2 rounded-full transition-colors ${activeCategory === 'sales' ? 'bg-primary text-white' : 'hover:bg-secondary'}`}
                onClick={() => setActiveCategory('sales')}
              >
                Sales
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <VideoCard
                key={project.id}
                title={project.title}
                description={project.description}
                thumbnail={project.thumbnail}
                videoUrl={project.videoUrl || ""}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass-card rounded-3xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Have a project in mind? Reach out to discuss how we can bring your vision to life.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-secondary/20 border-none">
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <h3 className="font-medium mb-2">Email</h3>
                    <a href="mailto:info@pressp.vip" className="text-muted-foreground hover:text-primary transition-colors">
                      info@pressp.vip
                    </a>
                  </CardContent>
                </Card>
                
                <Card className="bg-secondary/20 border-none">
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <h3 className="font-medium mb-2">Phone</h3>
                    <a href="tel:+17026021277" className="text-muted-foreground hover:text-primary transition-colors">
                      (702) 602-1277
                    </a>
                  </CardContent>
                </Card>
                
                <Card className="bg-secondary/20 border-none">
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <h3 className="font-medium mb-2">Location</h3>
                    <a 
                      href="https://maps.google.com/?q=Las+Vegas+NV" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Las Vegas, NV
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
