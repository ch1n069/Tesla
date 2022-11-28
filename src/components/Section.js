import React from "react";
import "./Section.css";
import down__arrow from "../assets/images/down-arrow.svg";

const Section = (props) => {
  console.log(props.title);
  return (
    <div
      className="section__container"
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    >
      <div className="section__header">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        {/* <img src={props.imageUrl} alt="" /> */}
        <div className="section__footer ">
          <div className="buttons">
            <button className="button__group">{props.leftButton}</button>
            <button className=" left__button button__group">
              {props.rightButton}
            </button>
          </div>

          <div className="down__arrow">
            <img className="arrow" src={down__arrow} alt="down__arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
