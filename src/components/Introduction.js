import React from "react";

import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="introduction">
      <p className="introductionText">
        Hello!! I'm <b>Mario Esteban Mateo</b>. I am a passionate Systems
        Analyst, Full Stack Developer and UX/UI Designer with a strong academic
        background and a continuous commitment to learning and growth in the
        world of technology.
        <br />
        <br />
        My focus is on gaining practical experience, learning continuously, and
        making significant contributions to challenging projects. My goal is to
        apply my technical and creative skills to solve problems and develop
        innovative solutions.
        <br />
        <br />
        Feel free to reach out to me via email down below{" "}
        <a href="#contactForm">
          <i class="fa-solid fa-arrow-down"></i>
        </a>{" "}
        in the contact section, or connect with me on LinkedIn{" "}
        <span>
          <a
            href="https://www.linkedin.com/in/marioestebanmateo/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </span>
        . My resume is available above{" "}
        <a href="#navbarSection">
          <i class="fa-solid fa-arrow-up"></i>
        </a>{" "}
        .
        <br />
        <br />
        Thank you for visiting my portfolio, and I look forward to the
        opportunity to work together on your next project.
      </p>
    </div>
  );
};

export default Introduction;
