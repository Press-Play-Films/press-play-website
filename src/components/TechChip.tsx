
import { ReactNode } from 'react';

interface TechChipProps {
  label: string;
  url?: string;
  onClick?: () => void;
  icon?: ReactNode;
  bgColor?: string;
}

const TechChip = ({ label, url, onClick, icon, bgColor = "bg-secondary" }: TechChipProps) => {
  const ChipContent = () => (
    <div 
      className={`${bgColor} hover:opacity-90 text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-colors cursor-pointer mr-2 mb-2`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </div>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
        <ChipContent />
      </a>
    );
  }

  return <ChipContent />;
};

export default TechChip;
