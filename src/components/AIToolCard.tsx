
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
      className="glass-card rounded-xl p-5 hover-scale hover-glow cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-col gap-4">
        {icon ? (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <img src={icon} alt={name} className="w-8 h-8 object-contain" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-medium text-lg">{name}</h3>
                {website && (
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-primary/20 flex items-center justify-center">
              <div className="w-8 h-8 bg-primary/50 rounded-full"></div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-medium text-lg">{name}</h3>
                {website && (
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIToolCard;
