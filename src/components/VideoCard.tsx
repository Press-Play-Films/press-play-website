
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
    // Reset states when thumbnail changes
    setImageLoaded(false);
    setImageError(false);
    
    // Preload image
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = thumbnail;
    
    img.onload = () => {
      console.log(`Successfully loaded thumbnail: ${thumbnail}`);
      setImageLoaded(true);
    };
    
    img.onerror = (e) => {
      console.error(`Failed to load thumbnail: ${thumbnail}`, e);
      setImageError(true);
    };
    
    // Log for debugging
    console.log(`Attempting to load thumbnail: ${thumbnail}`);
    
    return () => {
      // Cancel image loading on unmount
      img.onload = null;
      img.onerror = null;
    };
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
            <>
              <div className={`absolute inset-0 flex items-center justify-center bg-muted/50 ${imageLoaded ? 'hidden' : 'block'}`}>
                <ImageIcon className="h-8 w-8 text-muted-foreground/50 animate-pulse" />
              </div>
              <img 
                src={thumbnail} 
                alt={title} 
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                crossOrigin="anonymous"
              />
            </>
          )}
          <div className="video-card-overlay absolute inset-0 bg-black/30 transition-opacity hover:opacity-60 opacity-40" />
          <button 
            onClick={handlePlay} 
            className="video-play-button group absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            aria-label={`Play ${title}`}
          >
            <Play className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
          </button>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-lg md:text-xl font-semibold mb-1 drop-shadow-md">{title}</h3>
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
