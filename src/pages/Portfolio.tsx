
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import PortfolioHeroSection from '@/components/portfolio/PortfolioHeroSection';
import CategoryFilter from '@/components/portfolio/CategoryFilter';
import ProjectList from '@/components/portfolio/ProjectList';
import { portfolioData, type ProjectCategory } from '@/data/portfolioData';
import { Helmet } from 'react-helmet-async';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Mark as loaded for fade-in animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = portfolioData.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  );

  // This function is required by the CategoryFilter component interface
  // but doesn't need to do anything in this context since we're already
  // showing all videos when the category is selected
  const showAllVideos = () => {};

  return (
    <div className={`min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {/* Add SEO metadata */}
      <Helmet>
        <title>Portfolio | Andrew Freeman</title>
        <meta name="description" content="Explore Andrew Freeman's portfolio of professional work across video production, AI integration, and sales leadership projects." />
        <meta property="og:title" content="Andrew Freeman's Portfolio" />
        <meta property="og:description" content="View my collection of professional work including video production, AI integration, and sales projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/portfolio" />
      </Helmet>
      
      <ParticleBackground />
      <Header />
      
      {/* Hero Section */}
      <PortfolioHeroSection />
      
      {/* Portfolio Section */}
      <section 
        className="py-10 relative" 
        aria-labelledby="portfolio-projects"
      >
        <div className="container px-6 relative z-10">
          <h2 id="portfolio-projects" className="sr-only">Portfolio Projects</h2>
          
          <CategoryFilter 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
            showAllVideos={showAllVideos}
          />
          
          <ProjectList projects={filteredProjects} />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
