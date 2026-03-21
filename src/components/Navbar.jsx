import { useState, useEffect } from "react";
import logoGitHub from "../assets/icons/logoGithub.svg";
import logoLinkedIn from "../assets/icons/logoLinkedin.svg";
import logoGmail from "../assets/icons/logoGmail.svg";
import { Menu, X, Download, Sparkles, Languages, Moon, Sun } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useDarkMode } from "../context/DarkModeContext";
import { translations } from "../translations";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const t = translations[language].navbar;
  const resumeUrl =
    language === "en"
      ? "https://drive.google.com/file/d/1rh_bPJ6vH5IqFPW2QsUgLVVnBfJfyJix/view?usp=sharing"
      : "https://drive.google.com/file/d/12WatdnVxvhFv4sZIASl5T_l2AAjzLDgQ/view?usp=sharing";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    { name: t.home, href: "#main" },
    { name: t.about, href: "#about" },
    { name: t.skills, href: "#skills" },
    { name: t.languages, href: "#languages" },
    { name: t.certifications, href: "#certifications" },
    { name: t.projects, href: "#projects" },
    { name: t.freelance, href: "#freelance" },
    { name: t.contact, href: "#contact" },
  ];

  const socialLinks = [
    {
      href: "mailto:memateo@gmail.com",
      img: logoGmail,
      alt: "logo Gmail",
    },
    {
      href: "https://www.linkedin.com/in/marioestebanmateo/",
      img: logoLinkedIn,
      alt: "logo LinkedIn",
    },
    {
      href: "https://github.com/MarioEstebanMateo",
      img: logoGitHub,
      alt: "logo GitHub",
    },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl shadow-lg" 
        : "bg-white dark:bg-slate-900 shadow-sm"
    }`}>
      {/* Header with Logo */}
      <div className="border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="group flex items-center gap-2 flex-shrink-0">
            <a href="#main" className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-accent-600 group-hover:animate-spin" />
              <span className="font-robotoslab text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 font-bold text-xs sm:text-sm whitespace-nowrap">
                {t.logo}
              </span>
            </a>
          </div>

          {/* Desktop Controls */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300"
              title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-primary-600" />
              )}
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300 text-primary-600 dark:text-accent-400 font-bold text-xs"
              title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>

            {/* Resume Button */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:shadow-lg transition-all duration-300"
            >
              {t.resume}
            </a>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300"
                >
                  <img 
                    src={link.img} 
                    alt={link.alt} 
                    className={`w-5 h-5 ${link.alt.includes('GitHub') ? 'dark:invert dark:brightness-0 dark:contrast-200' : ''}`}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden relative p-2 text-primary-600 dark:text-accent-400"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between items-center">
              <span
                className={`w-6 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-accent-400 transition-all duration-500 origin-center ${
                  isMenuOpen ? "rotate-45 absolute top-1/2 -translate-y-1/2" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-accent-400 transition-all duration-500 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-accent-400 transition-all duration-500 origin-center ${
                  isMenuOpen ? "-rotate-45 absolute top-1/2 -translate-y-1/2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Centered Navigation Tabs */}
      <div className="hidden sm:block border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center overflow-x-auto">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-3 font-opensans text-gray-700 dark:text-gray-300 font-medium text-sm group whitespace-nowrap"
            >
              <span className="group-hover:text-primary-600 dark:group-hover:text-accent-400 transition-colors">
                {link.name}
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
          <div className="p-4 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-2">
              {navigationLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`group flex items-center justify-between px-4 py-2.5 rounded-lg hover:bg-primary-50 dark:hover:bg-slate-800 transition-all transform duration-500 ${
                    isMenuOpen 
                      ? "translate-x-0 opacity-100" 
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: isMenuOpen ? `${100 + index * 40}ms` : "0ms" }}
                >
                  <span className="font-opensans text-gray-700 dark:text-gray-300 font-medium text-sm group-hover:text-primary-600 dark:group-hover:text-accent-400">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-slate-700"></div>

            {/* Mobile Controls */}
            <div className="flex gap-3 justify-center">
              <button
                onClick={toggleDarkMode}
                className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-lg bg-gray-100 dark:bg-slate-800 transition-all"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-primary-600" />
                )}
                <span className="text-xs font-bold">{isDarkMode ? 'Light' : 'Dark'}</span>
              </button>

              <button
                onClick={toggleLanguage}
                className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-lg bg-gray-100 dark:bg-slate-800 transition-all text-primary-600 dark:text-accent-400 font-bold"
              >
                {language === 'en' ? 'ES' : 'EN'}
              </button>
            </div>

            {/* Mobile Resume Button */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-lg font-bold text-sm w-full"
            >
              {t.resume}
            </a>

            {/* Mobile Social Links */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
                >
                  <img 
                    src={link.img} 
                    alt={link.alt} 
                    className={`w-6 h-6 ${link.alt.includes('GitHub') ? 'dark:invert dark:brightness-0 dark:contrast-200' : ''}`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};