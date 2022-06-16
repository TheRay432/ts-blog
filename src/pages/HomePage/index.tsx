import React from "react";
import DoSomething from "src/components/Home/DoSomething";
import Feeling from "../../components/Home/Feeling";
import Life from "../../components/Home/Life";
const HomePage = () => {
  return (
    <>
      <Feeling />
      <section className="sectionBg">
        <Life />
        <DoSomething />
      </section>
    </>
  );
};

export default HomePage;
