import analista from "../assets/img/analista.jpg";
import utnDiplomaturaEnProgramacionWeb from "../assets/img/utnDiplomaturaEnProgramacionWeb.jpg";
import nucbaProgramacionFullStack from "../assets/img/nucbaProgramacionFullStack.jpg";
import utnDisenoGraficoDigital from "../assets/img/utnDisenoGraficoDigital.jpg";
import nucbaUXUI from "../assets/img/nucbaUXUI.jpg";
import { Award, ExternalLink, GraduationCap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export const Certifications = () => {
  const { language } = useLanguage();
  const t = translations[language].certifications;
  const certifications = [
    {
      title: "Systems Analyst",
      institution: "ISFDyT Nº5",
      year: "2018-2021",
      location: "Pergamino, Argentina",
      image: analista,
      link: "https://res.cloudinary.com/dwxoq8n2m/image/upload/v1675053927/Mario%20Privado/Titulo_Analista_de_Sistemas_s2td7i.jpg",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Full Stack Diploma with React JS",
      institution: "E-Learning UTN",
      year: "2021",
      location: "Buenos Aires, Argentina",
      image: utnDiplomaturaEnProgramacionWeb,
      link: "https://res.cloudinary.com/dwxoq8n2m/image/upload/v1640478250/Mario%20Privado/Certificado_UTN_szkkzq.jpg",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Full Stack Developer",
      institution: "NUCBA",
      year: "2022-2023",
      location: "Buenos Aires, Argentina",
      image: nucbaProgramacionFullStack,
      link: "https://res.cloudinary.com/dwxoq8n2m/image/upload/v1689025360/Mario%20Privado/Nucba_Certificado_Programacion_Full_Stack_q8n6c6.jpg",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Digital Graphic Designer",
      institution: "E-Learning UTN",
      year: "2023",
      location: "Buenos Aires, Argentina",
      image: utnDisenoGraficoDigital,
      link: "https://res.cloudinary.com/dwxoq8n2m/image/upload/v1677092611/Mario%20Privado/Certificado_UTN_Dise%C3%B1o_Grafico_Digital_njle58.jpg",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "UX/UI Designer Degree",
      institution: "NUCBA",
      year: "2023-2024",
      location: "Buenos Aires, Argentina",
      image: nucbaUXUI,
      link: "https://res.cloudinary.com/dwxoq8n2m/image/upload/v1705439616/Mario%20Privado/Nucba_Certificado_Ux_Ui_Degree.jpg",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "AI Engineering",
      institution: "NUCBA",
      year: "2026",
      location: "Buenos Aires, Argentina",
      image: "",
      link: "#",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <div className="pb-16 px-5 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full mb-4">
            <GraduationCap className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-600">{t.subtitle}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-robotoslab mb-4">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-opensans">
            {t.continuousLearning}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>
              
              {/* Card */}
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-600">
                  {cert.image ? (
                    <>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${cert.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <Award className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`} />
                        <p className={`text-lg font-bold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                          {t.comingSoon}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start gap-2 mb-3">
                    <Award className={`w-5 h-5 flex-shrink-0 mt-1 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`} />
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 font-robotoslab leading-tight">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="space-y-2 mb-4 flex-1">
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-opensans">
                      <span className="font-semibold">{t.institution}:</span> {cert.institution}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-opensans">
                      <span className="font-semibold">{t.year}:</span> {cert.year}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-opensans">
                      <span className="font-semibold">{t.location}:</span> {cert.location}
                    </p>
                  </div>

                  {/* Button */}
                  {cert.link && cert.link !== "#" ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center justify-center gap-2 bg-gradient-to-r ${cert.color} text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 mt-auto`}
                    >
                      {t.viewCertificate}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <div
                      className={`flex items-center justify-center gap-2 bg-gradient-to-r ${cert.color} text-white px-4 py-2 rounded-lg font-semibold text-sm mt-auto opacity-60 cursor-not-allowed`}
                    >
                      {t.comingSoon}
                    </div>
                  )}
                </div>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
