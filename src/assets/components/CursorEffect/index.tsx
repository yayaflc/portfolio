import { useEffect, useState } from 'react';
import './styles.css';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  type: 'star' | 'dot' | 'sparkle' | 'cross' | 'circle';
  size: number;
  rotation: number;
  rotationSpeed: number;
}

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  life: number;
  maxLife: number;
  delay: number;
}

const CursorEffect = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [trailParticles, setTrailParticles] = useState<TrailParticle[]>([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let animationId: number;
    let lastTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = (currentTime - lastTime) / 16.67;
      lastTime = currentTime;      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx * deltaTime,
            y: p.y + p.vy * deltaTime,
            vy: p.vy + 0.05 * deltaTime,
            life: p.life - deltaTime,
            rotation: p.rotation + p.rotationSpeed * deltaTime,
          }))
          .filter((p) => p.life > 0)
      );

      setTrailParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            life: p.life - deltaTime,
          }))
          .filter((p) => p.life > 0)
      );

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let lastX = 0;
    let lastY = 0;
    let trailId = 0;
    const symbols = ['✦', '·', '∘', '⋅', '◦'];    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);


      const particleCount = Math.min(Math.ceil(distance / 5) + 2, 8);
      
      for (let i = 0; i < particleCount; i++) {
        setTrailParticles((prev) => [
          ...prev,
          {
            id: trailId++,
            x: mouseX + (Math.random() - 0.5) * 3,
            y: mouseY + (Math.random() - 0.5) * 3,
            life: 40,
            maxLife: 40,
            delay: 0,
          },
        ]);
      }

      lastX = mouseX;
      lastY = mouseY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);  useEffect(() => {
    let particleId = 0;    const handleClick = (e: MouseEvent) => {
      const particleCount = 30;
      const newParticles: Particle[] = [];
      const types: ('star' | 'dot' | 'sparkle' | 'cross' | 'circle')[] = ['star', 'dot', 'sparkle', 'cross', 'circle'];

      for (let i = 0; i < particleCount; i++) {

        const angle = (Math.PI * 2 * i) / particleCount;
        const speed = 1.8 + Math.random() * 1.2;
        const type = types[Math.floor(Math.random() * types.length)];
        const size = 4 + Math.random() * 6;

        newParticles.push({
          id: particleId++,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 50 + Math.random() * 40,
          maxLife: 50 + Math.random() * 40,
          type,
          size,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 8,
        });
      }

      setParticles((prev) => [...prev, ...newParticles]);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);
  return (
    <div className="cursor-effect-container">
      {trailParticles.map((particle) => {
        const opacity = particle.life / particle.maxLife;
        const scale = 0.5 + opacity * 0.5;
        const symbols = ['✦', '·', '∘', '⋅', '◦'];
        const symbol = symbols[particle.id % symbols.length];
        
        return (
          <div
            key={`trail-${particle.id}`}
            className={`trail-particle ${isDark ? 'dark-mode' : 'light-mode'}`}
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              opacity: opacity * 0.7,
              transform: `translate(-50%, -50%) scale(${scale})`,
            }}
          >
            {symbol}
          </div>
        );
      })}
      {particles.map((particle) => {
        const opacity = particle.life / particle.maxLife;
        const scale = 0.5 + opacity * 0.6;
        
        const getSymbol = () => {
          switch (particle.type) {
            case 'star': return '✦';
            case 'sparkle': return '✧';
            case 'cross': return '✢';
            case 'circle': return '○';
            case 'dot': return '•';
            default: return '·';
          }
        };

        return (
          <div
            key={`particle-${particle.id}`}
            className={`explosion-particle ${isDark ? 'dark-mode' : 'light-mode'}`}
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              opacity: opacity * 0.75,
              transform: `translate(-50%, -50%) scale(${scale}) rotate(${particle.rotation}deg)`,
              fontSize: `${particle.size}px`,
            }}
          >
            {getSymbol()}
          </div>
        );
      })}
    </div>
  );
};

export default CursorEffect;
