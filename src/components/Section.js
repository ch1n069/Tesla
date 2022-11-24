import React from "react";
import "./Section.css";
import down__arrow from "../images/down-arrow.svg";

const Section = () => {
  return (
    <div className="section__container">
      <div className="section__header">
        <h1>Model S</h1>
        <p>Order online for touchless delivery</p>
        <div className="section__footer">
          <button className="right__button">Order online</button>
          <button className="right__button left__button">
            Existing inventory
          </button>
          <div className="down__arrow">
            <img className="arrow" src={down__arrow} alt="down__arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
