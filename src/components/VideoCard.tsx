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
  const [fallbackThumbnail, setFallbackThumbnail] = useState<string | null>(null);

  // Extract video ID from various Vimeo URL formats
  const getVimeoId = (url: string): string | null => {
    if (!url) return null;
    
    // Handle different Vimeo URL formats
    const patterns = [
      /vimeo\.com\/(\d+)/,                               
      /player\.vimeo\.com\/video\/(\d+)/,                
      /vimeo\.com\/channels\/[a-zA-Z0-9]+\/(\d+)/,        
      /vimeo\.com\/video\/(\d+)/                        
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
  
  useEffect(() => {
    // Reset states when thumbnail or videoUrl changes
    setImageLoaded(false);
    setImageError(false);
    setFallbackThumbnail(null);
    
    const tryLoadingThumbnail = async () => {
      // Try original thumbnail first
      if (thumbnail) {
        const originalImg = new Image();
        originalImg.src = thumbnail;
        
        originalImg.onload = () => {
          console.log(`Successfully loaded original thumbnail: ${thumbnail}`);
          setImageLoaded(true);
        };
        
        originalImg.onerror = async () => {
          console.log(`Failed to load original thumbnail: ${thumbnail}, trying Vimeo ID options`);
          
          // Try multiple Vimeo thumbnail formats if we have a video ID
          if (vimeoId) {
            const thumbnailOptions = [
              `https://vumbnail.com/${vimeoId}.jpg`,
              `https://vumbnail.com/${vimeoId}_large.jpg`,
              `https://i.vimeocdn.com/video/${vimeoId}_640.jpg`,
              `https://i.vimeocdn.com/video/${vimeoId}.jpg`
            ];
            
            for (const option of thumbnailOptions) {
              try {
                const img = new Image();
                const loadPromise = new Promise((resolve, reject) => {
                  img.onload = resolve;
                  img.onerror = reject;
                });
                
                img.src = option;
                
                await loadPromise;
                console.log(`Successfully loaded fallback thumbnail: ${option}`);
                setFallbackThumbnail(option);
                setImageLoaded(true);
                return;
              } catch (err) {
                console.log(`Failed to load fallback thumbnail: ${option}`);
              }
            }
          }
          
          // All attempts failed
          console.error(`Failed to load any thumbnail for: ${title}`);
          setImageError(true);
        };
      } else if (vimeoId) {
        // No original thumbnail provided, try Vimeo ID directly
        const vimeoThumbnail = `https://vumbnail.com/${vimeoId}.jpg`;
        const img = new Image();
        img.src = vimeoThumbnail;
        
        img.onload = () => {
          console.log(`Successfully loaded Vimeo thumbnail: ${vimeoThumbnail}`);
          setFallbackThumbnail(vimeoThumbnail);
          setImageLoaded(true);
        };
        
        img.onerror = () => {
          console.error(`Failed to load Vimeo thumbnail: ${vimeoThumbnail}`);
          setImageError(true);
        };
      } else {
        // No thumbnail and no video ID
        setImageError(true);
      }
    };
    
    tryLoadingThumbnail();
  }, [thumbnail, videoUrl, vimeoId, title]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  // Use fallback thumbnail if available, otherwise use original
  const displayThumbnail = fallbackThumbnail || thumbnail;

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
              {displayThumbnail && (
                <img 
                  src={displayThumbnail} 
                  alt={title} 
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  loading="lazy"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    // If this is the fallback already failing, show error
                    if (fallbackThumbnail) {
                      setImageError(true);
                    }
                    // Otherwise the useEffect will handle fallback loading
                  }}
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
