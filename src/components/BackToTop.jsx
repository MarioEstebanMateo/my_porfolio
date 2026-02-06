// components/BackToTop.jsx
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`group fixed bottom-6 right-6 bg-gradient-to-r from-primary-600 to-accent-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10 pointer-events-none'
      } z-50 hover:scale-110`}
      aria-label={t.backToTop}
    >
      <div className="relative">
        <ArrowUp size={24} className="transform group-hover:-translate-y-1 transition-transform" />
        <div className="absolute inset-0 bg-white/20 rounded-full blur group-hover:bg-white/30 transition-colors"></div>
      </div>
    </button>
  );
};