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

  useEffect(() => {
    // Create particles
    const particleCount = 15;
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 20,
        opacity: Math.random() * 0.07 + 0.03,
        delay: Math.random() * 5,
        speedX: (Math.random() - 0.5) * 0.05,
        speedY: (Math.random() - 0.5) * 0.05,
      });
    }
    
    setParticles(newParticles);
    
    // Create stars
    const starCount = 100;
    const newStars: Particle[] = [];
    
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() < 0.6 ? 1 : Math.random() < 0.9 ? 2 : 3,
        opacity: Math.random() * 0.5 + 0.3,
        delay: Math.random() * 5,
        speedX: (Math.random() - 0.5) * 0.01,
        speedY: (Math.random() - 0.5) * 0.01,
      });
    }
    
    setStars(newStars);

    // Animation loop for subtle movement
    let animationFrameId: number;
    let lastTime = 0;

    const animate = (time: number) => {
      if (lastTime === 0) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;

      // Only update positions every few frames to keep it very subtle
      if (deltaTime > 0) {
        setParticles(prevParticles => 
          prevParticles.map(particle => {
            let newX = particle.x + particle.speedX;
            let newY = particle.y + particle.speedY;
            
            // Wrap around edges
            if (newX > 100) newX = 0;
            if (newX < 0) newX = 100;
            if (newY > 100) newY = 0;
            if (newY < 0) newY = 100;
            
            return {
              ...particle,
              x: newX,
              y: newY
            };
          })
        );

        setStars(prevStars => 
          prevStars.map(star => {
            let newX = star.x + star.speedX;
            let newY = star.y + star.speedY;
            
            // Wrap around edges
            if (newX > 100) newX = 0;
            if (newX < 0) newX = 100;
            if (newY > 100) newY = 0;
            if (newY < 0) newY = 100;
            
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
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
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
            transition: 'left 4s ease-in-out, top 4s ease-in-out',
            animation: `pulse ${8 + particle.delay}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
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
            transition: 'left 10s ease-in-out, top 10s ease-in-out',
            animation: `pulse 3s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
