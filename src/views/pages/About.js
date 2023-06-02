import React from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
// import Banner from "../../assets/images/About banner.png";

function About() {
  return (
    <>
      <Header />
      <div class="about_us">
        <div class="wrapper">
          <div class="abthead">
            <h1>About us</h1>
          </div>
        </div>
      </div>

      <div class="About_section">
        <div class="wrapper">
          <div class="About">
            <h1>Who We Are</h1>
            <p>
              M3 Technologies Pakistan (Private) Limited was established in 2004
              as a joint venture between AKD VENTURE FUNDS LIMITED (under TMT
              VENTURES LIMITED) and XOX TECHNOLOGY BERHAD a listed company at
              Bursa Malaysia (Formerly known as M3 Technologies (Asia) Berhad).
              <br />
              <br />
              In a short span of time, M3tech has achieved an eminent position
              in the mobile value-added industry of Pakistan. Specializing in
              providing telecom grade VAS products & Services including Asia’s
              largest copyrighted mobile content library. M3Tech has the honor
              of serving the largest number of corporate clients in Pakistan.
              Not only that M3Tech offers an unmatched expertise in powering a
              variety of Mobile Platforms and technologies such as SMS, MMS,
              IVR, GPRS, 3G, Streaming, Web, WAP, STK and ODP.
            </p>
            <h1>Our Vision</h1>
            <p>
              With a credible team of young professionals and over 10 years of
              experience in providing mobile solutions within the Asian region,
              M3Tech is geared to spearhead the industry regionally, by
              continuously providing creative, innovative and practical
              solutions for all channels and purposes.
            </p>
            <h1>Our Mission</h1>
            <ul>
              <li>
                With a credible team of young professionals and over 10 years of
                experience in providing mobil
              </li>
              <li>
                With a credible team of young professionals Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Debitis, maiores
                corporis! and over 10 years of experience in providing mobil
              </li>

              <li>
                With a credible team of young professionals and over 10 years of
                experience in providing mobil
              </li>
              <li>
                With a credible team of young professionals and over 10 years of
                experience in providing mobil
              </li>
              <li>
                With a credible team of young professionals and over 10 years of
                experience in providing mobil
              </li>
            </ul>
            <div class="abt_img">{/* <img src={Banner} alt="" /> */}</div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
