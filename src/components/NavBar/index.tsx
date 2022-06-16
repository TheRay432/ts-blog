import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  const [menuShow, setMenuShow] = useState("");
  const handMunuToggle = (show: string) => {
    setMenuShow(show);
  };
  useEffect(() => {
    if (menuShow) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "unset";
  }, [menuShow]);
  return (
    <header className="header">
      <div className={`container nav_container ${menuShow}`}>
        <Link to="/" className="nav_left">
          <i className="bi bi-book-half"></i>Ray's Blog
        </Link>
        <div className="nav_right">
          <ul className="ul_list">
            <NavLink to="/">首頁</NavLink>
            <NavLink to="/">貼文</NavLink>
            <NavLink to="/">我的貼文</NavLink>
            <NavLink to="/">發文</NavLink>
          </ul>
          <div className="btn_group">
            <Link className="loginBtn" to="/">
              登入
            </Link>
            <Link className="registerBtn" to="/">
              註冊
            </Link>
          </div>
        </div>
        <i className="bi bi-list" onClick={() => handMunuToggle("show")}></i>
        <i className="bi bi-x" onClick={() => handMunuToggle("")}></i>
      </div>
    </header>
  );
};

export default NavBar;
