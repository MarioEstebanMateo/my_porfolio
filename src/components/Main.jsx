import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import mariophoto from "../assets/img/mariophoto.png";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useDarkMode } from "../context/DarkModeContext";
import { translations } from "../translations";

// Counter component for animated numbers
const CounterStat = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span className="text-3xl sm:text-4xl font-bold font-robotoslab">
      {count}{suffix}
    </span>
  );
};

CounterStat.propTypes = {
  end: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  duration: PropTypes.number
};

export const Main = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useDarkMode();
  const t = translations[language].main;
  return (
    <div className="relative overflow-hidden">
      {/* Animated background gradient - Light Mode */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        isDarkMode ? 'opacity-0 pointer-events-none' : 'opacity-90'
      } bg-gradient-to-br from-primary-500 via-accent-600 to-primary-700`}></div>
      
      {/* Animated background gradient - Dark Mode */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        isDarkMode ? 'opacity-90' : 'opacity-0 pointer-events-none'
      } bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950`}></div>
      
      <div className={`absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20`}></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center px-6 py-12 sm:px-20 sm:py-16 text-white min-h-screen">
          <div className="max-w-3xl w-full space-y-8">
            
            {/* Image + Greeting + Name + Title - Horizontal Layout */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              {/* Hero Image - Izquierda */}
              <div className="flex-shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent-400 to-primary-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                  <div className="relative w-28 h-36 sm:w-40 sm:h-52 rounded-2xl border-4 border-white dark:border-slate-700 shadow-2xl overflow-hidden bg-white dark:bg-slate-800">
                    <img
                      src={mariophoto}
                      alt="Mario's profile"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Greeting + Name + Title - Derecha */}
              <div className="text-center lg:text-left space-y-3">
              <p className="text-lg sm:text-xl font-opensans font-light tracking-wide animate-fade-in">
                {t.greeting}
              </p>
              <h1 className="font-robotoslab text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white animate-shimmer bg-[length:1000px_100%]">
                {t.name}
              </h1>
              <p className="text-base sm:text-xl font-opensans font-semibold text-blue-100 leading-relaxed px-4">
                {t.title}
              </p>
              </div>
            </div>

            {/* Stats - Grid centrado */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              <div className="flex flex-col items-center backdrop-blur-sm bg-white/10 rounded-lg sm:rounded-xl px-3 sm:px-6 py-3 sm:py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <CounterStat end={13} suffix="+" duration={2000} />
                <span className="text-xs sm:text-sm font-opensans text-blue-100 mt-2">{t.yearsExperience}</span>
              </div>
              <div className="flex flex-col items-center backdrop-blur-sm bg-white/10 rounded-lg sm:rounded-xl px-3 sm:px-6 py-3 sm:py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <CounterStat end={50} suffix="+" duration={2000} />
                <span className="text-xs sm:text-sm font-opensans text-blue-100 mt-2">{t.projectsCompleted}</span>
              </div>
              <div className="flex flex-col items-center backdrop-blur-sm bg-white/10 rounded-lg sm:rounded-xl px-3 sm:px-6 py-3 sm:py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <CounterStat end={100} suffix="%" duration={2000} />
                <span className="text-xs sm:text-sm font-opensans text-blue-100 mt-2">{t.clientSatisfaction}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-sm sm:text-base font-opensans leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
              <p className="text-blue-50">
                {t.description1}
              </p>
              <p className="text-blue-50">
                {t.description2}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-white text-primary-600 font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5 group-hover:animate-bounce" />
                  {t.getInTouch}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#projects"
                className="group px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                {t.viewProjects}
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/MarioEstebanMateo"
                target="_blank"
                rel="noreferrer"
                className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white hover:border-white transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6 text-white group-hover:text-primary-600 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/marioestebanmateo/"
                target="_blank"
                rel="noreferrer"
                className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white hover:border-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-white group-hover:text-primary-600 transition-colors" />
              </a>
              <a
                href="mailto:memateo@gmail.com"
                className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white hover:border-white transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6 text-white group-hover:text-primary-600 transition-colors" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
