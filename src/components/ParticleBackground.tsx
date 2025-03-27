import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  speedX: number;
  speedY: number;
}

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [stars, setStars] = useState<Particle[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    // Listen for changes to motion preference
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaChange);
    
    // Create particles - reduced count for better performance
    const particleCount = prefersReducedMotion ? 8 : 15;
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 20,
        opacity: (Math.random() * 0.07 + 0.03) / 4,
        delay: Math.random() * 5,
        speedX: (Math.random() - 0.5) * 0.08,
        speedY: (Math.random() - 0.5) * 0.08,
      });
    }
    
    setParticles(newParticles);
    
    // Create stars - reduced count for better performance
    const starCount = prefersReducedMotion ? 50 : 100;
    const newStars: Particle[] = [];
    
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() < 0.6 ? 1 : Math.random() < 0.9 ? 2 : 3,
        opacity: Math.random() * 0.5 + 0.3,
        delay: Math.random() * 5,
        speedX: (Math.random() - 0.5) * 0.015,
        speedY: (Math.random() - 0.5) * 0.015,
      });
    }
    
    setStars(newStars);

    // Animation loop for subtle movement (skip if reduced motion is preferred)
    if (!prefersReducedMotion) {
      let animationFrameId: number;
      let lastTime = 0;
      let frameCount = 0;

      const animate = (time: number) => {
        if (lastTime === 0) lastTime = time;
        const deltaTime = time - lastTime;
        lastTime = time;
        frameCount++;

        // Update positions every few frames for better performance
        // and to keep movement very subtle
        if (deltaTime > 0 && frameCount % 3 === 0) {
          setParticles(prevParticles => 
            prevParticles.map(particle => {
              // Randomly change direction occasionally for more organic movement
              if (Math.random() < 0.005) {
                particle.speedX = (Math.random() - 0.5) * 0.08;
                particle.speedY = (Math.random() - 0.5) * 0.08;
              }
              
              let newX = particle.x + particle.speedX;
              let newY = particle.y + particle.speedY;
              
              // Wrap around edges with a small buffer
              if (newX > 105) newX = -5;
              if (newX < -5) newX = 105;
              if (newY > 105) newY = -5;
              if (newY < -5) newY = 105;
              
              return {
                ...particle,
                x: newX,
                y: newY
              };
            })
          );

          setStars(prevStars => 
            prevStars.map(star => {
              // Randomly change direction occasionally for more organic movement
              if (Math.random() < 0.002) {
                star.speedX = (Math.random() - 0.5) * 0.015;
                star.speedY = (Math.random() - 0.5) * 0.015;
              }
              
              let newX = star.x + star.speedX;
              let newY = star.y + star.speedY;
              
              // Wrap around edges with a small buffer
              if (newX > 105) newX = -5;
              if (newX < -5) newX = 105;
              if (newY > 105) newY = -5;
              if (newY < -5) newY = 105;
              
              return {
                ...star,
                x: newX,
                y: newY
              };
            })
          );
        }

        animationFrameId = requestAnimationFrame(animate);
      };

      animationFrameId = requestAnimationFrame(animate);
      
      return () => {
        cancelAnimationFrame(animationFrameId);
        mediaQuery.removeEventListener('change', handleMediaChange);
      };
    }
    
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true">
      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={`particle-${particle.id}`}
          className="absolute rounded-full bg-blue-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            filter: 'blur(8px)',
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.5s ease',
            animation: prefersReducedMotion ? 'none' : `pulse ${8 + particle.delay}s ease-in-out infinite`,
            animationDelay: prefersReducedMotion ? '0s' : `${particle.delay}s`,
            zIndex: 1,
          }}
        />
      ))}
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className={`star ${star.size === 1 ? 'small' : star.size === 2 ? 'medium' : 'large'}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.5s ease',
            animation: prefersReducedMotion ? 'none' : `pulse 3s ease-in-out infinite`,
            animationDelay: prefersReducedMotion ? '0s' : `${star.delay}s`,
            zIndex: 0,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
