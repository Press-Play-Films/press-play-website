
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoCard from '@/components/VideoCard';
import { useMemo, useState } from 'react';
import { Category } from '@/components/portfolio/CategoryFilter';
import { HashLink } from 'react-router-hash-link';
import CategoryFilter from '@/components/portfolio/CategoryFilter';
import { portfolioData } from '@/data/portfolioData';

const FeaturedProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  // Take the first 6 videos from portfolioData
  const videoData = portfolioData.slice(0, 6);
  
  const filteredVideos = useMemo(() => {
    return videoData.filter(video => 
      activeCategory === 'all' || video.category === activeCategory
    );
  }, [activeCategory]);
  
  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    
    if (category === 'video') {
      const element = document.getElementById('featured-work');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  const videoCards = useMemo(() => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredVideos.map((video) => (
        <VideoCard
          key={video.id}
          title={video.title}
          description={video.description}
          thumbnail={video.thumbnail}
          videoUrl={video.videoUrl}
        />
      ))}
    </div>
  ), [filteredVideos]);
  
  const buttonStyle = "px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl";
  
  return (
    <section id="featured-work" className="py-20 relative">
      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A selection of our professional work across various industries</p>
        </div>
        
        <CategoryFilter activeCategory={activeCategory} setActiveCategory={handleCategoryChange} />
        
        {videoCards}
        
        <div className="text-center mt-12">
          <Link to="/portfolio" className={buttonStyle}>
            View Full Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
