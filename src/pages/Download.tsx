
import { useState, useEffect } from 'react';
import { toast } from "sonner";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import GithubCard from '@/components/download/GithubCard';
import ProjectStructureCard from '@/components/download/ProjectStructureCard';
import ProjectInfoCard from '@/components/download/ProjectInfoCard';
import ReadmeCard from '@/components/download/ReadmeCard';
import DevInstructionsCard from '@/components/download/DevInstructionsCard';
import { generateProjectData, getReadmeContent, getProjectStructure } from '@/components/download/utils';
import { copyToClipboard } from '@/utils/clipboard';

const Download = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [downloading, setDownloading] = useState(false);
  
  // Use our new clipboard utility
  const handleCopyToClipboard = async (text: string, description: string) => {
    await copyToClipboard(text, description);
  };
  
  const handleOpenGitHub = () => {
    // This opens the GitHub repository in a new tab
    window.open('https://github.com/your-username/your-repo-name', '_blank');
  };
  
  const handleDownloadJSON = () => {
    setDownloading(true);
    
    try {
      // Get project data from utils
      const projectData = generateProjectData();
      
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
      
      // Release the URL to prevent memory leaks
      URL.revokeObjectURL(url);
      
      toast.success("Project info downloaded successfully");
    } catch (error) {
      console.error('Error generating JSON:', error);
      toast.error("Failed to generate JSON file");
    } finally {
      setDownloading(false);
    }
  };
  
  const handleViewReadme = () => {
    try {
      const readmeContent = getReadmeContent();
      const blob = new Blob([readmeContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'README.md';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Release the URL to prevent memory leaks
      URL.revokeObjectURL(url);
      
      toast.success("README.md file downloaded");
    } catch (error) {
      console.error('Error downloading README:', error);
      toast.error("Failed to download README file");
    }
  };

  // Get project structure ahead of time to avoid recalculating on each render
  const projectStructure = getProjectStructure();
  
  // Clean up any object URLs if component unmounts during download
  useEffect(() => {
    return () => {
      // This is just a precaution in case component unmounts during download
      setDownloading(false);
    };
  }, []);

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
              <GithubCard 
                onOpenGitHub={handleOpenGitHub} 
                onCopyToClipboard={handleCopyToClipboard}
                downloading={downloading}
              />
              
              <ProjectStructureCard 
                projectStructure={projectStructure}
                onCopyToClipboard={handleCopyToClipboard}
              />
              
              <ProjectInfoCard 
                onDownloadJSON={handleDownloadJSON}
                downloading={downloading}
              />
              
              <ReadmeCard 
                onViewReadme={handleViewReadme}
                downloading={downloading}
              />
              
              <DevInstructionsCard 
                onCopyToClipboard={handleCopyToClipboard}
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Download;
