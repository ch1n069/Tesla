import React from "react";
import "./Header.css";
const Header = () => {
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
    </div>
  );
};

export default Header;
