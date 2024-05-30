import logoHtml from "../assets/icons/logoHtml.svg";
import logoCss from "../assets/icons/logoCss.svg";
import logoJavascript from "../assets/icons/logoJavascript.svg";
import logoReact from "../assets/icons/logoReact.svg";
import logoNode from "../assets/icons/logoNodejs.svg";
import logoExpress from "../assets/icons/logoExpress.svg";
import logoMySQL from "../assets/icons/logoMysql.svg";
import logoMongoDB from "../assets/icons/logoMongodb.svg";
import logoGit from "../assets/icons/logoGit.svg";
import logoGithub from "../assets/icons/logoGithub.svg";
import logoFigma from "../assets/icons/logoFigma.svg";
import logoIllustrator from "../assets/icons/logoIllustrator.svg";
import logoPhotoshop from "../assets/icons/logoPhotoshop.svg";

export const Skills = () => {
  return (
    <div className="m-5">
      <div>
        <h2 className="text-3xl font-bold text-center text-primary sm:text-4xl font-opensans">
          Technical Skills
        </h2>
      </div>
      <div>
        <p className="text-lg font-semibold text-center text-primary font-opensans">
          I have experience with the following technologies:
        </p>
      </div>
      <div className="flex gap-10 flex-wrap justify-center mx-5 my-5">
        <div className="justify-center border-2 border-primary p-5 rounded-lg shadow-2xl min-w-52 min-h-72">
          <h2 className="text-center font-bold font-opensans text-base sm:text-lg">
            FRONTEND
          </h2>
          <div className="flex flex-col gap-4 mt-5">
            <div className="flex items-center gap-2">
              <img
                src={logoHtml}
                alt="logo HTML"
                className="w-8 h-8 sm:w-16 sm:h-16"
              />
              <p className="text-sm font-semibold sm:text-lg text-black">
                HTML
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <img
              src={logoCss}
              alt="logo CSS"
              className="w-8 h-8 sm:w-16 sm:h-16"
            />
            <p className="text-sm font-semibold sm:text-lg text-black">CSS</p>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <img
              src={logoJavascript}
              alt="logo Javascript"
              className="w-8 h-8 sm:w-16 sm:h-16"
            />
            <p className="text-sm font-semibold sm:text-lg text-black">
              Javascript
            </p>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <img
              src={logoReact}
              alt="logo React"
              className="w-8 h-8 sm:w-16 sm:h-16"
            />
            <p className="text-sm font-semibold sm:text-lg text-black">React</p>
          </div>
        </div>
        <div className="justify-center border-2 border-primary p-5 rounded-lg shadow-2xl  min-w-52 min-h-15 min-h-72">
          <h2 className="text-center font-bold font-opensans text-base sm:text-lg">
            BACKEND
          </h2>
          <div className="flex flex-col gap-4 mt-5">
            <div className="flex items-center gap-2">
              <img
                src={logoNode}
                alt="logo Node JS"
                className="w-8 h-8 sm:w-16 sm:h-16"
              />
              <p className="text-sm font-semibold sm:text-lg text-black">
                Node JS
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <img
              src={logoExpress}
              alt="logo Express"
              className="w-8 h-8 sm:w-16 sm:h-16"
            />
            <p className="text-sm font-semibold sm:text-lg text-black">
              Express
            </p>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <img
              src={logoMySQL}
              alt="logo MySQL"
              className="w-8 h-8 sm:w-16 sm:h-16"
            />
            <p className="text-sm font-semibold sm:text-lg text-black">MySQL</p>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <img
              src={logoMongoDB}
              alt="logo MongoDB"
              className="w-8 h-8 sm:w-16 sm:h-16"
            />
            <p className="text-sm font-semibold sm:text-lg text-black">
              MongoDB
            </p>
          </div>
        </div>
        <div className="justify-center border-2 border-primary p-5 rounded-lg shadow-2xl min-w-52 min-h-15 min-h-72">
          <h2 className="text-center font-bold font-opensans text-base sm:text-lg ">
            VERSION CONTROL
          </h2>
          <div className="flex flex-col gap-4 mt-5">
            <div className="flex items-center gap-2">
              <img
                src={logoGit}
                alt="Logo Git"
                className="w-8 h-8 sm:w-16 sm:h-16"
              />
              <p className="text-sm font-semibold sm:text-lg text-black">GIT</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <img
              src={logoGithub}
              alt="logo Github"
              className="w-8 h-8 sm:w-16 sm:h-16"
            />
            <p className="text-sm font-semibold sm:text-lg text-black">
              GitHubb
            </p>
          </div>
        </div>
        <div className="justify-center border-2 border-primary p-5 rounded-lg shadow-2xl min-w-52 min-h-15 min-h-72">
          <h2 className="text-center font-bold font-opensans text-base sm:text-lg">
            UX/UI
          </h2>
          <div className="flex flex-col gap-4 mt-5">
            <div className="flex items-center gap-2">
              <img
                src={logoFigma}
                alt="Logo Figma"
                className="w-8 h-8 sm:w-16 sm:h-16"
              />
              <p className="text-sm font-semibold sm:text-lg text-black">
                Figma
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <img
              src={logoIllustrator}
              alt="Logo Illustrator"
              className="w-8 h-8 sm:w-16 sm:h-16"
            />
            <p className="text-sm font-semibold sm:text-lg text-black">
              Illustrator
            </p>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <img
              src={logoPhotoshop}
              alt="Logo Photoshop"
              className="w-8 h-8 sm:w-16 sm:h-16"
            />
            <p className="text-sm font-semibold sm:text-lg text-black">
              Photoshop
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
