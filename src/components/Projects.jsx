import disenoWeb from "../assets/img/disenoWeb.png";
import eCommerce from "../assets/img/eCommerce.png";
import eCommerceReact from "../assets/img/eCommerceReact.png";
import eCommerceReactWithNodeBackEnd from "../assets/img/eCommerceReactWithNodeBackEnd.png";
import blackJack from "../assets/img/blackJack.png";
import juegoDeCartasColeccionables from "../assets/img/juegoDeCartasColeccionables.png";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const projects = [
    {
      title: "Web Design",
      image: disenoWeb,
      description: "Modern responsive website with stunning design and smooth animations",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      link: "https://proyecto-integrador-diseno-web-ten.vercel.app/",
      github: "#",
      featured: true,
    },
    {
      title: "eCommerce Vanilla JavaScript",
      image: eCommerce,
      description: "Full-featured eCommerce platform built with vanilla JavaScript",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      link: "https://proyecto-integrador-javascript-neon.vercel.app/",
      github: "#",
    },
    {
      title: "eCommerce React with Local Storage",
      image: eCommerceReact,
      description: "React-based shopping cart with persistent local storage",
      technologies: ["HTML", "CSS", "Bootstrap", "React"],
      link: "https://proyecto-integrador-react-gamma.vercel.app/",
      github: "#",
    },
    {
      title: "eCommerce with Node Backend",
      image: eCommerceReactWithNodeBackEnd,
      description: "Full-stack eCommerce with Node.js and Express backend",
      technologies: ["React", "Node.js", "Express", "CSS"],
      link: "https://proyecto-integrador-back-end.vercel.app/",
      github: "#",
      featured: true,
    },
    {
      title: "BlackJack Game",
      image: blackJack,
      description: "Classic blackjack card game with smooth animations",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      link: "https://blackjack-drab.vercel.app/",
      github: "#",
    },
    {
      title: "Collectable Card Game",
      image: juegoDeCartasColeccionables,
      description: "Interactive Pokemon TCG card game built with React",
      technologies: ["HTML", "CSS", "React"],
      link: "https://poke-tcg-card-game.vercel.app/",
      github: "#",
    },
  ];

  return (
    <div className="py-16 px-5 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-semibold text-primary-600">{t.myWork}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 font-robotoslab mb-4">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-opensans max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  ⭐ Featured
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-4 transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 font-robotoslab group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-primary-50 to-accent-50 text-primary-700 text-xs font-semibold rounded-full border border-primary-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    View Live
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-bold font-robotoslab mb-3">
              Want to see more?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Check out my GitHub for more projects and contributions
            </p>
            <a
              href="https://github.com/MarioEstebanMateo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
