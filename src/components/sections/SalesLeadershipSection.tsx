
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AIToolCard from '@/components/AIToolCard';

const SalesLeadershipSection = () => {
  const salesLeaders = [
    {
      name: "Tony Robbins",
      description: "Collaboration on strategic sales initiatives and performance coaching programs",
      website: "https://www.tonyrobbins.com/",
      icon: "/lovable-uploads/d692a2c6-2ad2-4e20-ae0d-b32fed6d7c15.png"
    },
    {
      name: "Jordan Belfort",
      description: "Implementation of the Straight Line Persuasion System for sales teams",
      website: "https://jordanbelfort.com/",
      icon: "/lovable-uploads/5f3d2a9c-6e9c-4361-bb77-58ee71e41cbb.png"
    }
  ];
  
  const buttonStyle = "px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl";
  
  return (
    <section className="py-20 relative">
      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sales Leadership Partnerships</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Implementing cutting-edge sales methodologies in partnership with industry leaders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {salesLeaders.map((leader, index) => (
            <AIToolCard 
              key={index}
              name={leader.name}
              description={leader.description}
              icon={leader.icon}
              website={leader.website}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/skills" className={buttonStyle}>
            View All Partnerships
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SalesLeadershipSection;
