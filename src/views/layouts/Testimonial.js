import React, { Component } from "react";
import Slider from "react-slick";
import Placeholder from "../../assets/images/antony.jpg";
import "./Slider";

export default function Testimonial(props) {
  const settings = {
    // centerMode: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section class="main testimonials">
      <div class="wrapper">
        <div class="heading">
          <h2>Testimonial</h2>
        </div>
        <Slider {...settings} className="slideButton">
          <div class="main-inn">
            <div class="inn-card-inn">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium, odio ex. In earum dicta dolore eius ullam minima
                eveniet vero soluta doloremque sed eos nesciunt natus, similique
                ipsum dolor sunt!
              </p>
            </div>
            <div class="round-inn">
              <img src={Placeholder} alt="" />
              <h2>Antony Moore</h2>
              <p>Restaurant Owner</p>
            </div>
          </div>

          <div class="main-inn">
            <div class="inn-card-inn">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium, odio ex. In earum dicta dolore eius ullam minima
                eveniet vero soluta doloremque sed eos nesciunt natus, similique
                ipsum dolor sunt!
              </p>
            </div>
            <div class="round-inn">
              <img src={Placeholder} alt="" />
              <h2>Antony Moore</h2>
              <p>Restaurant Owner</p>
            </div>
          </div>

          <div class="main-inn">
            <div class="inn-card-inn">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium, odio ex. In earum dicta dolore eius ullam minima
                eveniet vero soluta doloremque sed eos nesciunt natus, similique
                ipsum dolor sunt!
              </p>
            </div>
            <div class="round-inn">
              <img src={Placeholder} alt="" />
              <h2>Antony Moore</h2>
              <p>Restaurant Owner</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
