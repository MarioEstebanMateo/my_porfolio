import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="container-fluid footer">
      <div className="footerP">
        &copy;
        <span>{year}</span> All rights reserved :: Designed and developed by
        Mario Esteban Mateo
      </div>
    </div>
  );
};

export default Footer;
