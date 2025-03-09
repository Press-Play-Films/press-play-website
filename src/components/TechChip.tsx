
interface TechChipProps {
  label: string;
}

const TechChip = ({ label }: TechChipProps) => {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-white mr-2 mb-2 hover:bg-primary/20 transition-colors">
      {label}
    </span>
  );
};

export default TechChip;
