import { useState } from "react";
import logoGitHub from "../assets/icons/logoGithub.svg";
import logoLinkedIn from "../assets/icons/logoLinkedin.svg";
import logoGmail from "../assets/icons/logoGmail.svg";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { name: "Home", href: "#main" },
    { name: "Skills", href: "#skills" },
    { name: "Languages", href: "#languages" }, // Add this new link
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
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
    <nav className="relative">
      {/* Main Navbar */}
      <div className="flex justify-between items-center pt-5 pb-5 shadow-sm bg-white">
        <div className="ml-1 sm:ml-5 hover:scale-110 ease-in-out duration-300">
          <h1 className="font-robotoslab text-primary font-bold text-sm sm:text-lg">
            Mario´s Portfolio
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-opensans text-primary hover:text-primary/80 font-semibold text-sm transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Resume Button & Social Links */}
        <div className="hidden md:flex items-center gap-6 mr-5">
          <a
            href="https://drive.google.com/file/d/1FJiggbu3oYMD4eMeafORA6stazZny_Oq/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="font-opensans text-primary bg-transparent border border-solid border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none ease-linear transition-all duration-150"
          >
            Download Resume
          </a>
          {socialLinks.map((link, index) => (
            <div key={index} className="hover:scale-125 ease-in-out duration-300">
              <a href={link.href} target="_blank" rel="noreferrer">
                <img src={link.img} alt={link.alt} />
              </a>
            </div>
          ))}
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden mr-5">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-primary p-2 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        } md:hidden z-50`}
      >
        <div className="p-4 space-y-4">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col items-center gap-4 py-2">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="font-opensans text-primary hover:text-primary/80 font-semibold text-sm transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Mobile Resume Button */}
          <div className="flex justify-center">
            <a
              href="https://drive.google.com/file/d/1FJiggbu3oYMD4eMeafORA6stazZny_Oq/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="font-opensans text-primary bg-transparent border border-solid border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none ease-linear transition-all duration-150"
            >
              Download Resume
            </a>
          </div>

          {/* Mobile Social Links */}
          <div className="flex justify-center items-center gap-10 py-2">
            {socialLinks.map((link, index) => (
              <div key={index} className="hover:scale-125 ease-in-out duration-300">
                <a href={link.href} target="_blank" rel="noreferrer">
                  <img src={link.img} alt={link.alt} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};