
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface TechChipProps {
  label: string;
  url?: string;
  onClick?: () => void;
  icon?: ReactNode;
  bgColor?: string;
  className?: string;
}

const TechChip = ({ 
  label, 
  url, 
  onClick, 
  icon, 
  bgColor = "bg-secondary", 
  className 
}: TechChipProps) => {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    onClick?.();
  };

  const ChipContent = () => (
    <div 
      className={cn(
        "metal-card-premium rounded-full px-4 py-3 flex items-center gap-2 text-gray-800 transition-all hover:text-black",
        "relative overflow-hidden duration-300 cursor-pointer",
        "hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]",
        className
      )}
      onClick={handleClick}
    >
      {icon && <span>{icon}</span>}
      <span className="font-medium">{label}</span>
      
      {url && (
        <div className="ml-1 opacity-60 transition-opacity group-hover:opacity-100">
          <ExternalLink className="w-3.5 h-3.5" />
        </div>
      )}
    </div>
  );

  return <ChipContent />;
};

export default TechChip;
