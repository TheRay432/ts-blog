import React from "react";
import { Link } from "react-router-dom";

const Feeling = () => {
  return (
    <>
      <section className="imgBg">
        <div className="bg_container">
          <h1>
            寫下你的<span>心情吧!</span>
          </h1>
          <p>將生活上的煩惱或開心的事情都寫下吧!</p>
          <Link className="redBtn" to="/">
            立即出發去發文
          </Link>
        </div>
      </section>
    </>
  );
};

export default Feeling;
