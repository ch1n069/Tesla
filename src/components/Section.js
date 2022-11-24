import React from "react";
import "./Section.css";

const Section = () => {
  return (
    <div className="section__container">
      <div className="section__header">
        <h1>Model S</h1>
        <p>Order online for touchless delivery</p>
        <div className="section__footer">
          <button className="right__button">Order online</button>
          <button>Existing inventory</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
