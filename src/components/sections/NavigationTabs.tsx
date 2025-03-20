
import { HashLink } from 'react-router-hash-link';

const NavigationTabs = () => {
  return (
    <section className="py-8 relative">
      <div className="container px-6 relative z-10">
        <div className="flex flex-wrap justify-center gap-4">
          <HashLink smooth to="#ai-integration" className="chrome-tab">
            AI Integration
          </HashLink>
          <HashLink smooth to="#featured-work" className="chrome-tab">
            Video Production
          </HashLink>
          <HashLink smooth to="#technical-expertise" className="chrome-tab">
            Technical Expertise
          </HashLink>
          <HashLink smooth to="#sales-leadership" className="chrome-tab">
            Sales Leadership
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default NavigationTabs;
