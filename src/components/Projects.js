import React from "react";
import "./Projects.css";

import disenoWeb from "../img/disenoWeb.png";
import eCommerce from "../img/eCommerce.png";

const Projects = () => {
  return (
    <div className="projectsSection">
      <div>
        <h1 className="titleProjects">Projects</h1>
      </div>
      <div className="projectsContainer">
        <div className="project1">
          <img src={disenoWeb} alt="" />
          <h6>Web Design</h6>
          <p>HTML, CSS, JS, Bootstrap</p>
          <a
            href="https://proyecto-integrador-diseno-web-ten.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" class="btn btn-outline-primary">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> View
              Project
            </button>
          </a>
        </div>
        <div className="project2">
          <img src={eCommerce} alt="" />
          <h6>eCommerce</h6>
          <p>HTML, CSS, JS, Bootstrap</p>
          <a
            href="https://proyecto-integrador-javascript-neon.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" class="btn btn-outline-primary">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> View
              Project
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
