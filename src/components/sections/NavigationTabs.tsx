
import { HashLink } from 'react-router-hash-link';

const NavigationTabs = () => {
  return (
    <section className="py-8 relative">
      <div className="container px-6 relative z-10">
        <div className="flex flex-wrap justify-center gap-4">
          <HashLink smooth to="#ai-integration" className="px-4 py-2 rounded-full bg-blue-900/30 hover:bg-blue-500/30 transition-colors">
            AI Integration
          </HashLink>
          <HashLink smooth to="#video-production" className="px-4 py-2 rounded-full bg-yellow-900/30 hover:bg-yellow-500/30 transition-colors">
            Video Production
          </HashLink>
          <HashLink smooth to="#technical-expertise" className="px-4 py-2 rounded-full bg-red-900/30 hover:bg-red-500/30 transition-colors">
            Technical Expertise
          </HashLink>
          <HashLink smooth to="#sales-leadership" className="px-4 py-2 rounded-full bg-green-900/30 hover:bg-green-500/30 transition-colors">
            Sales Leadership
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default NavigationTabs;
