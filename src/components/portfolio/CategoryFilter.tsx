
import { useState } from 'react';

// Export the Category type so it can be used in other components
export type Category = 'all' | 'video' | 'ai' | 'sales';

interface CategoryFilterProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

const CategoryFilter = ({ activeCategory, setActiveCategory }: CategoryFilterProps) => {
  return (
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
  );
};

export default CategoryFilter;
