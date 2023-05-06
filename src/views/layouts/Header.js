import React from "react";
import Logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header class="header">
      <div class="wrapper">
        <a href="" class="logo">
          <img src={Logo} alt="logo" />
        </a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul class="menu">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">FEATURES</a>
          </li>
          <li>
            <a href="#">Local</a>
          </li>
          <li>
            <a href="#">OUR TERM</a>
          </li>
          <li>
            <a href="#">Solutions</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
