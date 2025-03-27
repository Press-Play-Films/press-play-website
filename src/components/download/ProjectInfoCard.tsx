
import React from 'react';
import { FileJson, DownloadCloud } from 'lucide-react';
import DownloadCard from './DownloadCard';

interface ProjectInfoCardProps {
  onDownloadJSON: () => void;
  downloading: boolean;
}

const ProjectInfoCard = ({ onDownloadJSON, downloading }: ProjectInfoCardProps) => {
  return (
    <DownloadCard
      icon={<FileJson className="w-8 h-8 mr-4 text-primary" />}
      title="Project Information"
      description="Download a JSON file containing metadata about the project structure, technologies used, and other relevant information. Useful for AI tools to understand the project context."
    >
      <button 
        onClick={onDownloadJSON}
        className="chrome-button-premium flex items-center"
        disabled={downloading}
      >
        <DownloadCloud className="w-5 h-5 mr-2" />
        Download JSON
      </button>
    </DownloadCard>
  );
};

export default ProjectInfoCard;
