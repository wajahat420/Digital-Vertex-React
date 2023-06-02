import React from "react";
import logo from "../../assets/images/logo.png";
import Testimonial from "../layouts/Testimonial";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="wrapper">
          <Link to="" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" for="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/service">Our Services</Link>
            </li>
            <li>
              <Link to="/testimonial">Testimonial</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
