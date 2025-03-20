
import { HashLink } from 'react-router-hash-link';
import { ArrowRight } from 'lucide-react';

// Export the Category type so it can be used in other components
export type Category = 'all' | 'video';

interface CategoryFilterProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
  showAllVideos: () => void;
}

const CategoryFilter = ({ activeCategory, setActiveCategory, showAllVideos }: CategoryFilterProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
      <div className="flex flex-wrap justify-center gap-2 bg-secondary/50 backdrop-blur-md p-1 rounded-full">
        <button 
          className={`px-6 py-2 rounded-full transition-colors relative overflow-hidden
            ${activeCategory === 'all' 
              ? 'bg-primary text-white' 
              : 'chrome-tab'}`}
          onClick={() => setActiveCategory('all')}
        >
          All
        </button>
        <button 
          className={`px-6 py-2 rounded-full transition-colors relative overflow-hidden
            ${activeCategory === 'video' 
              ? 'bg-primary text-white' 
              : 'chrome-tab'}`}
          onClick={() => {
            setActiveCategory('video');
            showAllVideos();
          }}
        >
          Video Production
        </button>
      </div>
      
      <HashLink to="/#ai-integration" smooth>
        <button className="chrome-button text-gray-800 flex items-center gap-2">
          AI Integration Expertise
          <ArrowRight className="w-4 h-4" />
        </button>
      </HashLink>
    </div>
  );
};

export default CategoryFilter;
