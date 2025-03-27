
import React from 'react';
import { FileCode, Clipboard } from 'lucide-react';
import DownloadCard from './DownloadCard';

interface ProjectStructureCardProps {
  projectStructure: string;
  onCopyToClipboard: (text: string, description: string) => void;
}

const ProjectStructureCard = ({ projectStructure, onCopyToClipboard }: ProjectStructureCardProps) => {
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
        onClick={() => onCopyToClipboard(projectStructure, 'Project structure')}
        className="chrome-button flex items-center"
      >
        <Clipboard className="w-5 h-5 mr-2" />
        Copy Structure
      </button>
    </DownloadCard>
  );
};

export default ProjectStructureCard;
