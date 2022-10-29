import React, { useContext } from "react";
import "./Intro.css";

import { themeContext } from "../../Context/Context";
import { motion } from "framer-motion";

import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Profile from "../../img/profile.png";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = { duration: 2, type: "spring" };
  return (
    <section className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Bobby Khadka</span>
          <span>
            Frontend React Developer with high level of experience in web
            designing and development, producting the Quality work.
          </span>
        </div>
        <button className="i-button button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt="" className="i-icons-image" />
          <img src={Linkedin} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="vector1" />
        <img src={Vector2} alt="vector1" />
        <img src={Profile} alt="profile" />
        {/* <img src={boy} alt="boy" /> */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt="glassimogi"
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} text1="Web" text2="developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} text1="Best" text2="designer" />
        </motion.div>
        {/* blur div  */}
        <div
          className="blur"
          style={{
            background: "rgb(238 210 255)",
            top: "-18%",
            left: "56%",
            width: "22rem",
            height: "14rem",
            zIndex: "-1",
          }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
            zIndex: "-1",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Intro;
