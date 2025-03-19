
import React from 'react';
import TechChip from '@/components/TechChip';

const VideoProductionSection = () => {
  return (
    <section className="py-16 relative">
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 mb-16">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-full bg-yellow-900/30 flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Video Production</h2>
              <p className="text-muted-foreground">
                Professional video production services from concept to completion with industry-leading tools.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-4">Software Expertise</h3>
              <div className="flex flex-wrap gap-3">
                <TechChip label="Adobe Creative Cloud" url="https://www.adobe.com/creativecloud.html" />
                <TechChip label="Adobe Creative Suite" />
                <TechChip label="DaVinci Resolve" />
                <TechChip label="FCP X" />
                <TechChip label="Logic Pro" />
                <TechChip label="After Effects" />
                <TechChip label="Premiere Pro" />
                <TechChip label="Photoshop" />
                <TechChip label="Illustrator" />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Hardware Expertise</h3>
              <div className="flex flex-wrap gap-3">
                <TechChip label="RED" />
                <TechChip label="ARRI" />
                <TechChip label="Sony" />
                <TechChip label="Canon" />
                <TechChip label="GoPro" />
                <TechChip label="DJI" />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Specialized Skills</h3>
              <div className="flex flex-wrap gap-3">
                <TechChip label="4k & 8k workflows" />
                <TechChip label="Color Grading" />
                <TechChip label="Motion Graphics" />
                <TechChip label="Sound Design" />
                <TechChip label="VFX Supervision" />
                <TechChip label="Multi-camera Production" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoProductionSection;
