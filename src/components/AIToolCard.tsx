
import { ExternalLink } from 'lucide-react';

interface AIToolCardProps {
  name: string;
  description: string;
  icon?: string;
  website?: string;
}

const AIToolCard = ({ name, description, icon, website }: AIToolCardProps) => {
  const handleClick = () => {
    if (website) {
      window.open(website, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="glass-card rounded-xl p-6 hover-scale hover-glow cursor-pointer relative"
      onClick={handleClick}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
          {icon ? (
            <img src={icon} alt={name} className="w-9 h-9 object-contain" />
          ) : (
            <div className="w-8 h-8 bg-primary/50 rounded-full"></div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-xl">{name}</h3>
          </div>
          <p className="text-muted-foreground text-sm mt-1">{description}</p>
        </div>
        
        {website && (
          <div className="absolute top-5 right-5">
            <ExternalLink className="w-5 h-5 text-muted-foreground" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AIToolCard;
