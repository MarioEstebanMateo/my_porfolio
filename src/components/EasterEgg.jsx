import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const EasterEgg = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    setShowConfetti(true);
    setFadeOut(false);
    
    // Iniciar fade-out después de 6 segundos
    setTimeout(() => {
      setFadeOut(true);
    }, 6000);

    // Detener confetti totalmente después de 8 segundos (2 segundos de fade)
    setTimeout(() => {
      setShowConfetti(false);
      setFadeOut(false);
    }, 8000);
  };

  return (
    <>
      {/* Confetti Fixed Container */}
      {showConfetti && (
        <div className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={500}
            gravity={0.2}
            initialVelocityY={5}
          />
        </div>
      )}

      {/* Easter Egg Button - Discreto */}
      <button
        onClick={handleClick}
        className="fixed bottom-28 right-6 z-40 opacity-30 hover:opacity-100 transition-opacity duration-300 group flex flex-col items-center gap-1"
        title="Click me! 🎉"
      >
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          
          {/* Pulsing effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 animate-pulse opacity-20"></div>
        </div>
        
        {/* "Click me!" text */}
        <span className="text-xs font-bold text-primary-600 dark:text-accent-400 whitespace-nowrap group-hover:scale-110 transition-transform">
          {t.easterEgg}
        </span>
      </button>
    </>
  );
};
