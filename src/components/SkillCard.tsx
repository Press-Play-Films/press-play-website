import { ReactNode } from 'react';
import { HashLink } from 'react-router-hash-link';

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  color: string;
  children: ReactNode;
  id: string; // ID for linking
  linkTo?: string; // Optional link destination
}

const SkillCard = ({ title, icon, color, children, id, linkTo }: SkillCardProps) => {
  const content = (
    <>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-muted-foreground">{children}</div>
    </>
  );

  // If linkTo is provided, make the card a clickable link
  if (linkTo) {
    return (
      <HashLink 
        smooth 
        to={linkTo} 
        id={id} 
        className="glass-card rounded-2xl p-6 h-full hover-scale hover-glow animate-fade-in scroll-mt-24 block cursor-pointer"
      >
        {content}
      </HashLink>
    );
  }

  // Otherwise, render as a regular div
  return (
    <div id={id} className="glass-card rounded-2xl p-6 h-full hover-scale hover-glow animate-fade-in scroll-mt-24">
      {content}
    </div>
  );
};

export default SkillCard;
