
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import PortfolioHeroSection from '@/components/portfolio/PortfolioHeroSection';
import CategoryFilter from '@/components/portfolio/CategoryFilter';
import ProjectList from '@/components/portfolio/ProjectList';
import { portfolioData, type ProjectCategory } from '@/data/portfolioData';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = portfolioData.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  );

  // This function is required by the CategoryFilter component interface
  // but doesn't need to do anything in this context since we're already
  // showing all videos when the category is selected
  const showAllVideos = () => {};

  return (
    <div className="min-h-screen">
      <ParticleBackground />
      <Header />
      
      {/* Hero Section */}
      <PortfolioHeroSection />
      
      {/* Portfolio Section */}
      <section className="py-10 relative">
        <div className="container px-6 relative z-10">
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
