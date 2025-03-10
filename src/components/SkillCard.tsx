
import { ReactNode } from 'react';

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  color: string;
  children: ReactNode;
  id: string; // Added ID for linking
}

const SkillCard = ({ title, icon, color, children, id }: SkillCardProps) => {
  return (
    <div id={id} className="glass-card rounded-2xl p-6 h-full hover-scale hover-glow animate-fade-in scroll-mt-24">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
};

export default SkillCard;
