
import { useState, useEffect, useRef } from 'react';

const AmbientAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio('/ambient-drone.mp3');
    audioRef.current = audio;
    
    // Configure audio
    audio.loop = true;
    audio.volume = 0.15; // Start with very low volume (15%)
    
    // Fade in the audio over 5 seconds
    const fadeIn = () => {
      let currentVolume = 0;
      audio.volume = currentVolume;
      
      const fadeInterval = setInterval(() => {
        currentVolume += 0.01;
        if (currentVolume >= 0.15) {
          clearInterval(fadeInterval);
          audio.volume = 0.15; // Ensure we end at exactly 15%
        } else {
          audio.volume = currentVolume;
        }
      }, 250); // Increase volume every 250ms for a 5-second fade in
      
      audio.play().catch(e => console.log('Audio autoplay prevented:', e));
      setIsPlaying(true);
    };
    
    // Add event listeners for user interaction to allow autoplay
    const handleUserInteraction = () => {
      if (!isPlaying) {
        fadeIn();
        // Remove event listeners after first interaction
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
      }
    };
    
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);
    
    // Try to play automatically (may be blocked by browsers)
    fadeIn();
    
    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [isPlaying]);

  return null; // This component doesn't render anything
};

export default AmbientAudio;
