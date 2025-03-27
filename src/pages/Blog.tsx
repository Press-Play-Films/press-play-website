
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

const Blog = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Set a timeout to ensure CSS is properly loaded
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <ParticleBackground />
      <Header />
      
      <div className="relative z-10 pt-32 pb-20">
        <div className="container px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Blog</h1>
            <p className="text-xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Thoughts, stories and ideas about technology and business
            </p>
            
            <div className="space-y-12">
              <article className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4">Getting Started with AI Integration</h2>
                <p className="text-muted-foreground mb-4">Posted on April 30, 2024</p>
                <p className="mb-4">
                  Integrating AI into existing workflows can seem daunting at first, but with the right approach,
                  it can revolutionize your business processes and boost productivity.
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300">Read more →</a>
              </article>
              
              <article className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4">The Future of Video Production</h2>
                <p className="text-muted-foreground mb-4">Posted on April 15, 2024</p>
                <p className="mb-4">
                  The landscape of video production is rapidly evolving with AI tools and remote workflows
                  becoming more prevalent in the industry.
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300">Read more →</a>
              </article>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
