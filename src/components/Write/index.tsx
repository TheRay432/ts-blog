import React from "react";
import Develop from "../Home/Develop";
import DoSomething from "../Home/DoSomething";
import Life from "../Home/Life";
import Skill from "../Home/Skill";
import SideBar from "../Post/SideBar";
import WriteItem from "./WriteItem";

const Write = () => {
  return (
    <>
      <section className="sectionBg">
        <div className="container post_container">
          <WriteItem />
          <SideBar />
        </div>
        <Life />
        <DoSomething />
        <Develop />
        <Skill />
      </section>
    </>
  );
};

export default Write;
