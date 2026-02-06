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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    { name: t.home, href: "#main" },
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
        ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg" 
        : "bg-white dark:bg-slate-900 shadow-sm"
    }`}>
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        {/* Logo */}
        <div className="group">
          <a href="#main" className="flex items-center gap-2">
            <div className={`transition-all duration-300 ${
              isScrolled ? "scale-90" : "scale-100"
            }`}>
              <Sparkles className="w-5 h-5 text-accent-600 group-hover:animate-spin" />
            </div>
            <h1 className="font-robotoslab text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 font-bold text-lg sm:text-xl transition-all duration-300 group-hover:scale-105">
              Mario's Portfolio
            </h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative font-opensans text-gray-700 dark:text-gray-300 font-medium text-sm group"
            >
              <span className="relative z-10 group-hover:text-primary-600 dark:group-hover:text-accent-400 transition-colors">
                {link.name}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Desktop Resume Button & Social Links */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="group relative p-2.5 rounded-full hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 dark:hover:from-slate-800 dark:hover:to-slate-700 transition-all duration-300 hover:scale-110 border-2 border-gray-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-accent-400"
            title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-yellow-500" />
            ) : (
              <Moon className="w-4 h-4 text-primary-600" />
            )}
          </button>

          {/* Language Switcher Button */}
          <button
            onClick={toggleLanguage}
            className="group relative p-2.5 rounded-full hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 dark:hover:from-slate-800 dark:hover:to-slate-700 transition-all duration-300 hover:scale-110 border-2 border-gray-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-accent-400"
            title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
          >
            <div className="flex items-center gap-1.5">
              <Languages className="w-4 h-4 text-primary-600 dark:text-accent-400" />
              <span className="text-sm font-bold text-primary-600 dark:text-accent-400">
                {language === 'en' ? 'ES' : 'EN'}
              </span>
            </div>
          </button>

          <a
            href="https://drive.google.com/file/d/1FJiggbu3oYMD4eMeafORA6stazZny_Oq/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-accent-600 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-4 h-4" />
              {t.resume}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              target="_blank" 
              rel="noreferrer"
              className="group relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110"
            >
              <img src={link.img} alt={link.alt} className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Mobile Dark Mode, Language Switcher & Hamburger Menu */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Mobile Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="relative p-2 rounded-lg hover:bg-primary-50 dark:hover:bg-slate-800 transition-all duration-300 border border-gray-200 dark:border-slate-700"
            title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-yellow-500" />
            ) : (
              <Moon className="w-4 h-4 text-primary-600" />
            )}
          </button>

          {/* Mobile Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="relative p-2 rounded-lg hover:bg-primary-50 dark:hover:bg-slate-800 transition-all duration-300 border border-gray-200 dark:border-slate-700"
            title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
          >
            <div className="flex items-center gap-1">
              <Languages className="w-4 h-4 text-primary-600 dark:text-accent-400" />
              <span className="text-xs font-bold text-primary-600 dark:text-accent-400">
                {language === 'en' ? 'ES' : 'EN'}
              </span>
            </div>
          </button>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative p-2 text-primary-600 dark:text-accent-400 hover:bg-primary-50 dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
          <div className="p-6 space-y-6">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="group flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 dark:hover:from-slate-800 dark:hover:to-slate-700 transition-all duration-300"
                >
                  <span className="font-opensans text-gray-700 dark:text-gray-300 font-medium group-hover:text-primary-600 dark:group-hover:text-accent-400 transition-colors">
                    {link.name}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-primary-400 dark:bg-accent-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-slate-700"></div>

            {/* Mobile Resume Button */}
            <a
              href="https://drive.google.com/file/d/1FJiggbu3oYMD4eMeafORA6stazZny_Oq/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:shadow-lg transition-all duration-300 w-full"
            >
              <Download className="w-4 h-4" />
              {t.resume}
            </a>

            {/* Mobile Social Links */}
            <div className="flex justify-center items-center gap-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110"
                >
                  <img src={link.img} alt={link.alt} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};