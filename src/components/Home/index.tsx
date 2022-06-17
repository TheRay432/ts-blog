import React from "react";
import Develop from "./Develop";
import DoSomething from "./DoSomething";
import Feeling from "./Feeling";
import Life from "./Life";

const Home = () => {
  return (
    <>
      <Feeling />
      <section className="sectionBg">
        <Life />
        <DoSomething />
        <Develop />
      </section>
    </>
  );
};

export default Home;
