
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { DownloadCloud, Github, FileJson, FileCode, FileText, Clipboard, ExternalLink } from 'lucide-react';
import { toast } from "sonner";

const Download = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [downloading, setDownloading] = useState(false);
  
  const handleCopyToClipboard = (text: string, description: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success(`${description} copied to clipboard!`);
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
        toast.error("Failed to copy to clipboard");
      });
  };
  
  const handleOpenGitHub = () => {
    // This opens the GitHub repository in a new tab
    window.open('https://github.com/your-username/your-repo-name', '_blank');
  };
  
  const handleDownloadJSON = () => {
    setDownloading(true);
    
    try {
      // Create a simple JSON structure with information about the project
      const projectData = {
        name: "Andrew Freeman Portfolio",
        version: "1.0.0",
        description: "Personal portfolio website for Andrew Freeman",
        technologies: [
          "React", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui"
        ],
        pages: [
          "Home", "Skills", "Portfolio", "Blog", "Contact", "Download"
        ],
        key_components: [
          "Header.tsx", "Footer.tsx", "ParticleBackground.tsx",
          "AIIntegrationSection.tsx", "SalesLeadershipSection.tsx",
          "TechnicalExpertiseSection.tsx", "VideoProductionSection.tsx"
        ],
        structure: {
          "src/": "Source code directory",
          "src/components/": "Reusable UI components",
          "src/pages/": "Page components",
          "src/styles/": "CSS styling",
          "src/utils/": "Utility functions",
          "src/hooks/": "Custom React hooks",
          "src/data/": "Data files"
        },
        buildTimestamp: new Date().toISOString()
      };
      
      // Convert to JSON string
      const jsonString = JSON.stringify(projectData, null, 2);
      
      // Create a Blob from the JSON string
      const blob = new Blob([jsonString], { type: 'application/json' });
      
      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);
      
      // Create a link element
      const link = document.createElement('a');
      link.href = url;
      link.download = 'project-info.json';
      
      // Append the link to the body
      document.body.appendChild(link);
      
      // Click the link
      link.click();
      
      // Remove the link
      document.body.removeChild(link);
      
      // Release the URL
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating JSON:', error);
      toast.error("Failed to generate JSON file");
    } finally {
      setDownloading(false);
    }
  };
  
  const handleViewReadme = () => {
    const readmeContent = `# Andrew Freeman Portfolio

## Project Overview

This is a personal portfolio website for Andrew Freeman, showcasing skills and projects in:
- AI Integration
- Sales Leadership
- Technical Expertise
- Video Production

## Getting Started

To run this project locally:
\`\`\`
git clone <repository-url>
cd <project-directory>
npm install
npm run dev
\`\`\`

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- shadcn/ui components

## Project Structure

- \`/src\` - Source code
  - \`/components\` - React components
  - \`/pages\` - Page components
  - \`/styles\` - CSS styles
  - \`/hooks\` - Custom React hooks
  - \`/utils\` - Utility functions
`;

    const blob = new Blob([readmeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'README.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast.success("README.md file downloaded");
  };

  const projectStructure = `
src/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ParticleBackground.tsx
│   ├── competencies/
│   │   └── [Component files]
│   ├── sections/
│   │   └── [Section component files]
│   └── ui/
│       └── [shadcn components]
├── pages/
│   ├── index.tsx
│   ├── Skills.tsx
│   ├── Portfolio.tsx
│   ├── Blog.tsx
│   ├── Contact.tsx
│   └── Download.tsx
├── styles/
│   └── [CSS files]
├── utils/
│   └── [Utility functions]
├── hooks/
│   └── [Custom React hooks]
└── data/
    └── [Data files]
`;

  return (
    <div className={`min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <ParticleBackground />
      <Header />
      
      <div className="relative z-10 pt-32 pb-20">
        <div className="container px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Collaborate & Download</h1>
            <p className="text-xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Access project resources for collaboration with AI tools like ChatGPT or for third-party development
            </p>
            <p className="text-lg text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Share these resources with AI assistants to facilitate more effective collaboration and code reviews
            </p>
            
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Github className="w-8 h-8 mr-4 text-primary" />
                  <h2 className="text-2xl font-bold">GitHub Repository</h2>
                </div>
                <p className="mb-6">
                  Access the complete source code by visiting the GitHub repository. This contains all files needed to run and deploy the application.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={handleOpenGitHub}
                    className="chrome-button-premium flex items-center"
                    disabled={downloading}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Visit Repository
                  </button>
                  <button 
                    onClick={() => handleCopyToClipboard('https://github.com/your-username/your-repo-name', 'Repository URL')}
                    className="chrome-button flex items-center"
                  >
                    <Clipboard className="w-5 h-5 mr-2" />
                    Copy URL
                  </button>
                </div>
              </div>
              
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <FileCode className="w-8 h-8 mr-4 text-primary" />
                  <h2 className="text-2xl font-bold">Project Structure</h2>
                </div>
                <p className="mb-4">
                  Share this project structure with AI assistants to help them understand the codebase organization:
                </p>
                <pre className="bg-black/20 p-4 rounded-lg overflow-x-auto mb-4 text-sm">
                  {projectStructure}
                </pre>
                <button 
                  onClick={() => handleCopyToClipboard(projectStructure, 'Project structure')}
                  className="chrome-button flex items-center"
                >
                  <Clipboard className="w-5 h-5 mr-2" />
                  Copy Structure
                </button>
              </div>
              
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <FileJson className="w-8 h-8 mr-4 text-primary" />
                  <h2 className="text-2xl font-bold">Project Information</h2>
                </div>
                <p className="mb-6">
                  Download a JSON file containing metadata about the project structure, technologies used, and other relevant information. Useful for AI tools to understand the project context.
                </p>
                <button 
                  onClick={handleDownloadJSON}
                  className="chrome-button-premium flex items-center"
                  disabled={downloading}
                >
                  <DownloadCloud className="w-5 h-5 mr-2" />
                  Download JSON
                </button>
              </div>
              
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 mr-4 text-primary" />
                  <h2 className="text-2xl font-bold">README</h2>
                </div>
                <p className="mb-6">
                  Download the README file with instructions for running the project and an overview of its structure. This is particularly useful for sharing with AI assistants and collaborators.
                </p>
                <button 
                  onClick={handleViewReadme}
                  className="chrome-button-premium flex items-center"
                  disabled={downloading}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Download README
                </button>
              </div>
              
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <FileCode className="w-8 h-8 mr-4 text-primary" />
                  <h2 className="text-2xl font-bold">Development Instructions</h2>
                </div>
                <p className="mb-6">
                  Key commands for running this project locally:
                </p>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                  <li>Clone the repository: <code className="bg-black/20 px-2 py-1 rounded">git clone [repository-url]</code></li>
                  <li>Install dependencies: <code className="bg-black/20 px-2 py-1 rounded">npm install</code></li>
                  <li>Start the development server: <code className="bg-black/20 px-2 py-1 rounded">npm run dev</code></li>
                  <li>Build for production: <code className="bg-black/20 px-2 py-1 rounded">npm run build</code></li>
                </ol>
                <button 
                  onClick={() => handleCopyToClipboard(`
git clone [repository-url]
cd [project-directory]
npm install
npm run dev
                  `.trim(), 'Development commands')}
                  className="chrome-button flex items-center"
                >
                  <Clipboard className="w-5 h-5 mr-2" />
                  Copy Commands
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Download;
