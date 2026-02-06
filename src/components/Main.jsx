import { useState, useEffect } from "react";
import mariophoto from "../assets/img/mariophoto.png";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
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

export const Main = () => {
  const { language } = useLanguage();
  const t = translations[language].main;
  return (
    <div className="relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-600 to-primary-700 opacity-90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Image Section */}
        <div className="flex justify-center items-center pt-10 sm:pt-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-400 to-primary-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
            <div className="relative w-48 h-60 sm:w-64 sm:h-80 rounded-3xl border-4 border-white shadow-2xl overflow-hidden bg-white">
              <img
                src={mariophoto}
                alt="Mario's profile"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center px-6 py-12 sm:px-20 sm:py-16 text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-lg sm:text-xl font-opensans font-light tracking-wide animate-fade-in">
                {t.greeting}
              </p>
              <h1 className="font-robotoslab text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white animate-shimmer bg-[length:1000px_100%]">
                {t.name}
              </h1>
              <p className="text-xl sm:text-2xl font-opensans font-semibold text-blue-100">
                {t.title}
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 py-8">
              <div className="flex flex-col items-center backdrop-blur-sm bg-white/10 rounded-xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <CounterStat end={13} suffix="+" duration={2000} />
                <span className="text-sm sm:text-base font-opensans text-blue-100">{t.yearsExperience}</span>
              </div>
              <div className="flex flex-col items-center backdrop-blur-sm bg-white/10 rounded-xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <CounterStat end={50} suffix="+" duration={2000} />
                <span className="text-sm sm:text-base font-opensans text-blue-100">{t.projectsCompleted}</span>
              </div>
              <div className="flex flex-col items-center backdrop-blur-sm bg-white/10 rounded-xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <CounterStat end={100} suffix="%" duration={2000} />
                <span className="text-sm sm:text-base font-opensans text-blue-100">{t.clientSatisfaction}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-base sm:text-lg font-opensans leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
              <p className="text-blue-50">
                {t.description1}
              </p>
              <p className="text-blue-50">
                {t.description2}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-white text-primary-600 font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  {t.getInTouch}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
              >
                {t.viewProjects}
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 pt-8">
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

      {/* Bottom Wave */}
      <div className="relative z-10">
        <svg className="w-full h-12 sm:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </div>
  );
};
