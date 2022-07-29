import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="container" style={{ minHeight: "100vh" }}>
        <div className="notfound">
          <img
            src="https://myvueblog.netlify.app/img/error.1daa15d7.svg"
            alt=""
          />
          <div className="notfound_info">
            <h1>
              <span>404 Error</span> <br /> <p>Page Not Found</p>
            </h1>
            <p>
              你在找尋的頁面不存在。請檢察網址是否正確，或是回到首頁重新瀏覽網站
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
