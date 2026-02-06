import appLafe from "../assets/img/appLaFe.png";
import appLaFeConStock from "../assets/img/appLaFeConStock.png";
import { ExternalLink, Briefcase, Star, Rocket } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export const Freelance = () => {
  const { language } = useLanguage();
  const t = translations[language].freelance;
  const freelanceProjects = [
    {
      title: "App Pedidos La Fe",
      image: appLafe,
      description: "Order management application helping franchises streamline their ordering process with real-time updates",
      technologies: ["React", "Tailwind", "Vite", "Supabase"],
      link: "https://pedidos-la-fe.vercel.app/",
      client: "La Fe S.A.",
      impact: "50% faster ordering",
    },
    {
      title: "App Pedidos La Fe Con Stock",
      image: appLaFeConStock,
      description: "Advanced inventory management system integrated with order processing for better stock control",
      technologies: ["React", "Tailwind", "Vite", "Supabase"],
      link: "https://pedidos-la-fe-con-stock.vercel.app/",
      client: "La Fe S.A.",
      impact: "Real-time inventory",
    },
  ];

  return (
    <div className="py-16 px-5 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4">
            <Briefcase className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-green-600">{t.professionalWork}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 font-robotoslab mb-4">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-opensans max-w-3xl mx-auto">
            {t.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {freelanceProjects.map((project, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              
              {/* Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Client Badge */}
                <div className="absolute top-4 right-4 z-20 backdrop-blur-sm bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-green-700 shadow-lg border border-green-200">
                  <Star className="w-3 h-3 inline mr-1 fill-green-500 text-green-500" />
                  {project.client}
                </div>

                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-6 transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay with impact */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex items-center gap-2 text-white font-bold">
                      <Rocket className="w-5 h-5" />
                      {project.impact}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 font-robotoslab group-hover:text-green-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-semibold rounded-full border border-green-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    {t.viewApplication}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-16 relative overflow-hidden rounded-2xl max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
          <div className="relative z-10 px-8 py-12 text-center text-white">
            <Briefcase className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl font-bold font-robotoslab mb-3">
              {t.lookingForDeveloper}
            </h3>
            <p className="text-lg font-opensans opacity-90 mb-6">
              {t.helpBusinesses}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {t.letsWorkTogether}
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};