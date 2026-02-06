import { useState, useEffect } from "react";
import certificateEnglish from "../assets/img/certificateEnglish.jpg";
import { Globe, Award, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import { useInView } from "../hooks/useInView";

export const Languages = () => {
  const { language } = useLanguage();
  const t = translations[language].languages;
  const [barWidth, setBarWidth] = useState(0);
  const [barRef, isVisible] = useInView({ threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      setTimeout(() => {
        setBarWidth(95);
      }, 100);
    }
  }, [isVisible, hasAnimated]);
  return (
    <div className="pb-16 px-5 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-4">
            <Globe className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">{t.multilingual}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-robotoslab mb-4">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-opensans">
            {t.fluentCommunication}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Language Card */}
        <div className="max-w-2xl mx-auto">
          <div className="group relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            
            {/* Card */}
            <div className="relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              {/* Badge */}
              <div className="absolute top-4 right-4 z-20 backdrop-blur-sm bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                <Award className="w-3 h-3 inline mr-1" />
                C2 Level
              </div>

              {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-700 dark:to-slate-600">
                <img
                  src={certificateEnglish}
                  alt="English Language Certificate"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 font-robotoslab">
                      {t.englishLanguage}
                    </h3>
                    <p className="text-sm text-blue-600 font-semibold">{t.c2LevelCertified}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="font-opensans"><span className="font-semibold dark:text-gray-300">{t.duration}:</span> {t.durationYears}</p>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="font-opensans"><span className="font-semibold dark:text-gray-300">{t.institution}:</span> ACIO</p>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="font-opensans"><span className="font-semibold dark:text-gray-300">{t.location}:</span> {t.locationBuenosAires}</p>
                  </div>
                </div>

                {/* Proficiency Bar */}
                <div className="mb-6" ref={barRef}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{t.proficiencyLevel}</span>
                    <span className="text-sm font-bold text-blue-600">{t.c2Mastery}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out" 
                      style={{width: `${barWidth}%`}}
                    ></div>
                  </div>
                </div>

                {/* Button */}
                <a
                  href="https://cert.efset.org/qQdvD9"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  {t.viewCertificate}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};