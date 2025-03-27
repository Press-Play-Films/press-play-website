
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
    >
      {projects.length === 0 ? (
        <p className="col-span-full text-center text-muted-foreground py-12">
          No projects found in this category. Please try another filter option.
        </p>
      ) : (
        projects.map((project) => (
          <div key={project.id} className="project-card">
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
