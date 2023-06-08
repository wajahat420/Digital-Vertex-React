import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

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
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <a href="https://wa.me/+923367211005" > <WhatsAppIcon /> </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
