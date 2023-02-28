import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            My Portfolio
          </a>
          <a
            href="https://drive.google.com/file/d/1BHH-RQPzFLWcsbvBpX6dRKqUqQWniN8x/view?usp=share_link"
            download="Mario's Resume"
            target="_blank"
          >
            <button type="button" class="btn btn-success">
              Download Resume
            </button>
          </a>
          <div>
            <div className="social-buttons ms-2">
              <div className="button1">
                <a href="https://github.com/MarioEstebanMateo" target="_blank">
                  <i className="fa-brands fa-github text-black"></i>
                </a>
              </div>
              <div className="button2">
                <a
                  href="https://www.linkedin.com/in/marioestebanmateo"
                  target="_blank"
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
