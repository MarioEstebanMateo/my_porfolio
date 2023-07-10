import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h3 className="navbarTitle">My Portfolio</h3>
          <a
            href="https://drive.google.com/file/d/1rTWyW5goqtWAms6rzcZXwxvZhRJQwHPf/view?usp=sharing"
            download="Mario's Resume"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="btn btn-outline-dark">
              <i class="fa-solid fa-download"></i> Download Resume
            </button>
          </a>
          <div>
            <div className="social-buttons ms-2">
              <div className="button1">
                <a
                  href="https://github.com/MarioEstebanMateo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github text-black"></i>
                </a>
              </div>
              <div className="button2">
                <a
                  href="https://www.linkedin.com/in/marioestebanmateo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin text-black"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
