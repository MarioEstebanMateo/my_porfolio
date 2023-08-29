import React from "react";
import "./Hero.css";

import heroImage from "../img/heroImage.png";

const Hero = () => {
  return (
    <>
      <div className="containerHeroImg">
        <img className="img-fluid heroImg" src={heroImage} alt="" />
      </div>
    </>
  );
};

export default Hero;
