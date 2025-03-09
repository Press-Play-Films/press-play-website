
import { ReactNode } from 'react';

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  color: string;
  children: ReactNode;
}

const SkillCard = ({ title, icon, color, children }: SkillCardProps) => {
  return (
    <div className="glass-card rounded-2xl p-6 h-full hover-scale hover-glow animate-fade-in">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
};

export default SkillCard;
