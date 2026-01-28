import { useEffect, useState } from 'react';
import './styles.css';

interface MagicParticle {
  id: number;
  char: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
  scale: number;
}

const AnimatedBunnyArt = () => {
  const [particles, setParticles] = useState<MagicParticle[]>([]);
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
  }, []);  useEffect(() => {
    const magicChars = ['✦', '·', '∘', '⋅', '◦', '✧', '○', '•', '＊', '﹡', '⋆'];
    
    const createParticles = () => {
      const newParticles: MagicParticle[] = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          char: magicChars[Math.floor(Math.random() * magicChars.length)],
          x: -30 + Math.random() * 190,
          y: -20 + Math.random() * 80,
          delay: Math.random() * 4,
          duration: 4 + Math.random() * 3,
          scale: 0.6 + Math.random() * 0.6,
        });
      }
      
      setParticles(newParticles);
    };

    createParticles();
    
    const interval = setInterval(createParticles, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cat-art-container">
      <pre className={`cat-art ${isDark ? 'dark-mode' : 'light-mode'}`}>
{`        /ᐢ ⑅ ᐢ\      ♡ ₊ ˚
     ꒰ ˶• ༝ •˶꒱       ♡  ‧ ₊ ˚  ♡ .
      /
    ./  づ ~   :¨·.·¨: ₊   ˚
                ·..·‘   ₊   ˚   ♡`}
      </pre>
      <div className="magic-particles">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className={`magic-particle ${isDark ? 'dark-mode' : 'light-mode'}`}
            style={{
              left: `calc(50% + ${particle.x}px)`,
              top: `calc(50% + ${particle.y}px)`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              fontSize: `${8 + particle.scale * 4}px`,
              transform: `scale(${particle.scale})`,
            }}
          >
            {particle.char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBunnyArt;
