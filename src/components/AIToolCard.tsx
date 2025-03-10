
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AIToolCardProps {
  name: string;
  description: string;
  icon?: string;
  website?: string;
  logoClassName?: string;
}

const AIToolCard = ({ 
  name, 
  description, 
  icon, 
  website,
  logoClassName = "w-9 h-9 object-contain" 
}: AIToolCardProps) => {
  const handleClick = () => {
    if (website) {
      window.open(website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-6 relative overflow-hidden transition-all duration-300",
        "hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] cursor-pointer",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/10 before:to-transparent before:opacity-0",
        "hover:before:opacity-100 before:transition-opacity before:duration-300"
      )}
      onClick={handleClick}
    >
      <div className="flex items-start gap-4 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 
          transition-all duration-300 group-hover:bg-white/20">
          {icon ? (
            <img 
              src={icon} 
              alt={name} 
              className={cn(logoClassName, "transition-transform duration-300")} 
            />
          ) : (
            <div className="w-8 h-8 bg-primary/50 rounded-full"></div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-xl transition-colors duration-300 text-white group-hover:text-white">{name}</h3>
          </div>
          <p className="text-muted-foreground text-sm mt-1 transition-colors duration-300">{description}</p>
        </div>
        
        {website && (
          <div className="absolute top-5 right-5 transform transition-transform duration-300 hover:scale-110">
            <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-white transition-colors duration-300" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AIToolCard;
