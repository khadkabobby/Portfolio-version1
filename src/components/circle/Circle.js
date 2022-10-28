import React, { useContext } from "react";
import "./Circle.css";

import { themeContext } from "../../Context/Context";

const Circle = (props) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        className="circle"
        style={{ color: darkMode ? "var(--orange)" : "" }}
      >
        {props.number}
      </div>
      <span style={{ color: darkMode ? "white" : "" }}>{props.black}</span>
      <span>{props.yellow}</span>
    </>
  );
};

export default Circle;
