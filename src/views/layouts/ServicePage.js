import React from "react";
import "../../scss/layouts/service-page.scss";
import slip from "../../assets/images/slip-img.jpg";
import blog from "../../assets/images/what-is-a-blog-1.png";
import Slider from "react-slick";
import Header from "./Header";
import Footer from "./Footer";

export default function ServicePage() {
  const settings = {
    // centerMode: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2200,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="header">
        <Header />
      </div>

      <div class="wrapper">
        <section class="service-row-1">
          <div class="service-row-1-col1">
            <h2>Writing & Translatino</h2>
            <p>Get your word across-in any languages</p>
            <a href="#">
              <i class="fa-brands fa-youtube"></i>How fiverr works
            </a>
          </div>
        </section>
      </div>

      <div class="wrapper">
        <section class="services-row-2">
          <div class="services-row-2-col1">
            <h2>Most Popular in Writing & Translation</h2>
          </div>
          <Slider {...settings} className="slider-setting-service">
            <div class="Service-card">
              <div class="card-inner">
                <img src={slip} aslt="image" />
                <p>Articles & Blog Posts</p>
              </div>
            </div>
            <div class="Service-card">
              <div class="card-inner">
                <img src={slip} aslt="image" />
                <p>Articles & Blog Posts</p>
              </div>
            </div>
            <div class="Service-card">
              <div class="card-inner">
                <img src={slip} aslt="image" />
                <p>Articles & Blog Posts</p>
              </div>
            </div>
            <div class="Service-card">
              <div class="card-inner">
                <img src={slip} aslt="image" />
                <p>Articles & Blog Posts</p>
              </div>
            </div>
          </Slider>
        </section>
      </div>

      <div class="wrapper">
        <section class="services-row-3">
          <div class="services-row-3-col-1">
            <h2>Explore Writing & Translation</h2>
          </div>
          <div class="services-row-3-col-2">
            <div class="services-row-3-col-1-inn">
              <img src={blog} alt="" />
              <h4>Content Writing</h4>
              <ul>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="services-row-3-col-2">
            <div class="services-row-3-col-1-inn">
              <img src={blog} alt="" />
              <h4>Content Writing</h4>
              <ul>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="services-row-3-col-2">
            <div class="services-row-3-col-1-inn">
              <img src={blog} alt="" />
              <h4>Content Writing</h4>
              <ul>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="services-row-3-col-2">
            <div class="services-row-3-col-1-inn">
              <img src={blog} alt="" />
              <h4>Content Writing</h4>
              <ul>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
                <li>
                  <a href="#">Content Strategy</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
