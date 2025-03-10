
import { useState, useEffect } from 'react';
import { Play, Image as ImageIcon } from 'lucide-react';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
}

const VideoCard = ({ title, description, thumbnail, videoUrl }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Preload image
    const img = new Image();
    img.src = thumbnail;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
  }, [thumbnail]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="video-card animate-fade-in">
      {isPlaying ? (
        <div className="w-full h-0 pb-[56.25%] relative">
          <iframe 
            src={videoUrl}
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={title}
          />
        </div>
      ) : (
        <div className="relative w-full h-0 pb-[56.25%] overflow-hidden bg-background/30 rounded-2xl">
          {imageError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <ImageIcon className="h-12 w-12 text-muted-foreground" />
              <span className="sr-only">Thumbnail unavailable</span>
            </div>
          ) : (
            <img 
              src={thumbnail} 
              alt={title} 
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          )}
          <div className="video-card-overlay" />
          <button 
            onClick={handlePlay} 
            className="video-play-button group"
            aria-label={`Play ${title}`}
          >
            <Play className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </button>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-lg md:text-xl font-semibold mb-1">{title}</h3>
          </div>
        </div>
      )}
      <div className="mt-3">
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
