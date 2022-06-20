import React from "react";
import htmlIcon from "@/images/HtmlIcon.svg";
import cssIcon from "@/images/CssIcon.svg";
import tsIcon from "@/images/typescript.svg";
import reactIcon from "@/images/ReactIcon.svg";
import nodeIcon from "@/images/icon-nodeJs.svg";
import npmIcon from "@/images/npmIcon.svg";
import mongoIcon from "@/images//MongoDBIcon.svg";
const Skill = () => {
  return (
    <>
      <div className="container skill_container">
        <h1 className="skill_h1">使用技術</h1>
        <div className="skill">
          <div className="icon">
            <img src={htmlIcon} alt="" />
            <p>HTML</p>
          </div>
          <div className="icon">
            <img src={cssIcon} alt="" />
            <p>CSS</p>
          </div>
          <div className="icon">
            <img src={tsIcon} alt="" />
            <p>TypeScript</p>
          </div>
          <div className="icon">
            <img src={reactIcon} alt="" />
            <p>React</p>
          </div>
          <div className="icon second">
            <img src={nodeIcon} alt="" />
            <p>NodeJs</p>
          </div>
          <div className="icon second">
            <img src={npmIcon} alt="" />
            <p>Npm</p>
          </div>
          <div className="icon second">
            <img src={mongoIcon} alt="" />
            <p>MongoDB</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
