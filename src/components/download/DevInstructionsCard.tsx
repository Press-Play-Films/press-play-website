
import React, { useState } from 'react';
import { FileCode, Clipboard } from 'lucide-react';
import DownloadCard from './DownloadCard';

interface DevInstructionsCardProps {
  onCopyToClipboard: (text: string, description: string) => Promise<boolean>;
}

const DevInstructionsCard = ({ onCopyToClipboard }: DevInstructionsCardProps) => {
  const [isCopying, setIsCopying] = useState(false);

  const commands = `
git clone [repository-url]
cd [project-directory]
npm install
npm run dev
  `.trim();

  const handleCopy = async () => {
    setIsCopying(true);
    await onCopyToClipboard(commands, 'Development commands');
    setTimeout(() => setIsCopying(false), 800);
  };

  return (
    <DownloadCard
      icon={<FileCode className="w-8 h-8 mr-4 text-primary" />}
      title="Development Instructions"
      description="Key commands for running this project locally:"
    >
      <ol className="list-decimal list-inside space-y-2 mb-4 w-full">
        <li>Clone the repository: <code className="bg-black/20 px-2 py-1 rounded">git clone [repository-url]</code></li>
        <li>Install dependencies: <code className="bg-black/20 px-2 py-1 rounded">npm install</code></li>
        <li>Start the development server: <code className="bg-black/20 px-2 py-1 rounded">npm run dev</code></li>
        <li>Build for production: <code className="bg-black/20 px-2 py-1 rounded">npm run build</code></li>
      </ol>
      <button 
        onClick={handleCopy}
        className={`chrome-button flex items-center ${isCopying ? 'scale-95 opacity-80' : ''}`}
        disabled={isCopying}
      >
        <Clipboard className={`w-5 h-5 mr-2 ${isCopying ? 'animate-pulse' : ''}`} />
        {isCopying ? 'Copied!' : 'Copy Commands'}
      </button>
    </DownloadCard>
  );
};

export default DevInstructionsCard;
