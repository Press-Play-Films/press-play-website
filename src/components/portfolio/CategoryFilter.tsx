
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
      <div 
        className="flex flex-wrap justify-center gap-2 bg-secondary/50 backdrop-blur-md p-1 rounded-full"
        role="group"
        aria-label="Filter projects by category"
      >
        <button 
          className={`category-filter-button px-6 py-2 rounded-full transition-colors relative overflow-hidden
            ${activeCategory === 'all' 
              ? 'bg-primary text-white' 
              : 'chrome-tab'}`}
          onClick={() => setActiveCategory('all')}
          aria-pressed={activeCategory === 'all'}
          aria-label="Show all projects"
        >
          All
        </button>
        <button 
          className={`category-filter-button px-6 py-2 rounded-full transition-colors relative overflow-hidden
            ${activeCategory === 'video' 
              ? 'bg-primary text-white' 
              : 'chrome-tab'}`}
          onClick={() => {
            setActiveCategory('video');
            showAllVideos();
          }}
          aria-pressed={activeCategory === 'video'}
          aria-label="Show video production projects"
        >
          Video Production
        </button>
      </div>
      
      <HashLink to="/#ai-integration" smooth>
        <button 
          className="chrome-button text-gray-800 flex items-center gap-2"
          aria-label="View AI Integration expertise"
        >
          AI Integration Expertise
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </HashLink>
    </div>
  );
};

export default CategoryFilter;
