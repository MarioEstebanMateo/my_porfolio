import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="container-fluid skillsSection">
        <div>
          <h1 className="titleSkills">Skills</h1>
        </div>
        <div className="skillsContainer">
          <div className="skillcard1">
            <h5>
              <i class="fa-brands fa-html5"></i> HTML
            </h5>
          </div>
          <div className="skillcard2">
            <h5>
              <i class="fa-brands fa-css3-alt"></i> CSS
            </h5>
          </div>
          <div className="skillcard3">
            <h5>
              <i class="fa-brands fa-js"></i> JavaScript
            </h5>
          </div>
          <div className="skillcard4">
            <h5>
              <i class="fa-brands fa-react"></i> ReactJs
            </h5>
          </div>
          <div className="skillcard5">
            <h5>
              <i class="fa-brands fa-node"></i> NodeJs
            </h5>
          </div>
          <div className="skillcard6">
            <h5>
              <i class="fa-solid fa-database"></i> MySQL
            </h5>
          </div>
          <div className="skillcard7">
            <h5>
              <i class="fa-solid fa-database"></i> MongoDB
            </h5>
          </div>
          <div className="skillcard8">
            <h5>
              <i class="fa-solid fa-pencil"></i> Graphic Design
            </h5>
          </div>
          <div className="skillcard9">
            <h5>
              <i class="fa-solid fa-object-group"></i> UX/UI Design
            </h5>
          </div>
          <div className="skillcard10">
            <h5>
              <i class="fa-solid fa-language"></i> English C2 Level
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
