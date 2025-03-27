
import React, { useState } from 'react';
import { FileJson, DownloadCloud } from 'lucide-react';
import DownloadCard from './DownloadCard';

interface ProjectInfoCardProps {
  onDownloadJSON: () => void;
  downloading: boolean;
}

const ProjectInfoCard = ({ onDownloadJSON, downloading }: ProjectInfoCardProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    onDownloadJSON();
    // Reset after animation completes
    setTimeout(() => setIsDownloading(false), 800);
  };

  return (
    <DownloadCard
      icon={<FileJson className="w-8 h-8 mr-4 text-primary" />}
      title="Project Information"
      description="Download a JSON file containing metadata about the project structure, technologies used, and other relevant information. Useful for AI tools to understand the project context."
    >
      <button 
        onClick={handleDownload}
        className={`chrome-button-premium flex items-center ${isDownloading ? 'scale-95 opacity-80' : ''}`}
        disabled={downloading || isDownloading}
      >
        <DownloadCloud className={`w-5 h-5 mr-2 ${isDownloading ? 'animate-bounce' : ''}`} />
        {isDownloading ? 'Downloading...' : 'Download JSON'}
      </button>
    </DownloadCard>
  );
};

export default ProjectInfoCard;
