
import { useEffect, useRef, useState } from 'react';

const AmbientAudio = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [userInteracted, setUserInteracted] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);

  // Lazy load the audio
  useEffect(() => {
    const audio = new Audio('/ambient-drone.mp3');
    audio.loop = true;
    audio.volume = 0.2;
    audioRef.current = audio;
    
    audio.addEventListener('canplaythrough', () => {
      setAudioLoaded(true);
    });
    
    // Clean up
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  // Handle play/pause based on user interaction
  useEffect(() => {
    if (userInteracted && audioLoaded && audioRef.current) {
      audioRef.current.play().catch(error => {
        console.info('Audio autoplay prevented:', JSON.stringify(error, null, 2));
      });
    }
  }, [userInteracted, audioLoaded]);

  // Add listener for user interaction
  useEffect(() => {
    const handleInteraction = () => {
      if (!userInteracted) {
        setUserInteracted(true);
      }
    };
    
    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    
    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [userInteracted]);

  return null;
};

export default AmbientAudio;
