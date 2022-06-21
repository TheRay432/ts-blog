import React from "react";
import Develop from "../Home/Develop";
import DoSomething from "../Home/DoSomething";
import Life from "../Home/Life";
import Skill from "../Home/Skill";
import PostCard from "./PostCard";
import SideBar from "./SideBar";

const Post = () => {
  return (
    <>
      <section className="sectionBg">
        <div className="container post_container">
          <PostCard />
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

export default Post;
