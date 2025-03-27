
import VideoCard from '@/components/VideoCard';
import { useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  useEffect(() => {
    // Log the number of projects for debugging
    console.log(`Rendering ${projects.length} projects`);
  }, [projects]);

  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-animation"
      aria-label="Project gallery"
      role="list"
    >
      {projects.length === 0 ? (
        <p className="col-span-full text-center text-muted-foreground py-12">
          No projects found in this category. Please try another filter option.
        </p>
      ) : (
        projects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card"
            role="listitem"
            style={{ animationDelay: `${index * 0.1}s` }}
            tabIndex={0}
            aria-label={`Project: ${project.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                // Simulate click on the video card when Enter or Space is pressed
                const videoElement = e.currentTarget.querySelector('img, video');
                if (videoElement instanceof HTMLElement) {
                  videoElement.click();
                }
                e.preventDefault();
              }
            }}
          >
            <VideoCard
              title={project.title}
              description={project.description}
              thumbnail={project.thumbnail}
              videoUrl={project.videoUrl || ""}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectList;
