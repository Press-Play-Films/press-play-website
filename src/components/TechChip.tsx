
interface TechChipProps {
  label: string;
  url?: string;
}

const TechChip = ({ label, url }: TechChipProps) => {
  const ChipContent = () => (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-white mr-2 mb-2 hover:bg-primary/20 transition-colors">
      {label}
    </span>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="no-underline">
        <ChipContent />
      </a>
    );
  }

  return <ChipContent />;
};

export default TechChip;
