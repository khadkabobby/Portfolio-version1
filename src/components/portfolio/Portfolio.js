import React, { useContext } from "react";
import "./Portfolio.css";
import { themeContext } from "../../Context/Context";

import { Swiper, SwiperSlide } from "swiper/react";
import Slidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";

import "swiper/css";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="portfolio" id="Portfolio">
      {/* heading  */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Porjects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Slidebar} alt="alt" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="alt" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="alt" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="alt" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Portfolio;
