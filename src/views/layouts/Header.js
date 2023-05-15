import React from "react";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="wrapper">
          <a href="" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" for="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
