import React from "react";
import Section from "../components/Section";
import "./Home.css";

// all imports happen above
const Home = () => {
  return (
    <div className="home__container">
      {/* Home */}
      <Section />
      <Section />
      <Section />
    </div>
  );
};

export default Home;
