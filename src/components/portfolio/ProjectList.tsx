
import VideoCard from '@/components/VideoCard';

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <VideoCard
          key={project.id}
          title={project.title}
          description={project.description}
          thumbnail={project.thumbnail}
          videoUrl={project.videoUrl || ""}
        />
      ))}
    </div>
  );
};

export default ProjectList;
