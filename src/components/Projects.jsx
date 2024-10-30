import disenoWeb from "../assets/img/disenoWeb.png";
import eCommerce from "../assets/img/eCommerce.png";
import eCommerceReact from "../assets/img/eCommerceReact.png";
import eCommerceReactWithNodeBackEnd from "../assets/img/eCommerceReactWithNodeBackEnd.png";
import blackJack from "../assets/img/blackJack.png";
import juegoDeCartasColeccionables from "../assets/img/juegoDeCartasColeccionables.png";

export const Projects = () => {
  return (
    <>
      <div className="m-5">
        <div>
          <h2 className="text-3xl font-bold text-center text-primary sm:text-4xl font-opensans">
            Projects
          </h2>
        </div>
        <div>
          <p className="text-lg font-semibold text-center text-primary font-opensans">
            (Some of them made during my studies and others as a personal
            project)
          </p>
        </div>
      </div>
      {/* Projects container*/}
      <div className="mt-5 flex flex-wrap justify-center gap-10">
        {/* Project */}
        <div className="relative max-w-60 min-w-60 min-h-80 max-h-80 border-2 border-primary p-3 rounded-lg shadow-2xl text-center">
          <img
            src={disenoWeb}
            alt="Web Design image"
            className="w-40 h-30 mx-auto"
          />
          <h3 className="text-center text-primary font-bold mt-2 min-h-12">
            Web Design
          </h3>
          <p className="text-center mt-2 min-h-20">
            Technologies used:
            <br />
            HTML, CSS, JS, Bootstrap
          </p>
          <div className="mt-2">
            <a
              href="https://proyecto-integrador-diseno-web-ten.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="font-opensans text-primary bg-transparent border border-solid border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-2 sm:px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Link to project
            </a>
          </div>
        </div>
        {/* Project */}
        <div className="relative max-w-60 min-w-60 min-h-80 max-h-80 border-2 border-primary p-3 rounded-lg shadow-2xl text-center">
          <img
            src={eCommerce}
            alt="eCommerce image"
            className="w-40 h-30 mx-auto"
          />
          <h3 className="text-center text-primary font-bold mt-2 min-h-12">
            eCommerce Vanilla JavaScript
          </h3>
          <p className="text-center mt-2 min-h-20">
            Technologies used:
            <br />
            HTML, CSS, JS, Bootstrap
          </p>
          <div className="mt-2">
            <a
              href="https://proyecto-integrador-javascript-neon.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="font-opensans text-primary bg-transparent border border-solid border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-2 sm:px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Link to project
            </a>
          </div>
        </div>
        {/* Project */}
        <div className="relative max-w-60 min-w-60 min-h-80 max-h-80 border-2 border-primary p-3 rounded-lg shadow-2xl text-center">
          <img
            src={eCommerceReact}
            alt="eCommerce React image"
            className="w-40 h-30 mx-auto"
          />
          <h3 className="text-center text-primary font-bold mt-2 min-h-12">
            eCommerce React using Local Storage
          </h3>
          <p className="text-center mt-2 min-h-20">
            Technologies used:
            <br />
            HTML, CSS, Bootstrap, React
          </p>
          <div className="mt-2">
            <a
              href="https://proyecto-integrador-react-gamma.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="font-opensans text-primary bg-transparent border border-solid border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-2 sm:px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Link to project
            </a>
          </div>
        </div>
        {/* Project */}
        <div className="relative max-w-60 min-w-60 min-h-80 max-h-80 border-2 border-primary p-3 rounded-lg shadow-2xl text-center">
          <img
            src={eCommerceReactWithNodeBackEnd}
            alt="eCommerce React with Node BackEnd image"
            className="w-40 h-30 mx-auto"
          />
          <h3 className="text-center text-primary font-bold mt-2 min-h-12">
            eCommerce with BackEnd using Node and Express
          </h3>
          <p className="text-center mt-2 min-h-20">
            Technologies used:
            <br />
            HTML, CSS, React, Node, Express
          </p>
          <div className="mt-2">
            <a
              href="https://proyecto-integrador-back-end.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="font-opensans text-primary bg-transparent border border-solid border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-2 sm:px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Link to project
            </a>
          </div>
        </div>
        {/* Project */}
        <div className="relative max-w-60 min-w-60 min-h-80 max-h-80 border-2 border-primary p-3 rounded-lg shadow-2xl text-center">
          <img
            src={blackJack}
            alt="Black Jack game image"
            className="w-40 h-30 mx-auto"
          />
          <h3 className="text-center text-primary font-bold mt-2 min-h-12">
            BlackJack Game
          </h3>
          <p className="text-center mt-2 min-h-20">
            Technologies used:
            <br />
            HTML, CSS, JS, Bootstrap
          </p>
          <div className="mt-2">
            <a
              href="https://blackjack-drab.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="font-opensans text-primary bg-transparent border border-solid border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-2 sm:px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Link to project
            </a>
          </div>
        </div>
        {/* Project */}
        <div className="relative max-w-60 min-w-60 min-h-80 max-h-80 border-2 border-primary p-3 rounded-lg shadow-2xl text-center">
          <img
            src={juegoDeCartasColeccionables}
            alt="Juego de Cartas Coleccionables image"
            className="w-40 h-30 mx-auto"
          />
          <h3 className="text-center text-primary font-bold mt-2 min-h-12">
          Juego de Cartas Coleccionables
          </h3>
          <p className="text-center mt-2 min-h-20">
            Technologies used:
            <br />
            HTML, CSS, React
          </p>
          <div className="mt-2">
            <a
              href="https://poke-tcg-card-game.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="font-opensans text-primary bg-transparent border border-solid border-primary hover:bg-primary hover:text-white active:bg-primary font-bold uppercase text-xs px-2 sm:px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Link to project
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
