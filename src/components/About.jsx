import { Code, Brain, Zap, Award, Target } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const About = () => {
  const { language } = useLanguage();
  const aboutContent = {
    en: {
      title: "About Me",
      subtitle: "Systems Analyst, Full Stack Developer, UX/UI Designer & AI Engineer",
      intro:
        "I'm a passionate developer with 5+ years of experience building scalable applications and solving complex problems. My journey spans from web design fundamentals to cutting-edge AI integration.",
      highlights: [
        {
          icon: Code,
          title: "Full Stack Development",
          description: "Expertise in React, Node.js, and modern web technologies with a focus on clean, maintainable code.",
        },
        {
          icon: Brain,
          title: "AI & Machine Learning",
          description: "Recently ventured into AI engineering, working with LLMs and prompt engineering to create intelligent solutions.",
        },
        {
          icon: Zap,
          title: "Performance Focused",
          description: "Building fast, responsive applications optimized for all devices with minimal bundle sizes.",
        },
        {
          icon: Award,
          title: "Continuous Learner",
          description: "Always exploring new technologies and best practices to stay at the forefront of development.",
        },
      ],
      journey: "My Development Journey",
      journeySteps: [
        { year: "2018", title: "Started with Web Design", desc: "Foundation in HTML, CSS, and UX principles" },
        { year: "2020", title: "JavaScript Mastery", desc: "Deep dive into vanilla JS and DOM manipulation" },
        { year: "2021", title: "React Era", desc: "Frontend development with React and modern tooling" },
        { year: "2022", title: "Full Stack", desc: "Expanded to backend with Node.js and databases" },
        { year: "2025", title: "AI Engineering", desc: "Exploring LLMs, prompt engineering, and AI integration" },
      ],
      passion: "What Drives Me",
      passionText:
        "I'm passionate about creating beautiful, functional applications that make a real impact. I love pushing the boundaries of what's possible with web technologies and delivering exceptional solutions through my work.",
      cta: "Let's work together",
    },
    es: {
      title: "Sobre Mí",
      subtitle: "Analista de Sistemas, Desarrollador Full Stack, Diseñador UX/UI & Ingeniero IA",
      intro:    
        "Soy un desarrollador apasionado con 5+ años de experiencia construyendo aplicaciones escalables y resolviendo problemas complejos. Mi trayectoria abarca desde los fundamentos del diseño web hasta la integración de IA de vanguardia.",
      highlights: [
        {
          icon: Code,
          title: "Desarrollo Full Stack",
          description: "Experiencia en React, Node.js y tecnologías web modernas con enfoque en código limpio y mantenible.",
        },
        {
          icon: Brain,
          title: "IA & Machine Learning",
          description: "Recientemente incursioné en ingeniería de IA, trabajando con LLMs e ingeniería de prompts para soluciones inteligentes.",
        },
        {
          icon: Zap,
          title: "Enfoque en Rendimiento",
          description: "Construcción de aplicaciones rápidas y responsivas optimizadas para todos los dispositivos.",
        },
        {
          icon: Award,
          title: "Aprendizaje Continuo",
          description: "Siempre explorando nuevas tecnologías y mejores prácticas para estar a la vanguardia.",
        },
      ],
      journey: "Mi Trayectoria Profesional",
      journeySteps: [
        { year: "2018", title: "Inicios en Diseño Web", desc: "Fundamentos en HTML, CSS y principios UX" },
        { year: "2020", title: "Dominio de JavaScript", desc: "Profundización en JS vanilla y manipulación DOM" },
        { year: "2021", title: "Era React", desc: "Desarrollo frontend con React y herramientas modernas" },
        { year: "2022", title: "Full Stack", desc: "Expansión a backend con Node.js y bases de datos" },
        { year: "2025", title: "Ingeniería IA", desc: "Explorando LLMs, prompt engineering e integración de IA" },
      ],
      passion: "Lo Que Me Impulsa",
      passionText:
        "Soy apasionado por crear aplicaciones hermosas y funcionales que tengan un impacto real. Me encanta empujar los límites de lo posible con tecnologías web y entregar soluciones excepcionales a través de mi trabajo.",
      cta: "Trabajemos juntos",
    },
  };

  const content = aboutContent[language];

  return (
    <section className="py-20 px-5 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 font-robotoslab mb-3">
            {content.title}
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-4">{content.subtitle}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        {/* Intro */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8 mb-16 border border-primary-200 dark:border-primary-800">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-opensans">
            {content.intro}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {content.highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/40 dark:to-accent-900/40 rounded-xl flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 font-robotoslab">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center font-robotoslab">
            {content.journey}
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-400 to-accent-400"></div>

            {/* Timeline items */}
            <div className="space-y-8">
              {content.journeySteps.map((step, index) => (
                <div key={index} className={`flex flex-col md:flex-row gap-6 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:flex md:w-1/2 md:justify-end md:pr-12">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white dark:bg-slate-800 border-4 border-primary-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-0" : "md:pr-12"}`}>
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <span className="inline-block px-4 py-1 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/40 dark:to-accent-900/40 text-primary-700 dark:text-primary-400 text-sm font-bold rounded-full mb-2">
                        {step.year}
                      </span>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2 font-robotoslab">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
                    </div>
                  </div>

                  {/* Mobile timeline dot */}
                  <div className="md:hidden absolute left-0 w-8 h-8 bg-white dark:bg-slate-800 border-4 border-primary-600 rounded-full flex items-center justify-center -translate-x-4">
                    <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Passion Section */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 text-white shadow-2xl">
          <div className="flex items-start gap-4 mb-4">
            <Target className="w-8 h-8 flex-shrink-0" />
            <h3 className="text-3xl font-bold font-robotoslab">{content.passion}</h3>
          </div>
          <p className="text-lg leading-relaxed opacity-90 max-w-3xl">{content.passionText}</p>
          <button className="mt-8 px-8 py-3 bg-white text-primary-600 font-bold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            {content.cta}
          </button>
        </div>
      </div>
    </section>
  );
};
