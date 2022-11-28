import React from "react";
import Section from "../components/Section";
import "./Home.css";

const tes_data = [
  {
    title: "Model 3",
    subtitle: "Schedule a test drive",
    image: "../images/model-3.jpg",
  },
  {
    title: "Model Y",
    subtitle: "Schedule a test drive",
    image: "../images/model-y.jpg",
  },
];
console.log("test", tes_data);

// all imports happen above
const Home = () => {
  return (
    <div className="home__container">
      {/* Home */}
      {tes_data.map((data) => {
        return (
          <Section
            title={data.title}
            description={data.subtitle}
            imageUrl={data.image}
          />
        );
      })}
    </div>
  );
};

export default Home;
