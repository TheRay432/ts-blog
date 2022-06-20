import React from "react";
import infoImg from "@/images/info.jpg";
const Life = () => {
  return (
    <>
      <div className="container life_container">
        <img className="life_img" src={infoImg} alt="" />
        <div className="life_right">
          <h1>讓我們幫你抒發生活上的情感吧!</h1>
          <p>
            只要簡單的幾分鐘,就能夠寫下一整天
            <br />
            在生活上發生的事情,並且步驟上也是相當簡單
            <br />
            無論是在註冊或發文程序上都能讓你
            <br />
            能夠快速上手
          </p>
        </div>
      </div>
    </>
  );
};

export default Life;
