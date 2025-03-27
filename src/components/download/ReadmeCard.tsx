
import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import DownloadCard from './DownloadCard';

interface ReadmeCardProps {
  onViewReadme: () => void;
  downloading: boolean;
}

const ReadmeCard = ({ onViewReadme, downloading }: ReadmeCardProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    onViewReadme();
    // Reset after animation completes
    setTimeout(() => setIsDownloading(false), 800);
  };

  return (
    <DownloadCard
      icon={<FileText className="w-8 h-8 mr-4 text-primary" />}
      title="README"
      description="Download the README file with instructions for running the project and an overview of its structure. This is particularly useful for sharing with AI assistants and collaborators."
    >
      <button 
        onClick={handleDownload}
        className={`chrome-button-premium flex items-center ${isDownloading ? 'scale-95 opacity-80' : ''}`}
        disabled={downloading || isDownloading}
      >
        <FileText className={`w-5 h-5 mr-2 ${isDownloading ? 'animate-bounce' : ''}`} />
        {isDownloading ? 'Downloading...' : 'Download README'}
      </button>
    </DownloadCard>
  );
};

export default ReadmeCard;
