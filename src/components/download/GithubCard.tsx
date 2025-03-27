
import React from 'react';
import { Github, ExternalLink, Clipboard } from 'lucide-react';
import { toast } from "sonner";
import DownloadCard from './DownloadCard';

interface GithubCardProps {
  onOpenGitHub: () => void;
  onCopyToClipboard: (text: string, description: string) => void;
  downloading: boolean;
}

const GithubCard = ({ onOpenGitHub, onCopyToClipboard, downloading }: GithubCardProps) => {
  return (
    <DownloadCard
      icon={<Github className="w-8 h-8 mr-4 text-primary" />}
      title="GitHub Repository"
      description="Access the complete source code by visiting the GitHub repository. This contains all files needed to run and deploy the application."
    >
      <button 
        onClick={onOpenGitHub}
        className="chrome-button-premium flex items-center"
        disabled={downloading}
      >
        <ExternalLink className="w-5 h-5 mr-2" />
        Visit Repository
      </button>
      <button 
        onClick={() => onCopyToClipboard('https://github.com/your-username/your-repo-name', 'Repository URL')}
        className="chrome-button flex items-center"
      >
        <Clipboard className="w-5 h-5 mr-2" />
        Copy URL
      </button>
    </DownloadCard>
  );
};

export default GithubCard;
