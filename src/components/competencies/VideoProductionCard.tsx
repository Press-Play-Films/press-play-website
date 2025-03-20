
import { Cloud, Film, Play, Video, Camera, Palette, Aperture, Music, Layers, VideoIcon, PenTool, Image, Smartphone } from 'lucide-react';
import TechChip from '@/components/TechChip';
import { techUrls } from '@/data/techUrls';

const VideoProductionCard = () => {
  return (
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
            <TechChip 
              label="Adobe Creative Cloud" 
              url={techUrls["Adobe Creative Cloud"]} 
              icon={<Cloud size={16} />} 
              bgColor="bg-[#9b87f5]" 
            />
            <TechChip 
              label="DaVinci Resolve" 
              url={techUrls["DaVinci Resolve"]} 
              icon={<Palette size={16} />} 
              bgColor="bg-[#0EA5E9]" 
            />
            <TechChip 
              label="FCP X" 
              url={techUrls["FCP X"]} 
              icon={<Film size={16} />} 
              bgColor="bg-[#818CF8]" 
            />
            <TechChip 
              label="Logic Pro" 
              url={techUrls["Logic Pro"]} 
              icon={<Music size={16} />} 
              bgColor="bg-[#34D399]" 
            />
            <TechChip 
              label="After Effects" 
              url={techUrls["After Effects"]} 
              icon={<Play size={16} />} 
              bgColor="bg-[#F472B6]" 
            />
            <TechChip 
              label="Premiere Pro" 
              url={techUrls["Premiere Pro"]} 
              icon={<Video size={16} />} 
              bgColor="bg-[#60A5FA]" 
            />
            <TechChip 
              label="Photoshop" 
              url={techUrls["Photoshop"]} 
              icon={<Image size={16} />} 
              bgColor="bg-[#A78BFA]" 
            />
            <TechChip 
              label="Illustrator" 
              url={techUrls["Illustrator"]} 
              icon={<PenTool size={16} />} 
              bgColor="bg-[#FB923C]" 
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-4">Hardware Expertise</h3>
          <div className="flex flex-wrap gap-2">
            <TechChip 
              label="RED" 
              url={techUrls["RED"]} 
              icon={<Camera size={16} />} 
              bgColor="bg-[#EF4444]" 
            />
            <TechChip 
              label="ARRI" 
              url={techUrls["ARRI"]} 
              icon={<Aperture size={16} />} 
              bgColor="bg-[#10B981]" 
            />
            <TechChip 
              label="Sony" 
              url={techUrls["Sony"]} 
              icon={<VideoIcon size={16} />} 
              bgColor="bg-[#3B82F6]" 
            />
            <TechChip 
              label="Canon" 
              url={techUrls["Canon"]} 
              icon={<Camera size={16} />} 
              bgColor="bg-[#EC4899]" 
            />
            <TechChip 
              label="GoPro" 
              url={techUrls["GoPro"]} 
              icon={<Camera size={16} />} 
              bgColor="bg-[#8B5CF6]" 
            />
            <TechChip 
              label="DJI" 
              url={techUrls["DJI"]} 
              icon={<Smartphone size={16} />} 
              bgColor="bg-[#F472B6]" 
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-4">Specialized Skills</h3>
          <div className="flex flex-wrap gap-2">
            <TechChip 
              label="4k & 8k workflows" 
              url={techUrls["4k & 8k workflows"]} 
              icon={<Layers size={16} />} 
              bgColor="bg-[#0EA5E9]" 
            />
            <TechChip 
              label="Color Grading" 
              url={techUrls["Color Grading"]} 
              icon={<Palette size={16} />} 
              bgColor="bg-[#F97316]" 
            />
            <TechChip 
              label="Motion Graphics" 
              url={techUrls["Motion Graphics"]} 
              icon={<Play size={16} />} 
              bgColor="bg-[#8B5CF6]" 
            />
            <TechChip 
              label="Sound Design" 
              url={techUrls["Sound Design"]} 
              icon={<Music size={16} />} 
              bgColor="bg-[#34D399]" 
            />
            <TechChip 
              label="VFX Supervision" 
              url={techUrls["VFX Supervision"]} 
              icon={<Layers size={16} />} 
              bgColor="bg-[#EC4899]" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoProductionCard;
