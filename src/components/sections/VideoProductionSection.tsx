
import React from 'react';
import TechChip from '@/components/TechChip';
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
  const techUrls = {
    "Adobe Creative Cloud": "https://www.adobe.com/creativecloud.html",
    "DaVinci Resolve": "https://www.blackmagicdesign.com/products/davinciresolve",
    "FCP X": "https://www.apple.com/final-cut-pro/",
    "Logic Pro": "https://www.apple.com/logic-pro/",
    "After Effects": "https://www.adobe.com/products/aftereffects.html",
    "Premiere Pro": "https://www.adobe.com/products/premiere.html",
    "Photoshop": "https://www.adobe.com/products/photoshop.html",
    "Illustrator": "https://www.adobe.com/products/illustrator.html",
    "RED": "https://www.red.com/",
    "ARRI": "https://www.arri.com/",
    "Sony": "https://pro.sony/",
    "Canon": "https://www.usa.canon.com/",
    "GoPro": "https://gopro.com/",
    "DJI": "https://www.dji.com/",
    "4k & 8k workflows": "https://www.blackmagicdesign.com/products/blackmagicursa",
    "Color Grading": "https://www.blackmagicdesign.com/products/davinciresolve/color",
    "Motion Graphics": "https://www.adobe.com/products/aftereffects.html",
    "Sound Design": "https://www.apple.com/logic-pro/",
    "VFX Supervision": "https://www.adobe.com/products/aftereffects.html",
    "Multi-camera Production": "https://www.blackmagicdesign.com/products/davinciresolve/edit"
  };

  return (
    <section className="py-16 relative" id="video-production">
      <div className="container px-6 relative z-10">
        <div className="glass-card rounded-2xl p-6 h-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-yellow-900/30 flex items-center justify-center">
              <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Video Production</h2>
              <p className="text-muted-foreground">
                Professional video production services from concept to completion with industry-leading tools.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-4">Software Expertise</h3>
              <div className="flex flex-wrap gap-2">
                <div className="bg-[#9b87f5] hover:bg-[#8879e0] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <Cloud size={16} />
                  <a href={techUrls["Adobe Creative Cloud"]} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    Adobe Creative Cloud
                  </a>
                </div>
                
                <div className="bg-[#F97316] hover:bg-[#ea6c0e] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <PenTool size={16} />
                  <a href="https://www.adobe.com/products/creativesuite.html" target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    Adobe Creative Suite
                  </a>
                </div>
                
                <div className="bg-[#0EA5E9] hover:bg-[#0d96d4] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <Palette size={16} />
                  <a href={techUrls["DaVinci Resolve"]} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    DaVinci Resolve
                  </a>
                </div>
                
                <div className="bg-[#818CF8] hover:bg-[#737be9] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <Film size={16} />
                  <a href={techUrls["FCP X"]} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    FCP X
                  </a>
                </div>
                
                <div className="bg-[#34D399] hover:bg-[#2ec78a] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <Music size={16} />
                  <a href={techUrls["Logic Pro"]} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    Logic Pro
                  </a>
                </div>
                
                <div className="bg-[#F472B6] hover:bg-[#e65aa7] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <Play size={16} />
                  <a href={techUrls["After Effects"]} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    After Effects
                  </a>
                </div>
                
                <div className="bg-[#60A5FA] hover:bg-[#4e96eb] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <Video size={16} />
                  <a href={techUrls["Premiere Pro"]} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    Premiere Pro
                  </a>
                </div>
                
                <div className="bg-[#A78BFA] hover:bg-[#9a7cf9] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <Image size={16} />
                  <a href={techUrls["Photoshop"]} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    Photoshop
                  </a>
                </div>
                
                <div className="bg-[#FB923C] hover:bg-[#fa8729] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <PenTool size={16} />
                  <a href={techUrls["Illustrator"]} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    Illustrator
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Hardware Expertise</h3>
              <div className="flex flex-wrap gap-2">
                <div className="bg-[#EF4444] hover:bg-[#e42d2d] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <Camera size={16} />
                  <a href={techUrls["RED"]} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    RED
                  </a>
                </div>
                
                <div className="bg-[#10B981] hover:bg-[#0ea572] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <Aperture size={16} />
                  <a href={techUrls["ARRI"]} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    ARRI
                  </a>
                </div>
                
                <div className="bg-[#3B82F6] hover:bg-[#2775f5] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <VideoIcon size={16} />
                  <a href={techUrls["Sony"]} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    Sony
                  </a>
                </div>
                
                <div className="bg-[#EC4899] hover:bg-[#ea308c] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <Camera size={16} />
                  <a href={techUrls["Canon"]} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    Canon
                  </a>
                </div>
                
                <div className="bg-[#8B5CF6] hover:bg-[#7c45f5] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <Camera size={16} />
                  <a href={techUrls["GoPro"]} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    GoPro
                  </a>
                </div>
                
                <div className="bg-[#F472B6] hover:bg-[#f25bab] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <Smartphone size={16} />
                  <a href={techUrls["DJI"]} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    DJI
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Specialized Skills</h3>
              <div className="flex flex-wrap gap-2">
                <div className="bg-[#0EA5E9] hover:bg-[#0d99d7] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <Layers size={16} />
                  <a href={techUrls["4k & 8k workflows"]} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    4k & 8k workflows
                  </a>
                </div>
                
                <div className="bg-[#F97316] hover:bg-[#ea6c0e] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <Palette size={16} />
                  <a href={techUrls["Color Grading"]} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    Color Grading
                  </a>
                </div>
                
                <div className="bg-[#8B5CF6] hover:bg-[#7c45f5] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <Play size={16} />
                  <a href={techUrls["Motion Graphics"]} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    Motion Graphics
                  </a>
                </div>
                
                <div className="bg-[#34D399] hover:bg-[#2ec78a] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <Music size={16} />
                  <a href={techUrls["Sound Design"]} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    Sound Design
                  </a>
                </div>
                
                <div className="bg-[#EC4899] hover:bg-[#ea308c] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <Layers size={16} />
                  <a href={techUrls["VFX Supervision"]} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    VFX Supervision
                  </a>
                </div>
                
                <div className="bg-[#3B82F6] hover:bg-[#2775f5] text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer">
                  <Clapperboard size={16} />
                  <a href={techUrls["Multi-camera Production"]} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                    Multi-camera Production
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoProductionSection;
