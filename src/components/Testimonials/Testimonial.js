import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";

import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Reviewshake also segments your positive and negative reviews so it’s easier to keep track and take action as soon as you receive a negative review. Plus, its review notification feature means you won’t miss any reviews coming through.",
    },
    {
      img: profilePic2,
      review:
        "Reviewshake also segments your positive and negative reviews so it’s easier to keep track and take action as soon as you receive a negative review. Plus, its review notification feature means you won’t miss any reviews coming through.",
    },
    {
      img: profilePic3,
      review:
        "Reviewshake also segments your positive and negative reviews so it’s easier to keep track and take action as soon as you receive a negative review. Plus, its review notification feature means you won’t miss any reviews coming through.",
    },
    {
      img: profilePic4,
      review:
        "Reviewshake also segments your positive and negative reviews so it’s easier to keep track and take action as soon as you receive a negative review. Plus, its review notification feature means you won’t miss any reviews coming through.",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <div className="t-heading-head">
          <span>Clients always get </span>
          <span>Execptional Work </span>
          <span> from me...</span>
        </div>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={Pagination}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonials">
                <img src={client.img} alt="img" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
