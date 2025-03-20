
import React from 'react';
import AIToolCard from '@/components/AIToolCard';
import { Progress } from '@/components/ui/progress';

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
  },
  {
    name: "Joe Verde",
    description: "Automotive sales training programs and dealership management systems",
    website: "https://www.joeverde.com/",
    icon: "/lovable-uploads/6cc6a7ed-4d54-46d9-b2b7-ea2e524a8d1a.png"
  },
  {
    name: "Tom Hopkins",
    description: "Building Champions sales methodology and training implementation",
    website: "https://www.tomhopkins.com/",
    icon: "/lovable-uploads/6cc6a7ed-4d54-46d9-b2b7-ea2e524a8d1a.png"
  }
];

const SalesLeadershipSkillsSection = () => {
  return (
    <section className="py-16 relative" id="sales-leadership">
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 mb-16">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Sales Leadership</h2>
              <p className="text-muted-foreground">
                Strategic sales leadership with a focus on relationship building and AI-powered CRM implementation.
              </p>
            </div>
          </div>
          
          {/* Add Sales Leaders Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
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
          
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-medium mb-4">Projects with Industry Leaders</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Projects with Tony Robbins</span>
                  </div>
                  <Progress value={92} className="h-2 bg-secondary" indicatorClassName="bg-green-500" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Projects with Jordan Belfort</span>
                  </div>
                  <Progress value={88} className="h-2 bg-secondary" indicatorClassName="bg-green-500" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Projects with Joe Verde</span>
                  </div>
                  <Progress value={85} className="h-2 bg-secondary" indicatorClassName="bg-green-500" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Projects with Tom Hopkins</span>
                  </div>
                  <Progress value={90} className="h-2 bg-secondary" indicatorClassName="bg-green-500" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">System Implementation</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">AI-powered CRM Systems</span>
                  </div>
                  <Progress value={95} className="h-2 bg-secondary" indicatorClassName="bg-green-500" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">SRM Systems Development</span>
                  </div>
                  <Progress value={87} className="h-2 bg-secondary" indicatorClassName="bg-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesLeadershipSkillsSection;
export { salesLeaders };
