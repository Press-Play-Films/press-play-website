
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

  // Extract video ID from various Vimeo URL formats
  const getVimeoId = (url: string): string | null => {
    if (!url) return null;
    
    // Handle different Vimeo URL formats
    const patterns = [
      /vimeo\.com\/(\d+)/,                                // vimeo.com/123456789
      /player\.vimeo\.com\/video\/(\d+)/,                 // player.vimeo.com/video/123456789
      /vimeo\.com\/channels\/[a-zA-Z0-9]+\/(\d+)/,        // vimeo.com/channels/staffpicks/123456789
      /vimeo\.com\/video\/(\d+)/                          // vimeo.com/video/123456789
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    
    return null;
  };
  
  // Get the Vimeo video ID
  const vimeoId = getVimeoId(videoUrl);
  
  // Generate thumbnail URL from Vimeo video ID
  const generateThumbnailUrl = (): string => {
    if (vimeoId) {
      // Use vumbnail.com as the primary thumbnail source for Vimeo videos
      return `https://vumbnail.com/${vimeoId}.jpg`;
    }
    return thumbnail;
  };

  const effectiveThumbnail = generateThumbnailUrl();

  useEffect(() => {
    // Reset states when thumbnail changes
    setImageLoaded(false);
    setImageError(false);
    
    // Preload image only if we have a thumbnail
    if (effectiveThumbnail) {
      const img = new Image();
      img.src = effectiveThumbnail;
      
      img.onload = () => {
        console.log(`Successfully loaded thumbnail: ${effectiveThumbnail}`);
        setImageLoaded(true);
      };
      
      img.onerror = (e) => {
        console.error(`Failed to load thumbnail: ${effectiveThumbnail}`, e);
        setImageError(true);
      };
      
      // Log for debugging
      console.log(`Attempting to load thumbnail: ${effectiveThumbnail}`);
      
      return () => {
        // Cancel image loading on unmount
        img.onload = null;
        img.onerror = null;
      };
    } else {
      // No thumbnail available
      setImageError(true);
    }
  }, [effectiveThumbnail]);

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
              {effectiveThumbnail && (
                <img 
                  src={effectiveThumbnail} 
                  alt={title} 
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  loading="lazy"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              )}
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
