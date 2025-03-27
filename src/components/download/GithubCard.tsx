
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

  // GitHub repo URL - update this with the actual repository URL
  const repoUrl = 'https://github.com/andrew-freeman-portfolio/website';

  const handleCopy = async () => {
    setIsCopying(true);
    await onCopyToClipboard(repoUrl, 'Repository URL');
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
        aria-label="Visit GitHub repository"
      >
        <ExternalLink className="w-5 h-5 mr-2" />
        Visit Repository
      </button>
      <button 
        onClick={handleCopy}
        className={`chrome-button flex items-center ${isCopying ? 'scale-95 opacity-80' : ''}`}
        disabled={isCopying}
        aria-label="Copy repository URL to clipboard"
      >
        <Clipboard className={`w-5 h-5 mr-2 ${isCopying ? 'animate-pulse' : ''}`} />
        {isCopying ? 'Copied!' : 'Copy URL'}
      </button>
    </DownloadCard>
  );
};

export default GithubCard;
