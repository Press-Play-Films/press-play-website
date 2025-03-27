
import React from 'react';
import { FileText } from 'lucide-react';
import DownloadCard from './DownloadCard';

interface ReadmeCardProps {
  onViewReadme: () => void;
  downloading: boolean;
}

const ReadmeCard = ({ onViewReadme, downloading }: ReadmeCardProps) => {
  return (
    <DownloadCard
      icon={<FileText className="w-8 h-8 mr-4 text-primary" />}
      title="README"
      description="Download the README file with instructions for running the project and an overview of its structure. This is particularly useful for sharing with AI assistants and collaborators."
    >
      <button 
        onClick={onViewReadme}
        className="chrome-button-premium flex items-center"
        disabled={downloading}
      >
        <FileText className="w-5 h-5 mr-2" />
        Download README
      </button>
    </DownloadCard>
  );
};

export default ReadmeCard;
