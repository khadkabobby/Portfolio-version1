import React from "react";
import Toggle from "../toggle/Toggle";
import "./Navbar.css";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="n-wrapper" id="Navbar">
      <nav className="n-left">
        <div className="n-name">Bobby</div>
        <Toggle />
      </nav>
      <nav className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="Services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="Works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="Portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="Testimonials" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <Link to="Contact" spy={true} smooth={true}>
          <button className="button n-button">Let's talk</button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
