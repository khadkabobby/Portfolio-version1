import React from "react";
import Circle from "../circle/Circle";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience" id="Experience">
      <div className="about-me">{/* code about me  */}</div>
      <div className="experience-right">
        <div className="achievement">
          <Circle number={"8+"} black={"years"} yellow={"Experience"} />
        </div>
        <div className="achievement">
          <Circle number={"20+"} black={"completed"} yellow={"Projects"} />
        </div>
        <div className="achievement">
          <Circle number={"5+"} black={"companies"} yellow={"Work"} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
