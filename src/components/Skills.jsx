import { useState, useEffect } from "react";
import logoHtml from "../assets/icons/logoHtml.svg";
import logoCss from "../assets/icons/logoCss.svg";
import logoJavascript from "../assets/icons/logoJavascript.svg";
import logoReact from "../assets/icons/logoReact.svg";
import logoNode from "../assets/icons/logoNodejs.svg";
import logoExpress from "../assets/icons/logoExpress.svg";
import logoMySQL from "../assets/icons/logoMysql.svg";
import logoMongoDB from "../assets/icons/logoMongodb.svg";
import logoSupabase from "../assets/icons/logoSupabase.svg";
import logoGit from "../assets/icons/logoGit.svg";
import logoGithub from "../assets/icons/logoGithub.svg";
import logoFigma from "../assets/icons/logoFigma.svg";
import logoIllustrator from "../assets/icons/logoIllustrator.svg";
import logoPhotoshop from "../assets/icons/logoPhotoshop.svg";
import { Code2, Database, GitBranch, Paintbrush } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import { useInView } from "../hooks/useInView";

// Animated Progress Bar Component
const SkillBar = ({ skill, gradient }) => {
  const [width, setWidth] = useState(0);
  const [ref, isVisible] = useInView({ threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      setTimeout(() => {
        setWidth(skill.level);
      }, 100);
    }
  }, [isVisible, hasAnimated, skill.level]);

  return (
    <div ref={ref} className="group/skill">
      <div className="flex items-center gap-3 mb-2">
        <div className="relative">
          <img
            src={skill.logo}
            alt={`${skill.name} logo`}
            className="w-10 h-10 transform group-hover/skill:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-800">
            {skill.name}
          </p>
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-1000 ease-out`}
              style={{ width: `${width}%` }}
            ></div>
          </div>
        </div>
        <span className="text-xs font-bold text-gray-500">
          {skill.level}%
        </span>
      </div>
    </div>
  );
};

export const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;
  
  const skillCategories = [
    {
      title: t.frontend,
      icon: Code2,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML", logo: logoHtml, level: 95 },
        { name: "CSS", logo: logoCss, level: 90 },
        { name: "JavaScript", logo: logoJavascript, level: 88 },
        { name: "React", logo: logoReact, level: 85 },
      ],
    },
    {
      title: t.backend,
      icon: Database,
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node JS", logo: logoNode, level: 82 },
        { name: "Express", logo: logoExpress, level: 80 },
        { name: "MySQL", logo: logoMySQL, level: 85 },
        { name: "MongoDB", logo: logoMongoDB, level: 78 },
        { name: "Supabase", logo: logoSupabase, level: 75 },
      ],
    },
    {
      title: t.versionControl,
      icon: GitBranch,
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "GIT", logo: logoGit, level: 90 },
        { name: "GitHub", logo: logoGithub, level: 88 },
      ],
    },
    {
      title: t.uxUiDesign,
      icon: Paintbrush,
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "Figma", logo: logoFigma, level: 85 },
        { name: "Illustrator", logo: logoIllustrator, level: 80 },
        { name: "Photoshop", logo: logoPhotoshop, level: 75 },
      ],
    },
  ];

  return (
    <div className="py-16 px-5 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 font-robotoslab mb-4">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-opensans">
            {t.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>
                
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className={`text-lg font-bold font-opensans bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                      {category.title}
                    </h3>
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient} shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar 
                        key={skillIndex} 
                        skill={skill} 
                        gradient={category.gradient} 
                      />
                    ))}
                  </div>

                  {/* Bottom decoration */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} rounded-b-2xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Banner */}
        <div className="mt-16 relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-90"></div>
          <div className="relative z-10 px-8 py-12 text-center text-white">
            <h3 className="text-2xl sm:text-3xl font-bold font-robotoslab mb-4">
              {t.alwaysLearning}
            </h3>
            <p className="text-lg font-opensans max-w-2xl mx-auto">
              {t.learningDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
