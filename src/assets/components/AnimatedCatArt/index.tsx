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

const AnimatedCatArt = () => {
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
      for (let i = 0; i < 25; i++) {
        newParticles.push({
          id: i,
          char: magicChars[Math.floor(Math.random() * magicChars.length)],
          x: -50 + Math.random() * 280,
          y: -40 + Math.random() * 140,
          delay: Math.random() * 3,
          duration: 3 + Math.random() * 2,
          scale: 0.6 + Math.random() * 0.6,
        });
      }
      
      setParticles(newParticles);
    };

    createParticles();
    
    const interval = setInterval(createParticles, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cat-art-container">
      <pre className={`cat-art ${isDark ? 'dark-mode' : 'light-mode'}`}>
{`               ∧＿∧
            （𓂂︲⩊︲𓂂)つ━♡・*。
            ⊂　　 ノ 　　　・゜+.
              しーＪ　　　°。+ *´¨)
        　　　　　　　　     　.· ´¸.·*´¨) ¸.·*¨)
        　　　　　　　　　　                 (¸.·´ (¸.·'* ♡`}
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

export default AnimatedCatArt;
