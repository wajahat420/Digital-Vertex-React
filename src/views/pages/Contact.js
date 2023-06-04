import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../layouts/Header";
import OrderOnlineContact from "../../assets/images/back.jpg";
import BloodTestContact from "../../assets/images/logo.png";
import GetResultIcnSlideContact from "../../assets/images/mega-phone.png";
import "../../scss/pages/contactUs.scss";
import Footer from "../layouts/Footer";

function Contact() {
  const [userData, setUserData] = useState({
    name: "",
    contactNo: "",
    email: "",
    message: "",
  });
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleSubmit = (event) => {
    // console.log(userData)
    event.preventDefault();
    // props.contact(userData)
  };
  return (
    <div className="overflow-contact">
      <header className="main-haeder">
        <Header />
        <section className="contact-top-sec">
          <div className="container">
            <div className="top-grid-contact">
              <div className="left-top-grid">
                <h1>
                  We're happy to
                  <br />
                  help
                </h1>
                <p className="top-left-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br />
                  magna aliqua
                </p>
              </div>
              <div className="parent-right-top-grid">
                <div className="right-top-grid">
                  <div className="box-form">
                    <form className="contact-top-form" onSubmit={handleSubmit}>
                      <div className="grid-form-one">
                        <div className="name-input">
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            placeholder="Full Name"
                            value={userData.name}
                            onChange={(e) => {
                              setUserData({
                                ...userData,
                                name: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div className="number-input-contact">
                          <label htmlFor="phone">Phone Number</label>
                          <input
                            type="number"
                            placeholder="92-*************"
                            value={userData.contactNo}
                            onChange={(e) => {
                              setUserData({
                                ...userData,
                                contactNo: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="grid-form-two">
                        <div className="email-input">
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            placeholder="contact@rubin.com"
                            value={userData.email}
                            onChange={(e) => {
                              setUserData({
                                ...userData,
                                email: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="grid-form-two">
                        <div className="msg-input">
                          <label htmlFor="message">Message</label>
                          <textarea
                            value={userData.message}
                            onChange={(e) => {
                              setUserData({
                                ...userData,
                                message: e.target.value,
                              });
                            }}
                            placeholder="Please describe what service you are interested in."
                          ></textarea>
                        </div>
                      </div>
                      <div className="grid-form-three">
                        {/* <button  onClick={handleSubmit}  type='button' style={{backgroundColor:"red", height:"20px"}}> submit </button> */}
                        <input type="submit" />
                      </div>
                    </form>
                    <div className="inputBox-contact">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      <input type="text" placeholder="Search for a Test" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <div className="main">
        <section className="how-work-sec contct-wrk-repair">
          <div className="container">
            <h2>How it Works</h2>
            <div className="grid-nav3">
              <div className="grid-col workBox">
                <div className="psotbox">
                  <img src={OrderOnlineContact} alt="online-order" />
                </div>
                <span className="circlemain">01</span>
                <h4>Order Online</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <a href="" className="btn how-btn">
                  Order Now
                </a>
              </div>
              <div className="grid-col workBox">
                <div className="psotbox">
                  <img src={BloodTestContact} alt="online-order" />
                </div>
                <span className="circlemain">02</span>
                <h4>Collect your sample</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <a href="" className="btn how-btn">
                  Find a Centre
                </a>
              </div>
              <div className="grid-col workBox">
                <div className="psotbox">
                  <img src={BloodTestContact} alt="online-order" />
                </div>
                <span className="circlemain">03</span>
                <h4>Get your results</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
                <a href="" className="btn how-btn">
                  Login
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
