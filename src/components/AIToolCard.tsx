
interface AIToolCardProps {
  name: string;
  description: string;
  icon?: string;
}

const AIToolCard = ({ name, description, icon }: AIToolCardProps) => {
  return (
    <div className="glass-card rounded-xl p-5 hover-scale hover-glow">
      <div className="flex items-start gap-4">
        {icon && (
          <div className="w-10 h-10 flex-shrink-0 rounded bg-primary/20 flex items-center justify-center">
            <img src={icon} alt={name} className="w-6 h-6" />
          </div>
        )}
        <div>
          <h3 className="font-medium text-lg mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AIToolCard;
