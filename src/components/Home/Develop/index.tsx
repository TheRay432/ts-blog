import React from "react";
import { Link } from "react-router-dom";
const Develop = () => {
  return (
    <>
      <div className="container dev_container">
        <div className="dev_first">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <div className="dev_right">
            <h1 className="green_h1">後端開發</h1>
            <p>
              本網站使用nodeJS來進行後端開發,並使用express框架 <br />
              使用者的資料會儲存在MongoDB中, 並且密碼會進行加密
              <br />
              我們不會知道使用者的密碼為何,減少造成使用者密碼被識破的機率.
            </p>
            <Link className="greeen_a" to="/">
              立即去註冊吧!
            </Link>
          </div>
        </div>

        <div className="dev_first reverse">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <div className="dev_right">
            <h1 className="blue_h1">前端開發</h1>
            <p>
              本網站使用React前端框架來進行前端開發一頁式網站 <br />
              並使用TypeScript來做開發語言,且有使用redux 來進行狀態管理
              <br />
              並使用saga在做中間層處理api,還有使用SASS預處理器來撰寫網頁外觀
            </p>
            <Link className="blue_a" to="/">
              立即去註冊吧!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Develop;
