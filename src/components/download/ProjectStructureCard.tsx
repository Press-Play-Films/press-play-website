
import React, { useState } from 'react';
import { FileCode, Clipboard } from 'lucide-react';
import DownloadCard from './DownloadCard';

interface ProjectStructureCardProps {
  projectStructure: string;
  onCopyToClipboard: (text: string, description: string) => Promise<boolean>;
}

const ProjectStructureCard = ({ projectStructure, onCopyToClipboard }: ProjectStructureCardProps) => {
  const [isCopying, setIsCopying] = useState(false);

  const handleCopy = async () => {
    setIsCopying(true);
    await onCopyToClipboard(projectStructure, 'Project structure');
    setTimeout(() => setIsCopying(false), 800);
  };

  return (
    <DownloadCard
      icon={<FileCode className="w-8 h-8 mr-4 text-primary" />}
      title="Project Structure"
      description="Share this project structure with AI assistants to help them understand the codebase organization:"
    >
      <pre className="bg-black/20 p-4 rounded-lg overflow-x-auto mb-4 text-sm w-full">
        {projectStructure}
      </pre>
      <button 
        onClick={handleCopy}
        className={`chrome-button flex items-center ${isCopying ? 'scale-95 opacity-80' : ''}`}
        disabled={isCopying}
      >
        <Clipboard className={`w-5 h-5 mr-2 ${isCopying ? 'animate-pulse' : ''}`} />
        {isCopying ? 'Copied!' : 'Copy Structure'}
      </button>
    </DownloadCard>
  );
};

export default ProjectStructureCard;
