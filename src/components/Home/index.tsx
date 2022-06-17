import React from "react";
import Develop from "./Develop";
import DoSomething from "./DoSomething";
import Feeling from "./Feeling";
import Life from "./Life";
import Skill from "./Skill";

const Home = () => {
  return (
    <>
      <Feeling />
      <section className="sectionBg">
        <Life />
        <DoSomething />
        <Develop />
        <Skill />
      </section>
    </>
  );
};

export default Home;
