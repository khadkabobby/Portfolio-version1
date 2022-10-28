import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Work from "./components/works/Work";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import { themeContext } from "./Context/Context";
import { useContext } from "react";

const App = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Work />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
