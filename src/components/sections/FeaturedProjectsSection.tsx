
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoCard from '@/components/VideoCard';
import { useMemo } from 'react';

const FeaturedProjectsSection = () => {
  const videoData = [
    {
      id: 1,
      title: "Fuse Nightclub Promo",
      description: "High-energy promotional video showcasing nightlife atmosphere and entertainment.",
      thumbnail: "https://i.vimeocdn.com/video/438394212-1fff1408539b7be4dec8af951c955b8a2aec415a67c3bb895d54fb5f2777c9fd-d_640",
      videoUrl: "https://player.vimeo.com/video/67933840?h=a5786d80c4&title=0&byline=0&portrait=0"
    },
    {
      id: 2,
      title: "ODESSA",
      description: "A single-camera, 4-location, music video produced for the Starkillers.",
      thumbnail: "https://i.vimeocdn.com/video/23430484-dbbe44ee8a4c9c81f3da8d6b0e9df5fc23a31de0d055b454b2d3badbe1d12f24-d_640",
      videoUrl: "https://player.vimeo.com/video/6174101?h=b1777bbf85&title=0&byline=0&portrait=0"
    },
    {
      id: 3,
      title: "The Law of Nines",
      description: "A short film based on an excerpt from N.Y. Times best-selling author Terry Goodkind to promote his latest book.",
      thumbnail: "https://i.vimeocdn.com/video/39599292-18af5a5e46bd56ed74cbe3b43a90beb73b6bcf4d3c7bfdec43c89989c99cfa00-d_640",
      videoUrl: "https://player.vimeo.com/video/8228797?h=b3f21e6126&title=0&byline=0&portrait=0"
    },
    {
      id: 4,
      title: "Get Your Hands On Me",
      description: "A music video produced for the artist Samantha Alexis.",
      thumbnail: "https://i.vimeocdn.com/video/469706233-5a3cbeaac4e2da649beddd9fb778373a6d7482203b73b064d8c14c10bf84e80e-d_640",
      videoUrl: "https://player.vimeo.com/video/89813382?h=faa8e1acd2&title=0&byline=0&portrait=0"
    }
  ];
  
  const videoCards = useMemo(() => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {videoData.map((video) => (
        <VideoCard
          key={video.id}
          title={video.title}
          description={video.description}
          thumbnail={video.thumbnail}
          videoUrl={video.videoUrl}
        />
      ))}
    </div>
  ), []);
  
  const buttonStyle = "px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl";
  
  return (
    <section id="featured-work" className="py-20 relative">
      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A selection of our professional work across various industries</p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="flex gap-2 bg-secondary/50 backdrop-blur-md p-1 rounded-full">
            <button className="px-6 py-2 rounded-full bg-primary text-white">All</button>
            <button className="px-6 py-2 rounded-full hover:bg-secondary transition-colors">Video Production</button>
            <button className="px-6 py-2 rounded-full hover:bg-secondary transition-colors">AI Projects</button>
            <button className="px-6 py-2 rounded-full hover:bg-secondary transition-colors">Sales</button>
          </div>
        </div>
        
        {videoCards}
        
        <div className="text-center mt-12">
          <Link to="/portfolio" className={buttonStyle}>
            View Full Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
