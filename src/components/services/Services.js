import React, { useContext } from "react";
import "./Services.css";
import { themeContext } from "../../Context/Context";

import HeartEmoji from "../../img/heartemoji.png";
import GlassEmoji from "../../img/glasses.png";
import HumbleEmoji from "../../img/humble.png";
import Card from "../card/Card";

// paxi thapeko
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <section className="services" id="Services">
      {/* leftside */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
          <strong style={{ color: darkMode ? "white" : "" }}>Excellent </strong>
          at Project managing,{" "}
          <strong style={{ color: darkMode ? "white" : "" }}>Better</strong> at
          Frontend <br /> development and{" "}
          <strong style={{ color: darkMode ? "white" : "" }}>Good</strong> at
          UI/UX designing.
        </span>
        <button className="button s-button">Download CV</button>
        {/* paxi thapeko */}
        <div className="i-icons">
          <img src={Github} alt="" className="i-icons-image" />
          <img src={Linkedin} alt="" />
          <img src={Instagram} alt="" />
        </div>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* rightside */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "17rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Project Manager"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe Xd"}
          />
        </motion.div>
        {/* second card  */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "1rem" }}
        >
          <Card
            emoji={GlassEmoji}
            heading={"Developer"}
            detail={
              "HTML, Css, Javascript, React js, Node js, Next js, MongodB, etc"
            }
          />
        </motion.div>
        {/* third card  */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "18rem", left: "19rem" }}
        >
          <Card
            emoji={HumbleEmoji}
            heading={"UI/UX"}
            detail={
              "lorem is dummy text used for very nice protograph in the name of the people"
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </section>
  );
};

export default Services;
