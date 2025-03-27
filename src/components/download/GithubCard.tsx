
import React, { useState } from 'react';
import { Github, ExternalLink, Clipboard } from 'lucide-react';
import DownloadCard from './DownloadCard';

interface GithubCardProps {
  onOpenGitHub: () => void;
  onCopyToClipboard: (text: string, description: string) => Promise<boolean>;
  downloading: boolean;
}

const GithubCard = ({ onOpenGitHub, onCopyToClipboard, downloading }: GithubCardProps) => {
  const [isCopying, setIsCopying] = useState(false);

  const handleCopy = async () => {
    setIsCopying(true);
    await onCopyToClipboard('https://github.com/your-username/your-repo-name', 'Repository URL');
    setTimeout(() => setIsCopying(false), 800);
  };

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
        onClick={handleCopy}
        className={`chrome-button flex items-center ${isCopying ? 'scale-95 opacity-80' : ''}`}
        disabled={isCopying}
      >
        <Clipboard className={`w-5 h-5 mr-2 ${isCopying ? 'animate-pulse' : ''}`} />
        {isCopying ? 'Copied!' : 'Copy URL'}
      </button>
    </DownloadCard>
  );
};

export default GithubCard;
