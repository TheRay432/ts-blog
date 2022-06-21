import React from "react";
import Img from "@/images/plan02.jpg";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="flex-col bg-gray">
          <h1>關於我</h1>
          <img className="sidebar-img" src={Img} alt="" />
          <p>銘傳大學資管系畢業</p>
        </div>
        <div className="flex-col bg-green">
          <h1>類別</h1>
          <ul>
            <li>
              <Link to="/">音樂</Link>
            </li>
            <li>
              <Link to="/">生活</Link>
            </li>
            <li>
              <Link to="/">運動</Link>
            </li>
            <li>
              <Link to="/">程式</Link>
            </li>
            <li>
              <Link to="/">遊戲</Link>
            </li>
          </ul>
        </div>
        <div className="flex-col bg-pink">
          <h1>社群</h1>
          <div className="community">
            <i className="bi bi-github"></i>
            ray@github.com
          </div>
          <div className="community">
            <i className="bi bi-facebook fb"></i>
            ray@facebook.com
          </div>
          <div className="community">
            <i className="bi bi-twitter tw"></i>
            ray@twitter.com
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
