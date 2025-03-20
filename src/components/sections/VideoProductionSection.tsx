
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Cloud, 
  Film, 
  Play, 
  Video, 
  Camera, 
  Palette, 
  Aperture, 
  Music, 
  Layers, 
  VideoIcon,
  PenTool,
  Image,
  Smartphone,
  MonitorSmartphone,
  Clapperboard
} from 'lucide-react';

const VideoProductionSection = () => {
  return (
    <section className="py-16 relative" id="video-production">
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
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Software Expertise</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <Button 
                  className="bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] text-white hover:shadow-md hover:from-[#8B5CF6] hover:to-[#7E69AB] transition-all"
                  onClick={() => window.open("https://www.adobe.com/creativecloud.html", "_blank")}
                >
                  <Cloud className="mr-2 h-4 w-4" />
                  Adobe Creative Cloud
                </Button>
                
                <Button 
                  className="bg-gradient-to-r from-[#F97316] to-[#C2410C] text-white hover:shadow-md transition-all"
                >
                  <PenTool className="mr-2 h-4 w-4" />
                  Adobe Creative Suite
                </Button>
                
                <Button 
                  className="bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white hover:shadow-md transition-all"
                >
                  <Palette className="mr-2 h-4 w-4" />
                  DaVinci Resolve
                </Button>
                
                <Button 
                  className="bg-gradient-to-r from-[#818CF8] to-[#4F46E5] text-white hover:shadow-md transition-all"
                >
                  <Film className="mr-2 h-4 w-4" />
                  FCP X
                </Button>
                
                <Button 
                  className="bg-gradient-to-r from-[#34D399] to-[#059669] text-white hover:shadow-md transition-all"
                >
                  <Music className="mr-2 h-4 w-4" />
                  Logic Pro
                </Button>
                
                <Button 
                  className="bg-gradient-to-r from-[#F472B6] to-[#DB2777] text-white hover:shadow-md transition-all"
                >
                  <Play className="mr-2 h-4 w-4" />
                  After Effects
                </Button>
                
                <Button 
                  className="bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] text-white hover:shadow-md transition-all"
                >
                  <Video className="mr-2 h-4 w-4" />
                  Premiere Pro
                </Button>
                
                <Button 
                  className="bg-gradient-to-r from-[#A78BFA] to-[#7C3AED] text-white hover:shadow-md transition-all"
                >
                  <Image className="mr-2 h-4 w-4" />
                  Photoshop
                </Button>
                
                <Button 
                  className="bg-gradient-to-r from-[#FB923C] to-[#EA580C] text-white hover:shadow-md transition-all"
                >
                  <PenTool className="mr-2 h-4 w-4" />
                  Illustrator
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Hardware Expertise</h3>
              <div className="flex flex-wrap gap-3">
                <Button 
                  className="bg-gradient-to-r from-[#EF4444] to-[#B91C1C] text-white hover:shadow-md transition-all"
                >
                  <Camera className="mr-2 h-4 w-4" />
                  RED
                </Button>
                
                <Button 
                  className="bg-gradient-to-r from-[#10B981] to-[#059669] text-white hover:shadow-md transition-all"
                >
                  <Aperture className="mr-2 h-4 w-4" />
                  ARRI
                </Button>
                
                <Button 
                  className="bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white hover:shadow-md transition-all"
                >
                  <VideoIcon className="mr-2 h-4 w-4" />
                  Sony
                </Button>
                
                <Button 
                  className="bg-gradient-to-r from-[#EC4899] to-[#BE185D] text-white hover:shadow-md transition-all"
                >
                  <Camera className="mr-2 h-4 w-4" />
                  Canon
                </Button>
                
                <Button 
                  className="bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] text-white hover:shadow-md transition-all"
                >
                  <Camera className="mr-2 h-4 w-4" />
                  GoPro
                </Button>
                
                <Button 
                  className="bg-gradient-to-r from-[#F472B6] to-[#DB2777] text-white hover:shadow-md transition-all"
                >
                  <Smartphone className="mr-2 h-4 w-4" />
                  DJI
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Specialized Skills</h3>
              <div className="flex flex-wrap gap-3">
                <Button 
                  className="bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white hover:shadow-md transition-all"
                >
                  <Layers className="mr-2 h-4 w-4" />
                  4k & 8k workflows
                </Button>
                
                <Button 
                  className="bg-gradient-to-r from-[#F97316] to-[#C2410C] text-white hover:shadow-md transition-all"
                >
                  <Palette className="mr-2 h-4 w-4" />
                  Color Grading
                </Button>
                
                <Button 
                  className="bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] text-white hover:shadow-md transition-all"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Motion Graphics
                </Button>
                
                <Button 
                  className="bg-gradient-to-r from-[#34D399] to-[#059669] text-white hover:shadow-md transition-all"
                >
                  <Music className="mr-2 h-4 w-4" />
                  Sound Design
                </Button>
                
                <Button 
                  className="bg-gradient-to-r from-[#EC4899] to-[#BE185D] text-white hover:shadow-md transition-all"
                >
                  <Layers className="mr-2 h-4 w-4" />
                  VFX Supervision
                </Button>
                
                <Button 
                  className="bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white hover:shadow-md transition-all"
                >
                  <Clapperboard className="mr-2 h-4 w-4" />
                  Multi-camera Production
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoProductionSection;
