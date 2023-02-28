import React from "react";
import "./Hero.css";

import heroImage from "../img/heroImage.jpg";

const Hero = () => {
  return (
    <>
      <div className="container-fluid">
        <img className="img-fluid" src={heroImage} alt="" />
      </div>
    </>
  );
};

export default Hero;
