
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoCard from '@/components/VideoCard';
import { useMemo, useState } from 'react';
import { Category } from '@/components/portfolio/CategoryFilter';
import CategoryFilter from '@/components/portfolio/CategoryFilter';
import { portfolioData } from '@/data/portfolioData';

const FeaturedProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [showAllVideoProduction, setShowAllVideoProduction] = useState(false);
  
  const videoData = useMemo(() => {
    if (activeCategory === 'video' && showAllVideoProduction) {
      return portfolioData;
    }
    return portfolioData.slice(0, 6);
  }, [activeCategory, showAllVideoProduction]);
  
  const filteredVideos = useMemo(() => {
    return videoData.filter(video => 
      activeCategory === 'all' || video.category === activeCategory
    );
  }, [activeCategory, videoData]);
  
  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };
  
  const showAllVideos = () => {
    setShowAllVideoProduction(true);
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
  
  return (
    <section id="featured-work" className="py-20 relative" aria-labelledby="featured-work-title">
      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 id="featured-work-title" className="text-3xl md:text-4xl section-title-gradient mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto section-subtitle-gradient">A selection of our professional work across various industries</p>
        </div>
        
        <CategoryFilter 
          activeCategory={activeCategory} 
          setActiveCategory={handleCategoryChange} 
          showAllVideos={showAllVideos}
        />
        
        {filteredVideos.length === 0 ? (
          <p className="text-center text-muted-foreground my-16">No projects found in this category.</p>
        ) : (
          videoCards
        )}
        
        {!(activeCategory === 'video' && showAllVideoProduction) && (
          <div className="text-center mt-12">
            <Link 
              to="/portfolio" 
              className="chrome-button text-gray-800 flex items-center gap-2 mx-auto w-fit"
              aria-label="View full portfolio of projects"
            >
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
