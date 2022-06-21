import React from "react";
import postImg from "@/images/plan01.jpg";
import { Link } from "react-router-dom";
const CardItem = () => {
  return (
    <>
      <div className="post-card-item">
        <div className="post-card">
          <div className="img-container">
            <img src={postImg} alt="" />
          </div>
          <div className="card-content">
            <div className="card-content-top">
              <div className="card-userName">
                <i className="bi bi-person"></i>
                ray
              </div>
              <div className="card-time">
                <i className="bi bi-alarm"></i>
                3天前
              </div>
            </div>
            <h1>OKOK</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              odio hic reiciendis quo, ab sunt sapiente harum. Ipsum nam at
              dolorem quam reprehenderit ullam corporis.
            </p>
            <Link to="/">查看更多</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
