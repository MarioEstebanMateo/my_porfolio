import React from "react";
import "./Projects.css";

import disenoWeb from "../img/disenoWeb.png";
import eCommerce from "../img/eCommerce.png";
import blackJackGame from "../img/blackJack.png";
import eCommerceReact from "../img/eCommerceReact.png";
import eCommerceReactWithNodeBackEnd from "../img/eCommerceReactWithNodeBackEnd.png";
import pokeBatallaTCG from "../img/pokeBatallaTCG.png";

const Projects = () => {
  return (
    <div className="projectsSection">
      <div>
        <h1 className="titleProjects">Projects</h1>
      </div>
      <div className="projectsContainer">
        <div className="project1">
          <img src={disenoWeb} alt="" />
          <h6 className="mt-2">Web Design</h6>
          <p>HTML, CSS, JS, Bootstrap</p>
          <a
            href="https://proyecto-integrador-diseno-web-ten.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="btn btn-outline-primary">
              <i className="fa-solid fa-arrow-up-right-from-square"></i> View
              Project
            </button>
          </a>
        </div>
        <div className="project2">
          <img src={eCommerce} alt="" />
          <h6 className="mt-2">eCommerce Vanilla JavaScript</h6>
          <p>HTML, CSS, JS, Bootstrap</p>
          <a
            href="https://proyecto-integrador-javascript-neon.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="btn btn-outline-primary">
              <i className="fa-solid fa-arrow-up-right-from-square"></i> View
              Project
            </button>
          </a>
        </div>
        <div className="project3">
          <img src={blackJackGame} alt="" />
          <h6 className="mt-2">BlackJack Game</h6>
          <p>HTML, CSS, JS, Bootstrap</p>
          <a
            href="https://blackjack-drab.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="btn btn-outline-primary">
              <i className="fa-solid fa-arrow-up-right-from-square"></i> View
              Project
            </button>
          </a>
        </div>
        <div className="project4">
          <img src={eCommerceReact} alt="" />
          <h6 className="mt-2">eCommerce React</h6>
          <p>HTML, CSS, JS, Bootstrap, React</p>
          <a
            href="https://proyecto-integrador-react-gamma.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="btn btn-outline-primary">
              <i className="fa-solid fa-arrow-up-right-from-square"></i> View
              Project
            </button>
          </a>
        </div>
        <div className="project5">
          <img src={eCommerceReactWithNodeBackEnd} alt="" />
          <h6 className="mt-2">eCommerce BackEnd</h6>
          <p>HTML, CSS, JS, React, Node, Express</p>
          <a
            href="https://proyecto-integrador-back-end.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="btn btn-outline-primary">
              <i className="fa-solid fa-arrow-up-right-from-square"></i> View
              Project
            </button>
          </a>
        </div>
        <div className="project6">
          <img src={pokeBatallaTCG} alt="" />
          <h6 className="mt-2">Poke Batalla TCG! Game</h6>
          <p>HTML, CSS, JS, Bootstrap, React</p>
          <a
            href="https://poke-tcg-card-game.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="btn btn-outline-primary">
              <i className="fa-solid fa-arrow-up-right-from-square"></i> View
              Project
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
