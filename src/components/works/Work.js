import React, { useContext } from "react";
import "./Work.css";
import { themeContext } from "../../Context/Context";

import Html from "../../img/html.png";
import Css from "../../img/css.png";
import Nodejs from "../../img/nodejs.png";
import Reactjs from "../../img/react.png";
import JavaScript from "../../img/javascript.png";
import { motion } from "framer-motion";

const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="works" id="Works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works in All these
        </span>
        <span>Technology</span>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          voluptatibus <br /> minus placeat nemo aut quibusdam ab quidem
          repudiandae.
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Veritatis minus placeat nemo aut quibusdam ab quidem
        </span>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* rightside  */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Css} alt="alt" />
          </div>
          <div className="w-secCircle">
            <img src={JavaScript} alt="alt" />
          </div>
          <div className="w-secCircle">
            <img src={Reactjs} alt="alt" />
          </div>
          <div className="w-secCircle">
            <img src={Html} alt="alt" />
          </div>
          <div className="w-secCircle">
            <img src={Nodejs} alt="alt" />
          </div>
        </motion.div>
        {/* Background circles  */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </section>
  );
};

export default Work;
