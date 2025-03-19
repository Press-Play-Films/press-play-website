
import React from 'react';

const SkillsHeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-20 relative">
      <div className="container px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            A comprehensive overview of my professional capabilities across multiple disciplines
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsHeroSection;
