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

const AnimatedKaomoji = () => {
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
    const magicChars = ['✦', '·', '∘', '⋅', '◦', '✧', '○', '•', '＊', '﹡', '⋆', '♡', '❀'];
    
    const createParticles = () => {      const newParticles: MagicParticle[] = [];
      for (let i = 0; i < 60; i++) {
        newParticles.push({
          id: i,
          char: magicChars[Math.floor(Math.random() * magicChars.length)],
          x: -150 + Math.random() * 300,
          y: -200 + Math.random() * 400,
          delay: Math.random() * 3,
          duration: 3 + Math.random() * 2,
          scale: 0.6 + Math.random() * 0.8,
        });
      }
      
      setParticles(newParticles);
    };

    createParticles();
    
    const interval = setInterval(createParticles, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="kaomoji-container">
      <pre className={`kaomoji-ascii ${isDark ? 'dark-mode' : 'light-mode'}`}>
{`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⢀⣠⠤⣶⣶⣤⣀⡀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⠟⢦⣤⡄⠒⠋⠁⠀⠀⢻⡝⢧⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⢿⡏⠀⢀⡀⠀⠀⠀⠀⠀⢷⢸⡇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠘⠃⠀⠀⠀⠀⠀⣸⣸⠃
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠃⠁⠉⢳⣴⢻⣽⣟⢦⠘⠃⠀⠀⠀⠀⠀⠀⠀⢀⡿⠃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠁⠀⠀⠀⠋⠐⠉⠙⣿⢿⡇⠀⠀⣀⡀⠀⠀⢀⡴⣿⠃⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢾⣄⠀⠀⠀⠀⠀⣰⠟⣽⠁⠀⣀⠓⠃⠀⢠⡞⣱⠃⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣾⣿⣧⣦⣤⣤⡔⢋⠈⠁⠀⠀⠀⠀⠀⠀⠏⡼⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠶⠀⠀⠀⢸⣻⣿⣿⣯⠟⠋⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣞⣳⠀⠀⠀⠀⠀⠙⠛⠉⠀⠀⠀⢠⡀⢠⡄⠀⢀⡾⡯⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⢀⣇⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣡⡾⢋⡼⠃⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠄⠉⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⣄⣸⢸⢠⡆⠀⠀⠀⠀⠀⠰⠞⠁⠰⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣀⣀⣠⡽⠛⠘⢿⣥⣤⣤⣤⣀⠀⠤⠠⢤⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣠⠶⣿⡛⠁⠀⠉⠉⠉⠙⣿⣦⢠⣰⠚⣋⣉⣁⣀⣤⠤⣶⣫⡤⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠈⠓⠚⠿⠯⠭⠭⠭⠤⠼⠏⢹⢾⠿⠿⠟⠓⠒⠚⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠀⢸⣼⠀⠀⠀⠸⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⡄⢠⡏⠀⠘⣿⠀⠀⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⡞⣤⠏⠀⠀⠀⡿⠀⠀⠀⢴⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣾⡾⠃⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣸⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡤⡶⡦⢤⣀⡴⠋⣥⣍⡻⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⢿⠀⠠⣶⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⣥⣾⣷⣷⣶⡝⠂⠈⠀⠘⠓⢻⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢸⠘⣆⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⢸⣸⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⣔⢸⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠘⣆⠹⣆⠀⢠⡆⠀⢀⡀⠈⠁⠀⢸⠐⣿⣿⡀⠀⠀⠀⠀⢀⢠⣶⣟⠟⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠘⠫⢘⢧⣼⣷⣂⡈⠉⠀⢀⣀⡌⢧⠻⣿⣷⡀⠀⠀⠀⠨⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠉⢉⣿⡟⠿⠥⣶⣟⣉⣁⣠⡤⠴⠖⠙⠟⣴⣀⠀⣽⡿⣳⠇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡴⠃⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠓⠦⢤⣈⣨⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢈⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`}
      </pre>      <div className="kaomoji-particles">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className={`kaomoji-magic-particle ${isDark ? 'dark-mode' : 'light-mode'}`}
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              fontSize: `${6 + particle.scale * 3}px`,
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

export default AnimatedKaomoji;
