import React from "react";
import { useState } from "react";
import "./Header.css";
const Header = () => {
  const [burger, setBurger] = useState(false);

  const closeMenuHandler = () => {
    console.log("clicked");
    setBurger(true);
  };
  return (
    <div className="header__container">
      <a href="3">
        <img src="../../images/logo.svg" alt="" />
      </a>
      <div className="menu">
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
      </div>
      <div className="right__menu">
        <a>Shop</a>
        <a>Tesla Account</a>
        <div className="hamburger">
          <i class="bx bx-menu hamburger"></i>
        </div>
      </div>
      <div className="bugger__nav">
        <div className="burger__li">
          <div className="close_side_nav">
            <i onClick={closeMenuHandler} class="bx bx-x "></i>
          </div>
          <li>Existing inventory</li>
          <li>Used Inventory</li>
          <li>Trade In</li>
          <li>Roadster</li>
          <li>Charging</li>
          <li>Existing inventory</li>
          <li>Existing inventory</li>
        </div>
      </div>
    </div>
  );
};

export default Header;
